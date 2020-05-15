import React from 'react';
import Link from 'next/link';
import styled from "styled-components"

import Layout from '../components/layout'
import WorkSection from "../components/workSection"
import ContactSection from "../components/contactSection"
import ViewportContainer from '../components/viewportContainer'
import { HomeSection, HomeTitle } from "../components/homeSection"

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <IntroSection>
          <MyViewportContainer>
            <h2 className="typography-headline2">Hi there, <br/>I'm Romina</h2>
            <h4 className="typography-headline4">web designer <br/>& developer.</h4>
          </MyViewportContainer>
        </IntroSection>
        <AboutSection id="about">
          <AboutSectionTitle>About</AboutSectionTitle>
        </AboutSection>
        <InfoSection id="info"></InfoSection>
        <SkillSection id="skils">
          <SkillSectionTitle>Skills</SkillSectionTitle>
        </SkillSection>
        <WorkSection></WorkSection>
        <ContactSection></ContactSection>
      </Layout>
    )
  }
}

const MyViewportContainer = styled(ViewportContainer)`
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
  &::before {
    background-color: var(--color-secondary__200);
    opacity: 0.48;
  }
`
const AboutSectionTitle = styled(HomeTitle)`
  opacity: .28;
  left: 0;
  bottom: 0;
  color: var(--gray__100);
`
const InfoSection = styled(HomeSection)`
  &::before {
    background: rgb(104,26,59);
    background: linear-gradient(-30deg, rgba(104,26,59,1) 0%, rgba(123,36,76,1) 100%);
  }
`
const SkillSection = styled(HomeSection)`
  min-height: 444px;
  
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

export default Home;
