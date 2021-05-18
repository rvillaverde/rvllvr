import Link from "next/link";
import React from "react";
import styled from "styled-components";
import PrimaryButton from "../buttons/primaryButton";
import ViewportContainer from "../viewportContainer";
import { HomeSection, HomeTitle } from "./homeSection";

const AboutHomeSection = styled(HomeSection)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 68px 0;

    &::before {
      background-color: var(--color-secondary__200);
      opacity: 0.48;
    }
  }
`;
const AboutViewportContainer = styled(ViewportContainer)`
  && {
    color: var(--color-tertiary);
    display: flex;
    flex-direction: column;
    max-width: 640px;
    position: relative;

    @media (max-width: 540px) {
      padding: 0 24px !important;
    }
  }
`;
const AboutText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;
const ResumeButton = styled(PrimaryButton)`
  && {
    margin-top: 36px;
    margin-left: auto;

    @media (max-width: 540px) {
      margin: auto;
      margin-top: 36px;
    }
  }
`;
const ProfilePic = styled.div`
  width: 180px;
  min-width: 180px;
  flex-srink: 1;
  background-color: var(--gray__100);
  border-radius: 50%;
  margin-right: 64px;
  position: relative;
  overflow: hidden;
  background-image: url("${(props) => props.image}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 540px) {
    margin-right: 0;
    margin-bottom: 48px;
  }

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  img {
    position: absolute;
    top: 0;
    width: auto;
    height: 100%;
  }
`;
const AboutSectionTitle = styled(HomeTitle)`
  && {
    opacity: 0.28;
    left: 0;
    bottom: 0;
    color: var(--gray__100);
  }
`;

class AboutSection extends React.Component {
  render() {
    return (
      <AboutHomeSection id="about">
        <AboutSectionTitle>About</AboutSectionTitle>
        <AboutViewportContainer>
          <AboutText>
            <ProfilePic image="/img/profile-2.jpg"></ProfilePic>
            <p className="typography-body">
              Full stack developer with over 10 years experience working with
              different companies and technologies.
              <br />
              Proactive and deeply analytical, as well as creative, curious and
              detail-oriented. I have a great autodidact ability, as I’m always
              looking to learn new things to improve my work.
              <br />
              <br />
              Currently working at MURAL as a full stack developer.
            </p>
          </AboutText>

          <ResumeButton href="/resume" as="a" target="_blank">
            View my resume
          </ResumeButton>
        </AboutViewportContainer>
      </AboutHomeSection>
    );
  }
}

export default AboutSection;
