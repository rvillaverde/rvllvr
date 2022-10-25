import classNames from 'classnames';
import React from 'react';
import Parallax from '../parallax';
import ViewportContainer from '../viewport-container';

import styles from './home.module.sass';

class Intro extends React.Component {
  render() {
    return (
      <section className={classNames(styles.section, styles.intro)} id="home">
        <Parallax
          className={styles.parallax}
          id="home-image"
          image="/img/home_background.jpg"
        >
          <ViewportContainer className={styles['viewport-container']}>
            <h2 className="typography-headline2">
              Hi there, <br />
              I&apos;m Romi
            </h2>
            <h4 className="typography-headline4">
              full stack <br />
              web developer.
            </h4>
          </ViewportContainer>
        </Parallax>
      </section>
    );
  }
}

export default Intro;
