import React from 'react'
import Link from 'next/link'
import styled from "styled-components"
import { HomeSection, HomeTitle } from "./homeSection"

const Section = styled(HomeSection)`
  background-color: var(--color-tertiary);
  min-height: 520px;
`

const ContactSectionTitle = styled(HomeTitle)`
  opacity: .08;
  right: 0;
  bottom: 0;
  color: var(--color-tertiary__100);
`

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section id="contact">
        <ContactSectionTitle>Contact</ContactSectionTitle>
      </Section>
    );
  }
}

export default ContactSection;
