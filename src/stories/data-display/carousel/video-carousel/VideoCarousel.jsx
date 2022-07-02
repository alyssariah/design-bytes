import React from 'react';
import PropTypes from 'prop-types';
import './video-carousel.scss';

/**
 * Primary UI component for user interaction
 */
export const VideoCarousel = ({ videos, backgroundColor, ...props }) => {
  return (
    <div className="sb-video-carousel" style={{ backgroundColor }} {...props}>
      <div className="sb-video-carousel__row">
        <div className="sb-video-carousel__row__inner">
          {videos &&
            videos.map(function (video, i) {
              return (
                <div className="tile" key={i} tabIndex="0">
                  <div className="tile__media">
                    <img className="tile__img" src={video.image} alt={video.title} />
                  </div>
                  <div className="tile__details">
                    <div className="tile__title">{video.title}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

VideoCarousel.propTypes = {
  /**
   * The cards for carousel
   */
  videos: PropTypes.array,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

VideoCarousel.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  videos: [
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg',
      title: 'Top Gear',
    },
    {
      image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg',
      title: 'Top Gear',
    },
  ],
};
