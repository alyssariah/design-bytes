import React from 'react';
import PropTypes from 'prop-types';
import './rotate.scss';

/**
 * Reusable avatar component for images
 */
export const Rotate = ({ animation, ...props }) => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
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

Rotate.propTypes = {
  /**
   * How large should the button be?
   */
  animation: PropTypes.oneOf([
    'rotate-center ',
    'rotate-bl',
    'rotate-vert-center',
    'rotate-diagonol-br',
    'rotate-vert-left',
    'rotate-vert-right',
    'rotate-hor-center',
    'rotate-diagonol-1',
    'rotate-hor-top',
    'rotate-diagonol-2',
    'rotate-hor-bottom',
    'rotate-diagonal-tr',
  ]),
};

Rotate.defaultProps = {
  animation: 'rotate-center',
};
