import React from "react";
import styled from "styled-components";
import { HomeSection } from "./homeSection";
import VisibilitySensor from "../visibilitySensor";
import { AbilityIcon_1, AbilityIcon_2, AbilityIcon_3 } from "../icons";
import MouseParallax from "../mouseParallax";

const AbilitiesHomeSection = styled(HomeSection)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 600px;

    &::before {
      background: rgb(104, 26, 59);
      background: linear-gradient(
        -30deg,
        rgba(104, 26, 59, 1) 0%,
        rgba(123, 36, 76, 1) 100%
      );
    }
  }
`;
const AbilityWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 960px;
  grid-gap: 100px;

  @media (max-width: 640px) {
    grid-gap: 48px;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;
const Ability = styled.div`
  transition: ${(props) => (props.visible ? "all .6s ease-in-out" : "none")};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 160px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition-delay: ${(props) =>
    props.delay && props.visible ? `${props.delay}` : 0}s;
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(30%)"};
`;
const AbilityIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;

  svg {
    width: 100%;
    height: auto;
  }
`;
const AbilityCaption = styled.p`
  color: var(--gray__100);
  margin-top: 20px;
  text-align: center;
  letter-spacing: 0.8px;
`;
class AbilitiesSection extends React.Component {
  state = { visible: false };

  get images() {
    return [
      "abilities_parallax/abilities_01.svg",
      "abilities_parallax/abilities_02.svg",
      "abilities_parallax/abilities_03.svg",
      "abilities_parallax/abilities_04.svg",
      "abilities_parallax/abilities_05.svg",
      "abilities_parallax/abilities_06.svg",
    ];
  }

  onChange = (isVisible) => {
    if (!this.state.visible) {
      this.setState({ visible: isVisible });
    }
  };

  render() {
    return (
      <VisibilitySensor onChange={this.onChange} threshold={120}>
        <AbilitiesHomeSection id="abilities">
          <MouseParallax images={this.images} />
          <AbilityWrapper>
            <Ability visible={this.state.visible}>
              <AbilityIcon>
                <AbilityIcon_1 />
              </AbilityIcon>
              <AbilityCaption className="typography-body">
                Full stack developer with an eye on design
              </AbilityCaption>
            </Ability>
            <Ability visible={this.state.visible} delay=".3">
              <AbilityIcon>
                <AbilityIcon_2 />
              </AbilityIcon>
              <AbilityCaption className="typography-body">
                Creative & detail oriented
              </AbilityCaption>
            </Ability>
            <Ability visible={this.state.visible} delay=".6">
              <AbilityIcon>
                <AbilityIcon_3 />
              </AbilityIcon>
              <AbilityCaption className="typography-body">
                Building modern apps with the latest technologies
              </AbilityCaption>
            </Ability>
          </AbilityWrapper>
        </AbilitiesHomeSection>
      </VisibilitySensor>
    );
  }
}

export default AbilitiesSection;
