import React from 'react';
import Link from 'next/link'
import styled from "styled-components";

import { MailIcon, GitIcon, LinkedInIcon } from "./icons";

class AppFooter extends React.Component {
  state = {
    visible: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    if (window.innerHeight + window.scrollY >= document.body.clientHeight + 140) {
      console.log('end')
      this.setState({ visible: true })
    } else {
      this.setState({ visible: false })
    }
  }

  render() {
    const { visible } = this.state

    return (
      <Footer>
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
`
const FooterLink = styled.a`
  margin: 0 12px;
  transition: opacity .3s ease-in-out;
  transition-delay: ${({delay}) => delay ? delay : 0};

  path {
    transition: all .3s ease-in-out;
  }

  &:hover {
    path {
      opacity: 1;
    }
  }
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
    path {
      opacity: 0.4;
    }
  }
`

export default AppFooter;

