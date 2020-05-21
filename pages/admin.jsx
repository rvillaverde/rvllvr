import React from 'react';
import { handleAuthSSR } from '../utils/auth';
import { getProjects } from '../utils/projects'
import { getSkills } from '../utils/skills'

import Layout from '../components/layout'
import ViewportContainer from '../components/viewportContainer'
import SkillSection from '../components/admin/skillSection'
import ProjectSection from '../components/admin/projectSection'
import styled from "styled-components"

const MyViewportContainer = styled(ViewportContainer)`
&& {
  background-color: white;
}
`

class Admin extends React.Component {
  static getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx);
    const projects = await getProjects();
    const skills = await getSkills();
    return { projects, skills }
  }

  render() {
    return (
      <Layout>
        <MyViewportContainer>
          <SkillSection skills={this.props.skills}/>
          <ProjectSection projects={this.props.projects}/>
        </MyViewportContainer>
      </Layout>
    )
  }
}

export default Admin;
