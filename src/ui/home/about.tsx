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
              Full stack developer with over 10 years experience working with
              different companies and technologies.
              <br />
              Proactive and deeply analytical, as well as creative, curious and
              detail-oriented. I have a great autodidact ability, as I’m always
              looking to learn new things to improve my work.
              <br />
              <br />
              Currently working at MURAL as a full stack developer.
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
