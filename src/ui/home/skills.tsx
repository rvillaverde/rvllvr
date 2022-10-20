import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { Skill } from '../../types/skill';
import VisibilitySensor from '../visibility-sensor';

import styles from './home.module.sass';

interface PropTypes {
  skills: Skill[];
}

interface StateTypes {
  animated: boolean;
  visible: boolean;
}

class Skills extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = { animated: false, visible: false };
  }

  shouldComponentUpdate = (nextProps: PropTypes, nextState: StateTypes) =>
    nextProps.skills !== this.props.skills ||
    (nextState.visible && !this.state.animated);

  handleChange = (visible: boolean) => {
    this.setState((state: StateTypes) => ({
      ...state,
      ...(!state.animated ? { animated: true } : {}),
      visible,
    }));
  };

  skillRateStyle = (rate: Skill['rate'], delay: number): CSSProperties => {
    const { visible } = this.state;

    return {
      opacity: visible ? 1 : 0,
      transitionDelay: `${delay ? delay : 0}s`,
      width: `${visible ? rate : 0}%`,
    };
  };

  render() {
    const { skills } = this.props;

    return (
      <VisibilitySensor onChange={this.handleChange} threshold={240}>
        <section
          className={classNames(styles.section, styles.skills)}
          id="work"
        >
          <h1 className={styles.title}>Skills</h1>
          <div className={styles.wrapper}>
            {skills.map((skill, i) => (
              <div className={styles.skill} key={skill.id}>
                <p className={styles.name}>{skill.name}</p>
                <span className={styles.rate}>
                  <span
                    className={styles.bar}
                    style={this.skillRateStyle(skill.rate, i * 0.1)}
                  ></span>
                </span>
              </div>
            ))}
          </div>
        </section>
      </VisibilitySensor>
    );
  }
}

export default Skills;
