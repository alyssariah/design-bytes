import React from 'react';
import PropTypes from 'prop-types';
import './rotate-scale.scss';

/**
 * Reusable avatar component for images
 */
export const RotateScale = ({ animation, ...props }) => {
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

RotateScale.propTypes = {
  /**
   * How large should the button be?
   */
  animation: PropTypes.oneOf([
    'rotate-scale-up',
    'rotate-scale-up-diag-1',
    'rotate-scale-down',
    'rotate-scale-down-diag-1',
    'rotate-scale-up-hor',
    'rotate-scale-up-diag-2 ',
    'rotate-scale-down-hor',
    'rotate-scale-down-diag-2',
    'rotate-scale-up-ver',
    'rotate-scale-down-ver',
  ]),
};

RotateScale.defaultProps = {
  animation: 'rotate-scale-up',
};
