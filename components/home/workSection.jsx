import React from 'react'
import styled from "styled-components"
import { HomeSection, HomeTitle } from "./homeSection"
import ProjectCard from '../../components/projectCard'

const WorkHomeSection = styled(HomeSection)`
  min-height: 600px;
`
const WorkSectionTitle = styled(HomeTitle)`
  opacity: .12;
  right: 0;
  top: 0;
  color: var(--color-tertiary__200);
`
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
  max-width: 1024px;
  margin: auto;
  padding: 96px 48px;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    padding: 0 24px;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <WorkHomeSection id="work">
        <WorkSectionTitle>Work</WorkSectionTitle>
        <ProjectGrid>
          { this.props.projects.map(project => (
            <ProjectCard key={ project.project_id } project={project}>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </WorkHomeSection>
    );
  }
}

export default WorkSection;
