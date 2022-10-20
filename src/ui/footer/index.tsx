import classNames from 'classnames';
import React from 'react';
import { MailIcon, GitIcon, LinkedInIcon } from '../icons';

import styles from './footer.module.sass';

const FOOTER_HEIGHT = 140;

interface StateTypes {
  hide: boolean;
  visible: boolean;
}

class Footer extends React.Component<{}, StateTypes> {
  state = {
    hide: true,
    visible: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.toggleFooter();
    this.animateFooter();
  };

  animateFooter = () => {
    const { innerHeight, scrollY } = window;
    const { clientHeight } = document.body;

    if (
      Math.round(innerHeight + scrollY) >=
      clientHeight + FOOTER_HEIGHT - 20
    ) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  };

  toggleFooter = () => {
    const { innerHeight, scrollY } = window;
    const { clientHeight } = document.body;

    if (Math.round(innerHeight * 2 + scrollY) >= clientHeight) {
      this.setState({ hide: false });
    } else {
      this.setState({ hide: true });
    }
  };

  render() {
    const { visible, hide } = this.state;

    return (
      <footer
        className={classNames(styles.footer, visible && styles.visible)}
        style={{ opacity: hide ? 0 : 1 }}
      >
        <p className={styles.info}>
          <a
            className={styles.link}
            style={{ transitionDelay: '.2s' }}
            href="mailto:romina.villaverde@gmail.com"
          >
            <MailIcon />
          </a>
          <a
            className={styles.link}
            style={{ transitionDelay: '.6s' }}
            href="https://github.com/rvillaverde"
            rel="noreferrer"
            target="_blank"
          >
            <GitIcon />
          </a>
          <a
            className={styles.link}
            style={{ transitionDelay: '1s' }}
            href="https://www.linkedin.com/in/rominavillaverde/"
            rel="noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </p>
        <p className={styles.info}>
          <span className="caption">©2020 - Romina Villaverde</span>
        </p>
      </footer>
    );
  }
}

export default Footer;
