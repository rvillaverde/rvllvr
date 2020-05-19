import React from 'react'
import Link from 'next/link'
import styled from "styled-components"
import { HomeSection, HomeTitle } from "./homeSection"

const SkillHomeSection = styled(HomeSection)`
  min-height: 444px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::before {
    background-color: var(--color-complementary__04);
    opacity: 40%;
  }
`
const SkillSectionTitle = styled(HomeTitle)`
  opacity: .24;
  left: 0;
  bottom: 0;
  color: var(--color-complementary__04);
`
const SkillWrapper = styled.div`
  display: grid;
  grid-column-gap: 64px;
  grid-row-gap: 20px;
  grid-template-columns: 1fr 1fr;
  max-width: 840px;
  position: relative;
  width: 100%;
  
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    max-width: 460px;
    padding: 0 24px;
  }
`
const Skill = styled.div`
  display: flex;
  `
const SkillName = styled.p`
  color: var(--color-tertiary);
  margin: 0;
  font-weight: 500;
`
const SkillRatio = styled.span`
  position: relative;
  height: 16px;
  background-color: var(--gray__100);
  max-width: 240px;
  width: 100%;
  margin: auto 0;
  margin-left: auto;

  &::after {
    background-color: var(--color-primary);
    content: "";
    width: ${ (props) => props.ratio }%;
    height: 16px;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (max-width: 460px) {
    max-width: 200px;
  }
`

class SkillSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <SkillHomeSection id="skills">
        <SkillSectionTitle>Skills</SkillSectionTitle>
        <SkillWrapper>
          { this.props.skills.map(skill => (
            <Skill key={skill.skill_id}>
              <SkillName>{skill.name}</SkillName>
              <SkillRatio ratio={skill.ratio}></SkillRatio>
            </Skill>
          ))}
        </SkillWrapper>
      </SkillHomeSection>
    );
  }
}

export default SkillSection;
