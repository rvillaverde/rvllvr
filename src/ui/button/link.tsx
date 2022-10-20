import classNames from 'classnames';
import React from 'react';
import Link, { PropTypes as LinkPropTypes } from '../link';

interface PropTypes {
  children: React.ReactNode;
  className: string;
  href: string;
  target?: LinkPropTypes['target'];
  type: 'icon' | 'primary';
}

const LinkButton: React.FunctionComponent<PropTypes> = ({
  className,
  children,
  href,
  target,
  type,
}: PropTypes) => {
  return (
    <Link
      className={classNames('button', type, className)}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
