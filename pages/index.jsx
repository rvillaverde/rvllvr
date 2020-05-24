import React from 'react';
import { getProjects } from '../utils/projects'
import { getSkills } from '../utils/skills'
import styled from "styled-components"
import Parallax from '../components/parallax'

import Layout from '../components/layout'
import AboutSection from "../components/home/aboutSection"
import WorkSection from "../components/home/workSection"
import ContactSection from "../components/home/contactSection"
import AbilitiesSection from "../components/home/abilitiesSection"
import SkillSection from "../components/home/skillSection"
import ViewportContainer from '../components/viewportContainer'
import { HomeSection, HomeTitle } from "../components/home/homeSection"

const IntroViewportContainer = styled(ViewportContainer)`
  align-items: flex-end;
  color: var(--gray__100);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0;
  z-index: 4;

  h2, h4 {
    position: relative;
  }

  h2 {
    text-align: right;
    margin-bottom: 8px;
  }

  h4 {
    margin-bottom: 12px;
    padding-left: 36px;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    padding: 0;

    h4 {
      text-align: right;
    }
  }
`
const IntroSection = styled(HomeSection)`
  margin-top: calc(var(--header-height) * -1);
  min-height: 680px;
  padding: 64px 80px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  &::before {
    background: rgb(49,24,71);
    background: linear-gradient(-30deg, rgba(49,24,71,1) 0%, rgba(123,36,76,1) 76%, rgba(104,26,59,.6) 100%);
    opacity: 0.8;
    z-index: 2;
  }

  @media (max-width: 540px) {
    padding: 48px;
  }
`

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    const projects = await getProjects();
    const skills = await getSkills();
    return { projects, skills }
  }

  render() {
    return (
      <Layout home>
        <IntroSection id="home">
          <Parallax image="/img/home_background.jpg">
          </Parallax>
          <IntroViewportContainer>
            <h2 className="typography-headline2">Hi there, <br/>I'm Romina</h2>
            <h4 className="typography-headline4">web designer <br/>& developer.</h4>
          </IntroViewportContainer>
        </IntroSection>
        <AboutSection></AboutSection>
        <AbilitiesSection></AbilitiesSection>
        <SkillSection skills={ this.props.skills }></SkillSection>
        <WorkSection projects={ this.props.projects }></WorkSection>
        <ContactSection></ContactSection>
      </Layout>
    )
  }
}

export default Home;
