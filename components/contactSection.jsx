import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import TextInput from './textInput'
import Textarea from './textarea'
import Button from './button'

import { HomeSection, HomeTitle } from "./homeSection"

const Section = styled(HomeSection)`
  background-color: var(--color-tertiary);
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 36px 24px;
  }
`
const ContactSectionTitle = styled(HomeTitle)`
  opacity: .08;
  right: 0;
  bottom: 0;
  color: var(--color-tertiary__100);
`
const ContactSubsection = styled.div`
  position: relative;
  color: white;

  @media (max-width: 768px) {
    text-align: left;
    width: 100%;

    &:nth-of-type(1) {
      padding-bottom: 64px;
      text-align: center;

      br:nth-of-type(1) {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    &:nth-of-type(1) {
      padding-right: 64px;
      text-align: right;
    }
  
    &:last-child {
      padding-left: 64px;
      border-left: 1px solid var(--color-secondary__200);
    }
  }
`

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section id="contact">
        <ContactSectionTitle>Contact</ContactSectionTitle>
        <ContactSubsection>
          <h1 className="typography-headline1">Let's<br /> work<br />together!</h1>
        </ContactSubsection>
        <ContactSubsection>
          <form>
            <TextInput label="Your name" name="name" id="name-input" type="text"></TextInput>
            <TextInput label="Your email" name="email" id="email-input" type="text"></TextInput>
            <Textarea label="Message" name="message" id="message-input"></Textarea>
            <Button type="button">Send</Button>
          </form>
        </ContactSubsection>
      </Section>
    );
  }
}

export default ContactSection;
