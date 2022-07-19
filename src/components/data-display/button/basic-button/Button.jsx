import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { useState } from 'react';

/**
 * Primary button component with sizes and color
 */
export const Button = ({
  primary,
  backgroundColor,
  hoverBackgroundColor,
  size,
  label,
  shape,
  disabled,
  startIcon,
  endIcon,
  ...props
}) => {
  const [style, setStyle] = useState(backgroundColor && { backgroundColor });
  const mode = primary ? 'sb-button--primary' : 'sb-button--secondary';

  const EnterHover = () => {
    setStyle({ backgroundColor: hoverBackgroundColor });
  };

  const LeaveHover = () => {
    setStyle(backgroundColor && { backgroundColor });
  };

  return (
    <button
      type="button"
      className={[
        'sb-button',
        `sb-button--${size}`,
        `sb-button--${shape}`,
        disabled && 'disabled-content',
        mode,
      ].join(' ')}
      style={style}
      onMouseEnter={hoverBackgroundColor && EnterHover}
      onMouseLeave={hoverBackgroundColor && LeaveHover}
      disabled={disabled}
      {...props}
    >
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What hover background color to use
   */
  hoverBackgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional button shape
   */
  shape: PropTypes.oneOf(['round', 'square']),
  /**
   * Optional button disable
   */
  disabled: PropTypes.bool,
  /**
   * Start Icon
   */
  startIcon: PropTypes.element,
  /**
   * End Icon
   */
  endIcon: PropTypes.element,
};

Button.defaultProps = {
  backgroundColor: null,
  hoverBackgroundColor: null,
  primary: false,
  size: 'large',
  onClick: undefined,
  shape: 'square',
  disabled: false,
  startIcon: null,
  endIcon: null,
};
