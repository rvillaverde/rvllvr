import React from 'react'
import styled from "styled-components"
import { HomeSection, HomeTitle } from "./homeSection"
import ProjectCard from '../../components/projectCard'
import VisibilitySensor from '../visibilitySensor'

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
const StyledProjectCard = styled(ProjectCard)`
  && {
    transition: opacity .6s ease-in; 
    opacity: ${ (props) => props.visible ? 1 : 0 };
    transition-delay: ${ props => props.delay && props.visible ? `${ props.delay }` : 0 }s;
  }
`

class WorkSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
    this.onChange = this.onChange.bind(this)
  }

  onChange(isVisible) {
    if (!this.state.visible) {
      this.setState({ visible: isVisible })
    }
  }
  
  render() {
    return (
      <VisibilitySensor onChange={ this.onChange } threshold={ 240 }>
        <WorkHomeSection id="work">
          <WorkSectionTitle>Work</WorkSectionTitle>
          <ProjectGrid>
            { this.props.projects.map((project, i) => (
              <StyledProjectCard key={ project.project_id } project={project} visible={ this.state.visible } delay={i*0.25} />
            ))}
          </ProjectGrid>
        </WorkHomeSection>
      </VisibilitySensor>
    );
  }
}

export default WorkSection;
