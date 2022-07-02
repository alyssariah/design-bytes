import React from 'react';
import PropTypes from 'prop-types';
import './basic-card.scss';

/**
 * Basic card reusable component with color, sizes, and box shadows
 */
export const BasicCard = ({ backgroundColor, color, boxShadow, ...props }) => {
  return (
    <div
      className={['sb-card', `box-shadow--${boxShadow}`].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {props.children}
    </div>
  );
};

BasicCard.propTypes = {
  /**
   * props used
   */
  children: PropTypes.node,
  /**
   * What color to use
   */
  color: PropTypes.string,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional boxshadow
   */
  boxShadow: PropTypes.number,
};

BasicCard.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  boxShadow: 1,
};
