import React from 'react';
import PropTypes from 'prop-types';
import './slide.scss';

/**
 * Reusable avatar component for images
 */
export const Slide = ({ animation, ...props }) => {
  return (
    <div className="flex justify-center items-center h-[100vh] perspective">
      <div
        className={
          animation +
          ' w-32 h-32 bg-primary text-on-primary flex justify-center items-center rounded box-shadow--4'
        }
        {...props}
      >
        <span className="text-[38px]">A</span>
      </div>
    </div>
  );
};

Slide.propTypes = {
  /**
   * How large should the button be?
   */
  animation: PropTypes.oneOf([
    'slide-top',
    'slide-left',
    'slide-tr',
    'slide-tl',
    'slide-right',
    'slide-br',
    'slide-bottom',
    'slide-bl',
    'slide-bck-center',
    'slide-bck-bottom',
    'slide-bck-top',
    'slide-bck-left',
    'slide-bck-right',
    'slide-fwd-center',
    'slide-fwd-top',
    'slide-fwd-left',
    'slide-fwd-right',
    'slide-fwd-bottom',
  ]),
};

Slide.defaultProps = {
  animation: 'slide-top',
};
