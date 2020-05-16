import React from 'react';
import { handleAuthSSR } from '../utils/auth';
import Layout from '../components/layout'
import ViewportContainer from '../components/viewportContainer'
import styled from "styled-components"

const MyViewportContainer = styled(ViewportContainer)`
  background-color: white;
`

class Admin extends React.Component {
  static getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx);
    return {};
  }

  render() {
    return (
      <Layout>
        <ViewportContainer>
          <h2>Admin page</h2>
          <p>Admin user logged in!</p>
        </ViewportContainer>
      </Layout>
    )
  }
}

export default Admin;
