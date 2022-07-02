import React from 'react';
import PropTypes from 'prop-types';
import './image-avatar.scss';

/**
 * Reusable avatar component for images
 */
export const ImageAvatar = ({ image, alt, size, ...props }) => {
  return (
    <div className={['sb-image-avatar', `sb-image-avatar--${size}`].join(' ')} {...props}>
      <img src={image} alt={alt} />
    </div>
  );
};

ImageAvatar.propTypes = {
  /**
   * Avatar image source
   */
  image: PropTypes.string,
  /**
   * Image alternative text
   */
  alt: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ImageAvatar.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787',
  alt: 'Avatar Image',
  size: 'medium',
  onClick: undefined,
};
