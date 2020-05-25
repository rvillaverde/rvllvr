import React from 'react'
import styled from 'styled-components'
import { sendContactEmail } from '../../utils/emails'

import FormRow from '../forms/formRow'
import TextField from '../forms/textField'
import Textarea from '../forms/textareaField'
import Button from '../buttons/primaryButton'

import { HomeSection, HomeTitle } from "./homeSection"

const Section = styled(HomeSection)`
  background-color: var(--color-tertiary);


  input, textarea {
    border-color: white;
  }

  @media (max-width: 767px) {
    padding: 36px 24px;
  }
`
const ContactSectionInner = styled.div`
  margin: 0 auto;
  max-width: 760px;
  width: 100%;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 0;

  @media (max-width: 767px) {
    flex-direction: column;
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

  @media (max-width: 767px) {
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
      flex-grow: 1;
    }
  }
`
const Alert = styled.p`
  color: white;
  margin-bottom: 12px;
  a {
    color: var(--color-secondary__200);
    text-decoration: none;
  }
`

class ContactSection extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { success: false, error: false, loading: false }
  }

  async handleSubmit(e) {
    e.preventDefault()
    this.setState({ loading: true })
    let formData = new FormData(e.target)
    let res = await sendContactEmail(formData)
    if (res.status === 200) {
      this.setState({ success: true, error: false, loading: false })
    } else {
      this.setState({ success: false, error: true, loading: false })
    }
  }

  render() {
    return (
      <Section id="contact">
        <ContactSectionTitle>Contact</ContactSectionTitle>
          <ContactSectionInner>
            <ContactSubsection>
              <h1 className="typography-headline1">Let's<br /> work<br />together!</h1>
            </ContactSubsection>
            <ContactSubsection>
              <form onSubmit={ this.handleSubmit }>
                <FormRow>
                  <TextField label="Your name" name="name" id="name-input" type="text" required></TextField>
                </FormRow>
                <FormRow>
                  <TextField label="Your email" name="email" id="email-input" type="email" required></TextField>
                </FormRow>
                <FormRow>
                  <Textarea label="Message" name="message" id="message-input" required></Textarea>
                </FormRow>
                { this.state.success &&
                  <Alert className="typography-body">
                    Thank you for contacting me, your message was sent successfully.
                    I'll get in touch soon with you soon.
                  </Alert>
                }
                { this.state.error &&
                  <Alert className="typography-body">
                    An error ocurred sending your message. Please try again or contact me directly at my email:
                    <a href="mailto:romina.villaverde@gmail.com"> romina.villaverde@gmail.com</a>.
                  </Alert>
                }
                <Button type="submit" disabled={ this.state.loading }>Send</Button>
              </form>
            </ContactSubsection>
          </ContactSectionInner>
      </Section>
    );
  }
}

export default ContactSection;
