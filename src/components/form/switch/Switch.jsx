import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './switch.module.scss';
import clsx from 'clsx';

/**
 * Primary UI component for user interaction
 */
export const Switch = ({ switchTheme, mode }) => {
  const [toggle, setToggle] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  );

  const toggleTheme = () => {
    setToggle(toggle === 'light' ? 'dark' : 'light');
    switchTheme();
  };

  return (
    <div
      className={clsx(styles['sb-switch'], styles[`sb-switch--${mode}`], {
        [styles.light]: toggle === 'light',
        [styles.dark]: toggle === 'dark',
      })}
      onClick={toggleTheme}
    >
      <div className={styles['sb-toggle']}></div>
    </div>
  );
};

Switch.propTypes = {
  /**
   * Switch theme
   */
  switchTheme: PropTypes.func,
  /**
   * switch mode
   */
  mode: PropTypes.oneOf(['sky', 'land', 'fruit', '3d']),
};

Switch.defaultProps = {
  mode: 'sky',
};
