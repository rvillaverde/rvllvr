import React from 'react';
import Link from 'next/link'
import styled from "styled-components";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <HeaderNav>
          <HeaderSection>
            <Link href="/">
              <HeaderLink>Romina Villaverde</HeaderLink>
            </Link>
          </HeaderSection>
          <HeaderSection>
            <Link href="/">
              <HeaderLink>Home</HeaderLink>
            </Link>
            <Link href="#about">
              <HeaderLink>About</HeaderLink>
            </Link>
            <Link href="#work">
              <HeaderLink>Work</HeaderLink>
            </Link>
            <Link href="#contact">
              <HeaderLink>Contact</HeaderLink>
            </Link>
          </HeaderSection>
        </HeaderNav>
      </Header>
    );
  }
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  display: flex;
  z-index: 24;
  
  &:before {
    content: "";
    background-color: var(--gray__100);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    opacity: 0.9;
  }
`;

const HeaderNav = styled.nav`
  max-width: var(--viewport-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
`

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:last-child {
    margin-left: auto;
    justify-content: flex-end;
  }
`;

const HeaderLink = styled.a`
  color: var(--color-tertiary);
  cursor: pointer;
  padding: 12px 24px;

  &:hover {
    color: var(--color-primary);
  }

  &:active {
    color: var(--color-secondary);
  }

`;

export default AppHeader;
