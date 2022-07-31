import React from 'react';
import PropTypes from 'prop-types';
import './scale.scss';

/**
 * Reusable avatar component for images
 */
export const Scale = ({ animation, ...props }) => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div
        className={
          animation +
          ' w-32 h-32 bg-primary text-onPrimary flex justify-center items-center rounded box-shadow--4'
        }
        {...props}
      >
        <span className="text-[38px]">A</span>
      </div>
    </div>
  );
};

Scale.propTypes = {
  /**
   * How large should the button be?
   */
  animation: PropTypes.oneOf([
    'scale-up-center',
    'scale-up-ver-center',
    'scale-up-bottom',
    'scale-down-center',
    'scale-down-ver-center',
    'scale-down-bottom',
  ]),
};

Scale.defaultProps = {
  animation: 'scale-up-center',
};
