import React from 'react'
import Router from 'next/router'
import { handleAuthSSR } from '../../../utils/auth';
import { getProject, editProject } from '../../../utils/projects';

import styled from "styled-components"
import ProjectForm from '../../../components/admin/projectForm'

import Layout from '../../../components/layout'
import ViewportContainer from '../../../components/viewportContainer'

const defaultState = { loading: false }

class NewProjectSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    this.updateProject = this.updateProject.bind(this)
  }

  static getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx)
    const project = await getProject(ctx.query.id)
    return { project }
  }

  async updateProject(formData) {
    this.setState({ loading: true })
    await editProject(formData)
    Router.push(`/admin`)
  }

  render() {
    return (
      <Layout>
        <Section>
          <Title className="typography-headline4">New Project</Title>
          <ProjectForm project={ this.props.project } onSubmit={ this.updateProject }/>
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
