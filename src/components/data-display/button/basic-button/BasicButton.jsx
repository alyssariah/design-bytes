import React from 'react';
import PropTypes from 'prop-types';
import './basic-button.scss';

/**
 * Primary button component with sizes and color
 */
export const BasicButton = ({
  primary,
  size,
  label,
  shape,
  disabled,
  startIcon,
  endIcon,
  boxShadow,
  configuration,
  onClick,
  ...props
}) => {
  const mode = primary ? 'sb-basic-button--primary' : 'sb-basic-button--secondary';

  return (
    <button
      type="button"
      className={[
        'sb-basic-button',
        `sb-basic-button--${size}`,
        `sb-basic-button--${shape}`,
        `sb-basic-button--${configuration}`,
        disabled && 'sb-basic-button--disabled',
        `${configuration === 'filled' ? `box-shadow--${boxShadow}` : ''}`,
        mode,
      ].join(' ')}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {startIcon}
      {label}
      {endIcon}
    </button>
  );
};

BasicButton.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Configuration of button
   */
  configuration: PropTypes.oneOf(['filled', 'outline']),
  /**
   * If color should primary or secondary
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
  /**
   * Optional to add box shadow to button
   */
  boxShadow: PropTypes.number,
};

BasicButton.defaultProps = {
  primary: true,
  configuration: 'filled',
  size: 'large',
  onClick: undefined,
  shape: 'square',
  boxShadow: 0,
  disabled: false,
  startIcon: null,
  endIcon: null,
};
