import React from 'react';
import PropTypes from 'prop-types';
import './letter-avatar.scss';

/**
 * Reusable avatar component for letters
 */
export const LetterAvatar = ({ letters, size, backgroundColor, color, ...props }) => {
  return (
    <div
      className={['sb-letter-avatar', `sb-letter-avatar--${size}`].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      <span>{letters}</span>
    </div>
  );
};

LetterAvatar.propTypes = {
  /**
   * Pick letters for avatar
   */
  letters: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What color to use
   */
  color: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

LetterAvatar.defaultProps = {
  backgroundColor: null,
  color: null,
  size: 'medium',
  onClick: undefined,
};
