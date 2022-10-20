import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { Project as ProjectType } from '../../types/project';
import Project from '../project';
import VisibilitySensor from '../visibility-sensor';

import styles from './home.module.sass';

interface PropTypes {
  projects: ProjectType[];
}

interface StateTypes {
  animated: boolean;
  visible: boolean;
}

class Work extends React.Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = { animated: false, visible: false };
  }

  shouldComponentUpdate = (nextProps: PropTypes, nextState: StateTypes) =>
    nextProps.projects !== this.props.projects ||
    (nextState.visible && !this.state.animated);

  handleChange = (visible: boolean) => {
    this.setState((state: StateTypes) => ({
      ...state,
      ...(!state.animated ? { animated: true } : {}),
      visible,
    }));
  };

  projectStyle = (delay: number): CSSProperties => {
    const { visible } = this.state;

    return {
      opacity: visible ? 1 : 0,
      transitionDelay: `${delay ? delay : 0}s`,
    };
  };

  render() {
    const { projects } = this.props;

    return (
      <VisibilitySensor onChange={this.handleChange} threshold={240}>
        <section className={classNames(styles.section, styles.work)} id="work">
          <h1 className={styles.title}>Work</h1>
          <div className={styles.grid}>
            {projects.map((project, i) => (
              <Project
                key={project.id}
                project={project}
                style={this.projectStyle(i * 0.25)}
              />
            ))}
          </div>
        </section>
      </VisibilitySensor>
    );
  }
}

export default Work;
