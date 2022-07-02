import React from 'react';
import PropTypes from 'prop-types';
import './outline-button.scss';

/**
 * Primary button component with sizes and color
 */
export const OutlineButton = ({
  primary,
  backgroundColor,
  size,
  label,
  shape,
  disabled,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <button
      className={[
        'sb-outline-button',
        `sb-outline-button--${size}`,
        `sb-outline-button--${shape}`,
        disabled && 'disabled-content',
        primary && 'sb-outline-button--primary',
      ].join(' ')}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};

OutlineButton.propTypes = {
  /**
   * Button is primary color or not
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
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

OutlineButton.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  label: 'Button',
  onClick: undefined,
  shape: 'square',
  disabled: false,
  startIcon: null,
  endIcon: null,
};
