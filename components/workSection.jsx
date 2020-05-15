import React from 'react'
import Link from 'next/link'
import styled from "styled-components"
import { HomeSection, HomeTitle } from "./homeSection"

const WorkHomeSection = styled(HomeSection)`
  min-height: 600px;
`
const WorkSectionTitle = styled(HomeTitle)`
  opacity: .12;
  right: 0;
  top: 0;
  color: var(--color-tertiary__200);
`

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WorkHomeSection id="work">
        <WorkSectionTitle>Work</WorkSectionTitle>
      </WorkHomeSection>
    );
  }
}

export default WorkSection;
