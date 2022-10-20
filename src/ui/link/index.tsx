import classNames from 'classnames';
import NextLink from 'next/link';
import React from 'react';

import styles from './link.module.sass';

export interface PropTypes {
  className?: string;
  children: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const Link: React.FunctionComponent<PropTypes> = ({
  className,
  children,
  href,
  target,
}) => {
  return (
    <NextLink href={href} target={target}>
      <a className={classNames([styles.link, className])} href={href}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
