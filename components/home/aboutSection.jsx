import React from 'react'
import styled from "styled-components"
import ViewportContainer from '../viewportContainer'
import { HomeSection, HomeTitle } from "./homeSection"

const AboutHomeSection = styled(HomeSection)`
&& {
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    background-color: var(--color-secondary__200);
    opacity: 0.48;
  }
}
`
const AboutViewportContainer = styled(ViewportContainer)`
&& {
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
&& {
  opacity: .28;
  left: 0;
  bottom: 0;
  color: var(--gray__100);
}
`

class AboutSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <AboutHomeSection id="about">
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
    </AboutHomeSection>
    );
  }
}

export default AboutSection;
