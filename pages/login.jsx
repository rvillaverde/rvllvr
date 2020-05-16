import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import fetch from 'node-fetch'
import { Cookies } from 'react-cookie';
import Layout from '../components/layout'
import ViewportContainer from '../components/viewportContainer'
import styled from "styled-components"
import TextInput from '../components/textInput'
import Button from '../components/button'

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
  max-width: 320px;
`
const Legend = styled.p`
  color: var(--gray__100);
`

const cookies = new Cookies();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { invalid: false };
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
      const token = (await res.json()).token;
      cookies.set('token', token);
      this.setState({
        token: token
      })
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
          <MyForm onSubmit={ this.onLogin }>
            <TextInput label="Username" name="username" id="username-input" type="text"></TextInput>
            <TextInput label="Password" name="password" id="password-input" type="password"></TextInput>
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
