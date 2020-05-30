import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import styled from "styled-components"
import MenuToggle from './menuToggle';

const headerHeight = 80;

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false }
    this.smoothScroll = this.smoothScroll.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleMenuToggle = this.handleMenuToggle.bind(this)
  }

  componentDidMount() {
    if (this.props.home) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  smoothScroll(e) {
    this.setState({ menuOpen: false })
    let sectionId = e.target.getAttribute('data-section')
    if (this.props.home) {
      let position = sectionId ? document.getElementById(sectionId).offsetTop - headerHeight : 0
      window.scroll({top: position, left: 0, behavior: 'smooth' })
    } else {
      Router.push(`/#${ sectionId }`)
    }
  }
  
  getActiveSection() {
    let sections = document.querySelectorAll('section')
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      return sections[sections.length-1].id
    }
    for (let i=0; i < sections.length; i++) {
      let section = sections[i]
      let top = section.getBoundingClientRect().top
      let height = section.getBoundingClientRect().height
      if (top <= headerHeight && top + height > headerHeight) {
        return section.id
      }
    }
  }
  
  handleScroll() {
    let sectionId = this.getActiveSection()
    let active = document.querySelector('.active[data-section]')
    if (active) active.classList.remove('active')
    active = document.querySelector(`[data-section=${ sectionId }]`)
    if (active) active.classList.add('active')
  }

  handleMenuToggle() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    return (
      <Header>
        <HeaderNav>
          <MenuToggle onChange={ this.handleMenuToggle } open={ this.state.menuOpen } />
          <HeaderSection>
            <Link href="/">
              <HeaderLink href="/">
                <img src="/img/logo.svg" alt="Romi Villaverde"/>
              </HeaderLink>
            </Link>
          </HeaderSection>
          <HeaderSection show={ this.state.menuOpen }>
            <HeaderLink data-section="home" onClick={ this.smoothScroll }>Home</HeaderLink>
            <HeaderLink data-section="about" onClick={ this.smoothScroll }>About</HeaderLink>
            <HeaderLink data-section="work" onClick={ this.smoothScroll }>Work</HeaderLink>
            <HeaderLink data-section="contact" onClick={ this.smoothScroll }>Contact</HeaderLink>
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
  overflow: hidden;
  
  &:before {
    content: "";
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    opacity: 0.9;
  }
`
const HeaderNav = styled.nav`
  max-width: var(--viewport-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  
  @media (max-width: 460px) {
    overflow-x: auto;
    overflow-y: hidden;
  }

`
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  &:last-child {
    transition: all .3s ease-in-out;
    margin-left: auto;
    justify-content: flex-end;

    @media (max-width: 640px) {
      position: fixed;
      flex-direction: column;
      transform: scaleY(${ props => props.show ? 1 : 0 });
      transform-origin: top;
      margin-top: var(--header-height);
      z-index: 240;
      width: 100%;
      background-color: rgba(255,255,255,0.9);
      justify-content: center;
      overflow: hidden;
    }
  }
`
const HeaderLink = styled.a`
  transition: all .3s ease-in-out;
  color: var(--color-tertiary);
  cursor: pointer;
  padding: 12px 24px;
  text-decoration: none;
  font-weight: 500;
  user-select: none;

  &:hover {
    color: var(--color-primary);
  }

  &.active {
    color: var(--color-secondary);
  }
`

export default AppHeader;
