import React from 'react';
import PropTypes from 'prop-types';
import './flip.scss';

/**
 * Reusable avatar component for images
 */
export const Flip = ({ animation, ...props }) => {
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

Flip.propTypes = {
  /**
   * How large should the button be?
   */
  animation: PropTypes.oneOf([
    'flip-horizontal-bottom',
    'flip-vertical-left',
    'flip-diagonal-1-bck',
    'flip-diagonal-2-fwd',
    'flip-vertical-bck',
    'flip-vertical-fwd',
    'flip-horizontal-fwd',
    'flip-diagonal-1-tr',
    'flip-diagonal-2-tl',
    'flip-vertical-right',
    'flip-2-hor-top-2',
    'flip-2-hor-top-bck',
    'flip-2-hor-top-fwd',
    'flip-2-ver-right-1',
    'flip-2-ver-left-1',
  ]),
};

Flip.defaultProps = {
  animation: 'flip-horizontal-bottom',
};
