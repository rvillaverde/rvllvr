import React from 'react'
import Link from 'next/link'
import styled from "styled-components"
import { HomeSection } from "./homeSection"
import { AbilityIcon_1, AbilityIcon_2, AbilityIcon_3 } from '../icons'

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
`
const AbilityCaption = styled.p`
  color: var(--gray__100);
  margin-top: 12px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
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
            <AbilityIcon>
              <AbilityIcon_1 />
            </AbilityIcon>
            <AbilityCaption className="typography-body">
              Front end developer
            </AbilityCaption>
          </Ability>
          <Ability>
            <AbilityIcon>
              <AbilityIcon_2 />
            </AbilityIcon>
            <AbilityCaption className="typography-body">
              With an eye on design
            </AbilityCaption>
          </Ability>
          <Ability>
            <AbilityIcon>
              <AbilityIcon_3 />
            </AbilityIcon>
            <AbilityCaption className="typography-body">
              Self manageable websites
            </AbilityCaption>
          </Ability>
        </AbilityWrapper>
      </AbilitiesHomeSection>
    );
  }
}

export default AbilitiesSection;
