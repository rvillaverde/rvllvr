import classNames from 'classnames';
import React from 'react';

import styles from './viewport-container.module.sass';

interface PropTypes {
  className?: string;
  children: React.ReactNode;
}

const ViewportContainer: React.FunctionComponent<PropTypes> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames([styles['viewport-container'], className])}>
      {children}
    </div>
  );
};

export default ViewportContainer;
