import React from 'react'
import Link from 'next/link'
import styled from "styled-components"
import { HomeSection, HomeTitle } from "./homeSection"

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
const ProjectCard = styled.a`
  width: 100%;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 0px 8px white;
  transition: all .3s ease-in-out;
  background-color: var(--color-tertiary__200);
  background-image: url('${ (props) => props.cover }');
  background-size: cover;
  background-repeat: no-repeat;
  
  &::before {
    content: "";
    width: 100%;
    display: block;
    padding-top: 100%;
  }

  &::after {
    transition: all .3s ease-in-out;
    opacity: 0;
    content: "";
    display: block;
    position: absolute;
    background-color: var(--gray__100);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  
  &:hover::after {
    opacity: 0.9;
  }
`
const ProjectInfo = styled.div`
  transition: all .3s ease-in-out;
  position: absolute; 
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 4;
  padding: 24px 48px;
  
  h3 {
    transition: all .3s ease-in-out;
    opacity: 0;
    transform: translateY(100%);
    margin: 0;
    margin-bottom: 24px;
    color: var(--color-primary);
    text-align: center;
  }

  hr {
    transition: all .3s ease-in-out;
    border-top: 1px solid var(--color-primary);
    width: 40%;
    transform: scaleX(0);
    opacity: 0;
    margin: 0;
  }
  
  p {
    transition: all .3s ease-in-out;
    opacity: 0;
    transform: translateY(-100%);
    margin: 0;
    margin-top: 24px;
    text-align: center;
    color: var(--color-tertiary);
  }

  &:hover {
    opacity: 1;

    h3 {
      opacity: 1;
      transform: translateY(0);
    }

    hr {
      opacity: 1;
      transform: scaleX(1);
    }
  
    p {
      opacity: 1;
      transform: translateY(0);
    }
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
            <Link key={ project.project_id } href="/work/[id]" as={`/work/${project.project_id}`}>
              <ProjectCard id={`project-${ project.project_id }`} cover={ project.cover_url } href={`/work/${project.project_id}`}>
                <ProjectInfo>
                  <h3 className="typography-headline3">{project.name}</h3>
                  <hr/>
                  <p className="typography-body">{project.technologies}</p>
                </ProjectInfo>
              </ProjectCard>
            </Link>
          ))}
        </ProjectGrid>
      </WorkHomeSection>
    );
  }
}

export default WorkSection;
