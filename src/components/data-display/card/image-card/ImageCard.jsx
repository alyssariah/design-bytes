import React from 'react';
import PropTypes from 'prop-types';
import './image-card.scss';

/**
 * Image card reusable component
 */
export const ImageCard = ({
  backgroundColor,
  color,
  boxShadow,
  backgroundImage,
  authorImage,
  title,
  author,
  ...props
}) => {
  return (
    <div
      className={['sb-imagecard', `box-shadow--${boxShadow}`].join(' ')}
      {...props}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="sb-imagecard__profile" style={{ backgroundColor, color }}>
        <img src={authorImage} alt="people" />
        <div>
          <h2>{title}</h2>
          <p>
            by <b>{author}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  /**
   * What background image to use
   */
  backgroundImage: PropTypes.string,
  /**
   * What author image to use
   */
  authorImage: PropTypes.string,
  /**
   * Image title
   */
  title: PropTypes.string,
  /**
   * Author name
   */
  author: PropTypes.string,
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

ImageCard.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  boxShadow: 1,
  backgroundImage:
    'https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  title: 'White Mountains',
  author: 'Joseph Therrien',
  authorImage:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
};
