import React from 'react';
import styled from "styled-components";

import { MailIcon, GitIcon, LinkedInIcon } from "./icons";

const FOOTER_HEIGHT = 140

class AppFooter extends React.Component {
  state = {
    visible: false,
    hide: true
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.toggleFooter()
    this.animateFooter()
  }

  animateFooter = () => {
    const { innerHeight, scrollY } = window
    const { clientHeight } = document.body

    if (Math.round(innerHeight + scrollY) >= clientHeight + FOOTER_HEIGHT - 20) {
      console.log('end')
      this.setState({ visible: true })
    } else {
      this.setState({ visible: false })
    }
  }

  toggleFooter = () => {
    const { innerHeight, scrollY } = window
    const { clientHeight } = document.body

    if (Math.round(innerHeight * 2 + scrollY) >= clientHeight) {
      this.setState({ hide: false })
    } else {
      this.setState({ hide: true })
    }
  }

  render() {
    const { visible, hide } = this.state

    return (
      <Footer hide={hide}>
        <FooterInfo visible={visible}>
          <FooterLink
            delay='.2s'
            href="mailto:romina.villaverde@gmail.com"
          >
            <MailIcon />
          </FooterLink>
          <FooterLink
            delay='.6s'
            href="https://github.com/rvillaverde"
            target="_blank"
          >
            <GitIcon />
          </FooterLink>
          <FooterLink
            delay='1s'
            href="https://www.linkedin.com/in/rominavillaverde/"
            target="_blank"
          >
            <LinkedInIcon />
          </FooterLink>
        </FooterInfo>
        <FooterInfo visible={visible}>
          <span className="caption">
            ©2020 - Romina Villaverde
          </span>
        </FooterInfo>
      </Footer>
    );
  }
}
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--footer-height);
  background-color: var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -4;
  opacity: ${({ hide }) => hide ? 0 : 1};
`
const FooterLink = styled.a`
  margin: 0 12px;
  transition: opacity .3s ease-in-out;
  transition-delay: ${({delay}) => delay ? delay : 0};

  path {
    transition: all .3s ease-in-out;
  }

  // &:hover {
  //   path {
  //     opacity: 1;
  //   }
  // }
`
const FooterInfo = styled.p`
  color: white;
  margin: 4px;
  text-align: center;

  ${FooterLink}, span {
    opacity: ${({ visible }) => visible ? 1 : 0};
  }

  span {
    transition: opacity 0.2s ease-in-out 1.4s;
  }

  &:hover {
    ${FooterLink} path {
      opacity: 0.4;
    }
  }

  ${FooterLink}:hover {
    path {
      opacity: 1;
    }
  }
`

export default AppFooter;

