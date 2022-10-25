import classNames from 'classnames';
import React from 'react';
import LinkButton from '../button/link';
import ViewportContainer from '../viewport-container';

import styles from './home.module.sass';

class About extends React.Component {
  render() {
    return (
      <section className={classNames(styles.section, styles.about)} id="about">
        <h1 className={styles.title}>About</h1>
        <ViewportContainer className={styles['viewport-container']}>
          <div className={styles.text}>
            <div className={styles['profile-pic']}></div>
            <p className="typography-body">
              I&apos;m a Senior Full Stack Engineer that has been in the
              software industry since 2008. I&apos;ve worked with a diversity of
              technologies and in the last couple of years I&apos;ve been
              focusing my career towards the frontend development as I&apos;m
              also passionate about product and design.
              <br />
              <br />
              I&apos;m proactive and deeply analytical, I&apos;m always thinking
              outside the box to solve the current problem considering all
              posible edge cases and side effects. I also pay a lot of attention
              to the details and focus on best practices to have a clean,
              efficient and scalable code and delivery high-quality results.
              <br />
              <br />
              Currently working at MURAL and living as a digital nomad since
              2020.
            </p>
          </div>

          <LinkButton
            className={styles['resume-button']}
            href="/resume"
            target="_blank"
            type="primary"
          >
            View my resume
          </LinkButton>
        </ViewportContainer>
      </section>
    );
  }
}

export default About;
