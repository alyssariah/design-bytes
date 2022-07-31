import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './switch.scss';

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
      className={`sb-switch ${toggle === 'light' ? 'light' : 'dark'} sb-switch--${mode}`}
      onClick={toggleTheme}
    >
      <div className="sb-toggle"></div>
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
