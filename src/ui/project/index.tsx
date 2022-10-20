import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import Link from 'next/link';
import { Project } from '../../types/project';

import styles from './project.module.sass';

interface PropTypes {
  className?: string;
  project: Project;
  style: CSSProperties;
}

const Project: React.FunctionComponent<PropTypes> = ({
  className,
  project,
  style,
}) => {
  return (
    <Link
      key={project.id}
      href="/work/[id]"
      as={`/work/${project.internalUrl}`}
    >
      <a
        className={classNames([styles.project, className])}
        href={`/work/${project.internalUrl}`}
        id={`project-${project.id}`}
        style={{
          ...style,
          backgroundImage: `url(${project.coverUrl})`,
        }}
      >
        <div className={styles.info}>
          <h3 className="typography-headline3">{project.name}</h3>
          <hr />
          <p className="typography-body">{project.technologies.join(', ')}</p>
        </div>
      </a>
    </Link>
  );
};

export default Project;
