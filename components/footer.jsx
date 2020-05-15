import React from 'react';
import Link from 'next/link'
import styled from "styled-components";

import { MailIcon, GitIcon, LinkedInIcon } from "./icons";

class AppFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer>
        <FooterInfo>
          <FooterLink href="mailto:romina.villaverde@gmail.com"><MailIcon /></FooterLink>
          <FooterLink href="https://github.com/rvillaverde" target="_blank"><GitIcon /></FooterLink>
          <FooterLink href="https://www.linkedin.com/in/rominavillaverde/" target="_blank"><LinkedInIcon /></FooterLink>
        </FooterInfo>
        <FooterInfo className="caption">©2020 - Romina Villaverde</FooterInfo>
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
`;

const FooterInfo = styled.p`
  color: white;
  margin: 4px;
  text-align: center;

  &:hover {
    path {
      opacity: 0.4;
    }
  }
`;

const FooterLink = styled.a`
  margin: 0 12px;

  path {
    transition: all .3s ease-in-out;
  }

  &:hover {
    path {
      opacity: 1;
    }
  }
`

export default AppFooter;

