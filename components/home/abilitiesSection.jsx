import React from 'react'
import Link from 'next/link'
import styled from "styled-components"
import { HomeSection } from "./homeSection"

const AbilitiesHomeSection = styled(HomeSection)`
&& {
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    background: rgb(104,26,59);
    background: linear-gradient(-30deg, rgba(104,26,59,1) 0%, rgba(123,36,76,1) 100%);
  }
}
`
const AbilityWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 960px;
  grid-gap: 80px;

  @media (max-width: 640px) {
    grid-gap: 48px;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`
const Ability = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 120px;
`
const AbilityIcon = styled.i`
  color: var(--color-secondary);
  font-size: 48px;
  font-style: normal;
  font-family: monospace;
`
const AbilityCaption = styled.p`
  color: var(--gray__100);
  text-align: center;
`
class AbilitiesSection extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <AbilitiesHomeSection id="abilities">
        <AbilityWrapper>
          <Ability>
            <AbilityIcon>i</AbilityIcon>
            <AbilityCaption className="typography-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            </AbilityCaption>
          </Ability>
          <Ability>
            <AbilityIcon>i</AbilityIcon>
            <AbilityCaption className="typography-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </AbilityCaption>
          </Ability>
          <Ability>
            <AbilityIcon>i</AbilityIcon>
            <AbilityCaption className="typography-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            </AbilityCaption>
          </Ability>
        </AbilityWrapper>
      </AbilitiesHomeSection>
    );
  }
}

export default AbilitiesSection;
