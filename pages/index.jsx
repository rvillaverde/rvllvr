import React from 'react';
import Link from 'next/link';
import styled from "styled-components"

import Layout from '../components/layout'
import WorkSection from "../components/workSection"
import ContactSection from "../components/contactSection"
import { HomeSection, HomeTitle } from "../components/homeSection"

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Background></Background>
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

const Background = styled(HomeSection)`
  background-image: url('/img/home_background.jpg');
  margin-top: calc(var(--header-height) * -1);
  min-height: 640px;

  &::before {
    background: rgb(49,24,71);
    background: linear-gradient(164deg, rgba(49,24,71,1) 0%, rgba(123,36,76,1) 76%, rgba(104,26,59,.6) 100%);
    opacity: 0.8;
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
