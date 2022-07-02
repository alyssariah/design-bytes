import React from 'react';
import PropTypes from 'prop-types';
import './linear-carousel.scss';

/**
 * Primary UI component for user interaction
 */
export const LinearCarousel = ({ slides, ...props }) => {
  return (
    <div className="sb-linear-carousel" {...props}>
      {slides &&
        slides.map(function (slide, i) {
          return (
            <>
              <input type="checkbox" aria-label={slide.title} className="faux-ui-facia" key={i} />
              <div className="slide" slide={slide.number} annot={slide.title}>
                <img src={slide.image} alt={slide.title} />
              </div>
            </>
          );
        })}
      <div className="counter" count={slides ? slides.length : 5}>
        {' '}
        / {slides ? slides.length : 5}
      </div>
    </div>
  );
};

LinearCarousel.propTypes = {
  /**
   * The cards for carousel
   */
  slides: PropTypes.arrayOf(PropTypes.object),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

LinearCarousel.defaultProps = {
  onClick: undefined,
  slides: [
    {
      number: '5',
      image:
        'https://ununsplash.imgix.net/uploads/141223808515744db9995/3361b5e1?q=75&fm=jpg&w=602',
      title: 'This is the fifth slide title. Photo by David Marcu.',
    },
    {
      number: '4',
      image: 'https://unsplash.imgix.net/photo-1415356838286-df6fd593e8b3?q=75&fm=jpg&w=600',
      title: 'This is the fourth slide title. Photo by Ryan Lum.',
    },
    {
      number: '3',
      image:
        'https://ununsplash.imgix.net/reserve/JaI1BywIT5Or8Jfmci1E_zakopane.jpg?q=75&fm=jpg&w=600',
      title: 'This is the third slide title. Photo by Tomasz Paciorek.',
    },
    {
      number: '2',
      image:
        'https://ununsplash.imgix.net/uploads/1413387158190559d80f7/6108b580?fit=crop&fm=jpg&q=75&w=600',
      title: 'This is the second slide title. Photo by S Charles.',
    },
    {
      number: '1',
      image:
        'https://ununsplash.imgix.net/uploads/1413399939678471ea070/2c0343f7?q=75&fm=jpg&w=601',
      title: 'First slide title. Photo by Forrest Cavale.',
    },
  ],
};
