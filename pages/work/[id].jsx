import React from 'react'
import { getProject } from '../../utils/projects';

import styled from "styled-components"

import Layout from '../../components/layout'
import ViewportContainer from '../../components/viewportContainer'
import PrimaryButton from '../../components/buttons/primaryButton'
import { LinkIcon } from '../../components/icons'


class ProjectDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  static getInitialProps = async (ctx) => {
    const project = await getProject(ctx.query.id)
    return { project }
  }

  render() {
    return (
      <Layout>
        <Section>
          <TitleWrapper>
            <Title className="typography-headline3">{ this.props.project.name }</Title>
            <PrimaryButton as="a" href={ this.props.project.url } target="_blank">
              <LinkIcon />
              <span>Visit { this.props.project.type }</span>
            </PrimaryButton>
          </TitleWrapper>
          { this.props.project.images.map(image => (
            <ProjectImage key={ image.image_id } src={ image.image_url }></ProjectImage>
          ))}
        </Section>
      </Layout>
    )
  }
}

const Section = styled(ViewportContainer)`
  background-color: white;
  max-width: 840px;
  margin: auto;
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
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h3`
  color: var(--color-primary)
`
const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 24px;

  &:last-child {
    margin-bottom: 24px;
  }
`
export default ProjectDetail;
