import React from 'react';
import PropTypes from 'prop-types';
import './icon-button.scss';
import { FaCodepen } from 'react-icons/fa';

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({ primary, size, icon, disabled, color, ...props }) => {
  const mode = primary ? 'sb-iconbutton--primary' : 'sb-iconbutton--secondary';

  return (
    <button
      type="button"
      title="icon"
      className={[
        'sb-iconbutton',
        `sb-iconbutton--${size}`,
        disabled && 'disabled-content',
        mode,
      ].join(' ')}
      disabled={disabled}
      {...props}
      style={color && { color }}
    >
      {icon}
    </button>
  );
};

IconButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Color of icon
   */
  color: PropTypes.string,
  /**
   * Child component
   */
  icon: PropTypes.element,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional button disable
   */
  disabled: PropTypes.bool,
};

IconButton.defaultProps = {
  primary: false,
  icon: <FaCodepen />,
  size: 'medium',
  onClick: undefined,
  disabled: false,
};
