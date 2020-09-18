import React from 'react';
import Router from 'next/router';
import fetch from 'node-fetch'
import { Cookies } from 'react-cookie';
import Layout from '../components/layout'
import styled from "styled-components"
import TextInput from '../components/forms/textField'
import FormRow from '../components/forms/formRow'
import Button from '../components/buttons/primaryButton'

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--footer-height));
  margin-top: calc(var(--header-height) * -1);
  padding-top: var(--header-height);
  background-color: var(--color-tertiary);
  box-sizing: border-box;
`
const MyForm = styled.form`
  padding: 24px;
  width: 100%;
  max-width: 400px;
`
const Legend = styled.p`
  color: var(--gray__100);
  margin-bottom: 12px;
`

const cookies = new Cookies();

class Login extends React.Component {
  state = { invalid: false };
  
  componentDidMount() {
    cookies.set('token', undefined);
  }

  onLogin = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const res = await fetch('/auth/login', {
      method: 'POST',
      body: data
    });

    if (res.status === 200) {
      const { token } = await res.json();
      cookies.set('token', token);
      this.setState({ token })
      Router.push('/admin')
    } else {
      console.log('usuario o contraseña incorrectos')
      this.setState({ invalid: true });
    }
  }

  render() {
    return (
      <Layout>
        <Container>
          <MyForm onSubmit={ this.onLogin } autoComplete="off">
            <FormRow>
              <TextInput label="Username" name="username" id="username-input" type="text"></TextInput>
            </FormRow>
            <FormRow>
              <TextInput label="Password" name="password" id="password-input" type="password" autoComplete="off"></TextInput>
            </FormRow>
            { this.state.invalid && 
              <Legend className="typography-body">
                User or password incorrect.
              </Legend>
            }
            <Button type="submit">Login</Button>
          </MyForm>
        </Container>
      </Layout>
    )
  }
}

export default Login;
