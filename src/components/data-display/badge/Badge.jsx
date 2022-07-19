import React from 'react';
import PropTypes from 'prop-types';
import './badge.scss';

/**
 * Reusable badge component
 */
export const Badge = ({ backgroundColor, color, size, label, ...props }) => {
  return (
    <div
      className={['sb-badge', `sb-badge--${size}`].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </div>
  );
};

Badge.propTypes = {
  /**
   * What color to use
   */
  color: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What size for badge
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
};

Badge.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  onClick: undefined,
};
