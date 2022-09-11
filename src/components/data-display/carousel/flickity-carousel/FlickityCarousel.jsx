import React from 'react';
import PropTypes from 'prop-types';
import Flickity from 'react-flickity-component';

export const FlickityCarousel = ({ flickityOptions, carouselSlides }) => {
  return (
    <Flickity
      className={'w-[100%]'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
    >
      {carouselSlides.map((slide, i) => {
        return (
          <div className="p-2" key={i}>
            <img src={slide.src} alt={slide.alt} width="400px" height="600px" />
          </div>
        );
      })}
    </Flickity>
  );
};

FlickityCarousel.propTypes = {
  /**
   * Logo URL string
   */
  flickityOptions: PropTypes.object,
  /**
   * Navigation bar links
   */
  carouselSlides: PropTypes.arrayOf(
    PropTypes.objectOf({
      src: PropTypes.string,
      alt: PropTypes.alt,
    })
  ),
};

FlickityCarousel.defaultProps = {
  flickityOptions: {
    initialIndex: 1,
    draggable: true,
    wrapAround: true,
    groupCells: true,
    autoPlay: 3000,
  },

  carouselSlides: [
    {
      src: '/demo-carousel/controller-1.png',
      alt: 'carousel-image',
    },
  ],
};
