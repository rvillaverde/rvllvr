import React from 'react';
import { Cookies } from 'react-cookie';
import { handleAuthSSR } from '../utils/auth';

class Admin extends React.Component {
  static getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx);
    return {};
  }

  render() {
    return (
      <div>
        <h2>Admin page</h2>
        <p>Admin user logged in!</p>
      </div>
    );
  }
}

export default Admin;
