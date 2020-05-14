import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import fetch from 'node-fetch'
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

class Login extends React.Component {
  constructor(props) {
    super(props);
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
    }
  }

  render() {
    return (
      <div>
        <h2>Login page</h2>
        <br></br>
        <form  onSubmit={ this.onLogin }>
          <input type="text" name="username" placeholder="username"/>
          <input type="password" name="password" placeholder="password"/>
          <button type="submit">Login</button>
        </form>
        <br></br>
        <Link href="/work">
          <a>Work</a>
        </Link>
        <br></br>
        <Link href="/admin">
          <a>Admin</a>
        </Link>
      </div >
    )
  }
}

export default Login;
