import React from 'react';

import styles from './menu-toggle.module.sass';

interface PropTypes {
  onChange: () => void;
  open: boolean;
}

const MenuToggle: React.FunctionComponent<PropTypes> = ({ onChange, open }) => {
  return (
    <a className={styles.toggle}>
      <input
        className={styles.input}
        type="checkbox"
        onChange={onChange}
        checked={open}
      />
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </a>
  );
};

export default MenuToggle;
