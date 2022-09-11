import React from 'react';
import PropTypes from 'prop-types';
import './flip-scale.scss';

/**
 * Reusable avatar component for images
 */
export const FlipScale = ({ animation, ...props }) => {
  return (
    <div className="flex justify-center items-center h-[100vh] flip-perspective">
      <div className={animation + ' anim-object active'} {...props}>
        <div className="front face bg-primary text-on-primary flex justify-center items-center rounded box-shadow--4">
          <div className="text-[36px]">A</div>
        </div>
        <div className="back face bg-secondary text-on-secondary flex justify-center items-center rounded box-shadow--4">
          <div className="text-[36px]">B</div>
        </div>
      </div>
    </div>
  );
};

FlipScale.propTypes = {
  /**
   * How large should the button be?
   */
  animation: PropTypes.oneOf([
    'flip-scale-up-hor',
    'flip-scale-down-diag-1',
    'flip-scale-down-hor',
    'flip-scale-up-diag-2',
    'flip-scale-up-ver',
    'flip-scale-down-diag-2',
    'flip-scale-down-ver',
    'flip-scale-up-diag-1',
    'flip-scale-2-hor-top',
    'flip-scale-2-ver-right',
    'flip-scale-2-hor-bottom',
    'flip-scale-2-ver-left',
  ]),
};

FlipScale.defaultProps = {
  animation: 'flip-scale-up-hor',
};
