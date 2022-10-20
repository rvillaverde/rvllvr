import classNames from 'classnames';
import React from 'react';

// import styles from './button.module.sass';

interface PropTypes {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  submit?: boolean;
  type: 'icon' | 'primary';
}

const Button: React.FunctionComponent<PropTypes> = ({
  className,
  children,
  disabled,
  onClick,
  submit,
  type,
}: PropTypes) => {
  return (
    <button
      className={classNames('button', type, className)}
      disabled={disabled}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
