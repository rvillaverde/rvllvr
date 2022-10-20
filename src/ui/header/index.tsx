import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import React from 'react';
import MenuToggle from '../menu-toggle';

import styles from './header.module.sass';

const HEADER_HEIGHT = 80;

const SECTIONS = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'work', name: 'Work' },
  { id: 'contact', name: 'Contact' },
];

interface PropTypes {
  home?: boolean;
}

interface StateTypes {
  activeSection?: string;
  menuOpen: boolean;
}

class Header extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = { menuOpen: false };
    // this.smoothScroll = this.smoothScroll.bind(this)
    // this.handleScroll = this.handleScroll.bind(this)
    // this.handleMenuToggle = this.handleMenuToggle.bind(this)
  }

  get isHome(): boolean {
    return !!this.props.home;
  }

  get isMenuOpen(): boolean {
    return !!this.state.menuOpen;
  }

  componentDidMount() {
    if (this.isHome) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollToSection = (section: string) => () => {
    this.setState({ menuOpen: false });

    if (this.isHome) {
      const offsetTop = document.getElementById(section)?.offsetTop || 0;
      const top = section ? offsetTop - HEADER_HEIGHT : 0;

      window.scroll({ top, left: 0, behavior: 'smooth' });
    } else {
      Router.push(`/#${section}`);
    }
  };

  getActiveSection = () => {
    const sections = document.querySelectorAll('section');

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      return sections[sections.length - 1].id;
    }

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const top = section.getBoundingClientRect().top;
      const height = section.getBoundingClientRect().height;
      if (top <= HEADER_HEIGHT && top + height > HEADER_HEIGHT) {
        return section.id;
      }
    }
  };

  handleScroll = () => {
    const activeSection = this.getActiveSection();
    this.setState({ activeSection });
  };

  handleMenuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { activeSection, menuOpen } = this.state;

    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <MenuToggle onChange={this.handleMenuToggle} open={menuOpen} />
          <section className={styles.section}>
            <Link href="/">
              <a className={styles.link}>
                <Image
                  alt="Romi Villaverde"
                  src="/img/logo.svg"
                  height="34px"
                  width="200px"
                />
              </a>
            </Link>
          </section>
          <section
            className={classNames([
              styles.section,
              menuOpen && styles['menu-open'],
            ])}
          >
            {SECTIONS.map(section => (
              <a
                className={classNames([
                  styles.link,
                  activeSection === section.id && styles.active,
                ])}
                key={section.id}
                onClick={this.scrollToSection(section.id)}
              >
                {section.name}
              </a>
            ))}
          </section>
        </nav>
      </header>
    );
  }
}

export default Header;
