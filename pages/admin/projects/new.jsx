import React from 'react'
import Router from 'next/router'
import { handleAuthSSR } from '../../../utils/auth';

import styled from "styled-components"
import ProjectForm from '../../../components/admin/projectForm'

import Layout from '../../../components/layout'
import ViewportContainer from '../../../components/viewportContainer'

import { createProject } from '../../../utils/projects'

const defaultState = { loading: false }

class NewProjectSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    this.newProject = this.newProject.bind(this)
  }

  static getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx);
    return {}
  }

  async newProject(formData) {
    this.setState({ loading: true })
    await createProject(formData)
    Router.push(`/admin`)
  }

  render() {
    return (
      <Layout>
        <Section>
          <Title className="typography-headline4">New Project</Title>
          <ProjectForm onSubmit={ this.newProject }/>
        </Section>
      </Layout>
    )
  }
}


const Section = styled(ViewportContainer)`
  background-color: white;
  padding: 24px 0;

  form {
    margin: auto;
    padding: 24px 0;
    width: 100%;
  }

  @media (min-width: 1280px) {
    padding: 24px;
  }
`
const Title = styled.h4`
  color: var(--gray__600)
`

export default NewProjectSection;
