import React from 'react';
import { handleAuthSSR } from '../utils/auth';
import Layout from '../components/layout'
import ViewportContainer from '../components/viewportContainer'
import SkillSection from '../components/admin/skillSection'
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
          <SkillSection />
        </ViewportContainer>
      </Layout>
    )
  }
}

export default Admin;
