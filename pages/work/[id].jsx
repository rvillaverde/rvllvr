import React from 'react'
import { findProject, getProjects } from '../../utils/projects';

import styled from "styled-components"

import Layout from '../../components/layout'
import ViewportContainer from '../../components/viewportContainer'
import PrimaryButton from '../../components/buttons/primaryButton'
import { LinkIcon } from '../../components/icons'
import ContactSection from '../../components/home/contactSection'
import ProjectCard from '../../components/projectCard'
import { HomeSection, HomeTitle } from "../../components/home/homeSection"


class ProjectDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  static getInitialProps = async (ctx) => {
    const project = await findProject('internal_url', ctx.query.id)
    const projects = await getProjects()
    return { project, projects }
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
        <WorkHomeSection id="work">
          <WorkSectionTitle>View more</WorkSectionTitle>
            <ProjectWrapper>
              { this.props.projects.map(project => (
                project.project_id != this.props.project.project_id && 
                  <StyledProjectCard key={ project.project_id } project={project} />
              ))}
              <ProjectPadding />
            </ProjectWrapper>
          </WorkHomeSection>
        <ContactSection></ContactSection>
      </Layout>
    )
  }
}
const ProjectPadding = styled.div`
@media (min-width: 461px) {
  display: none;
}
@media (max-width: 460px) {
  min-width: 24px;
}
`
const StyledProjectCard = styled(ProjectCard)`
&& {
  @media (max-width: 460px) {
    min-width: calc(100vw-48px);
    flex-shrink: 0;

    &:last-child {
      margin-right: 24px;
    }
  }
}
`

const WorkHomeSection = styled(HomeSection)`
  padding: 96px 0;

  @media (max-width: 460px) {
    min-height: unset;
    padding: 24px 0;
  }
`
const WorkSectionTitle = styled(HomeTitle)`
  opacity: .12;
  left: 0;
  bottom: 0;
  color: var(--color-tertiary__200);
  font-size: 240px;
  margin: -24px -12px;

  @media (max-width: 460px) {
    top: 0;
    font-size: 76px;
  }
`
const ProjectWrapper = styled(ViewportContainer)`
&& {
  display: flex;
  
  > a:not(:first-child) {
    margin-left: 24px;
  }

  @media (max-width: 460px) {
    max-width: unset;
    overflow-x: auto;
    padding: 24px;
  }
}
`
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
