import React from 'react';
import { getProjects } from '../utils/projects'
import { getSkills } from '../utils/skills'
import Link from 'next/link';
import styled from "styled-components"

import Layout from '../components/layout'
import WorkSection from "../components/home/workSection"
import ContactSection from "../components/home/contactSection"
import AbilitiesSection from "../components/home/abilitiesSection"
import SkillSection from "../components/home/skillSection"
import ViewportContainer from '../components/viewportContainer'
import { HomeSection, HomeTitle } from "../components/home/homeSection"

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
      <Layout>
        <IntroSection>
          <IntroViewportContainer>
            <h2 className="typography-headline2">Hi there, <br/>I'm Romina</h2>
            <h4 className="typography-headline4">web designer <br/>& developer.</h4>
          </IntroViewportContainer>
        </IntroSection>
        <AboutSection id="about">
          <AboutSectionTitle>About</AboutSectionTitle>
          <AboutViewportContainer>
            <ProfilePic></ProfilePic>
            <p className="typography-body">
            Full stack developer with over 10 years experience working with different companies and technologies.
            <br/>
            Proactive and deeply analytical, as well as creative, curious and detail-oriented.
            I have a great autodidact ability, as I’m always looking to learn new things to improve my work.
            <br/>
            Currently working freelance for different clients, designing and developing websites and applications.
            </p>
          </AboutViewportContainer>
        </AboutSection>
        <AbilitiesSection></AbilitiesSection>
        <SkillSection skills={ this.props.skills }></SkillSection>
        <WorkSection projects={ this.props.projects }></WorkSection>
        <ContactSection></ContactSection>
      </Layout>
    )
  }
}

const IntroViewportContainer = styled(ViewportContainer)`
  align-items: flex-end;
  color: var(--gray__100);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0;

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
  background-image: url('/img/home_background.jpg');
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
  }

  @media (max-width: 540px) {
    padding: 48px;
  }
`
const AboutSection = styled(HomeSection)`
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    background-color: var(--color-secondary__200);
    opacity: 0.48;
  }
`
const AboutViewportContainer = styled(ViewportContainer)`
  align-items: flex-start;
  color: var(--color-tertiary);
  display: flex;
  justify-content: center;
  max-width: 640px;
  position: relative;
  
  @media (max-width: 540px) {
    flex-direction: column;
    padding: 0 24px !important;
    align-items: center;
  
    p {
      text-align: center;
    }
  }
`
const ProfilePic = styled.div`
  width: 220px;
  min-width: 220px;
  flex-srink: 1;
  background-color: var(--gray__100);
  border-radius: 50%;
  margin-right: 64px;

  @media (max-width: 540px) {
    margin-right: 0;
    margin-bottom: 48px;
  }

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`
const AboutSectionTitle = styled(HomeTitle)`
  opacity: .28;
  left: 0;
  bottom: 0;
  color: var(--gray__100);
`

// const SkillSection = styled(HomeSection)`
//   min-height: 444px;
  
//   &::before {
//     background-color: var(--color-complementary__04);
//     opacity: 40%;
//   }
// `
// const SkillSectionTitle = styled(HomeTitle)`
//   opacity: .24;
//   left: 0;
//   bottom: 0;
//   color: var(--color-complementary__04);
// `

export default Home;
