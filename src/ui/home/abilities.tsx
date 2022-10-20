import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { AbilityIcon_1, AbilityIcon_2, AbilityIcon_3 } from '../icons';
import VisibilitySensor from '../visibility-sensor';
import MouseParallax from '../mouse-parallax';

import styles from './home.module.sass';

const IMAGES = [
  'abilities_parallax/abilities_01.svg',
  'abilities_parallax/abilities_02.svg',
  'abilities_parallax/abilities_03.svg',
  'abilities_parallax/abilities_04.svg',
  'abilities_parallax/abilities_05.svg',
  'abilities_parallax/abilities_06.svg',
];

interface StateTypes {
  animated: boolean;
  visible: boolean;
}

class Abilities extends React.Component<{}, StateTypes> {
  constructor(props: {}) {
    super(props);
    this.state = { animated: false, visible: false };
  }

  shouldComponentUpdate = (_: {}, nextState: StateTypes) =>
    nextState.visible && !this.state.animated;

  handleChange = (visible: boolean) =>
    this.setState((state: StateTypes) => ({
      ...state,
      ...(!state.animated ? { animated: true } : {}),
      visible,
    }));

  abilityStyle = (delay?: string): CSSProperties => {
    const { visible } = this.state;

    return {
      opacity: visible ? 1 : 0,
      visibility: visible ? 'visible' : 'hidden',
      transitionDelay: `${delay ? delay : 0}s`,
      transform: visible ? 'translateY(0)' : 'translateY(30%)',
    };
  };

  render() {
    return (
      <VisibilitySensor onChange={this.handleChange} threshold={120}>
        <section
          className={classNames(styles.section, styles.abilities)}
          id="abilities"
        >
          <MouseParallax images={IMAGES} />
          <div className={styles.wrapper}>
            <div className={styles.ability} style={this.abilityStyle()}>
              <div className={styles.icon}>
                <AbilityIcon_1 />
              </div>
              <p className={classNames([styles.caption, 'typography-body'])}>
                Full stack developer with an eye on design
              </p>
            </div>
            <div className={styles.ability} style={this.abilityStyle('0.3')}>
              <div className={styles.icon}>
                <AbilityIcon_2 />
              </div>
              <p className={classNames([styles.caption, 'typography-body'])}>
                Creative & detail oriented
              </p>
            </div>
            <div className={styles.ability} style={this.abilityStyle('0.6')}>
              <div className={styles.icon}>
                <AbilityIcon_3 />
              </div>
              <p className={classNames([styles.caption, 'typography-body'])}>
                Building modern apps with the latest technologies
              </p>
            </div>
          </div>
        </section>
      </VisibilitySensor>
    );
  }
}

export default Abilities;
