import React from 'react';
import PropTypes from 'prop-types';
import styles from './testimonial-slider.module.scss';
import { FaCodepen, FaNewspaper, FaConnectdevelop, FaArtstation } from 'react-icons/fa';
import clsx from 'clsx';

/**
 * Primary UI component for user interaction
 */
export const TestimonialSlider = ({ cards, backgroundColor, color, ...props }) => {
  return (
    <div className={styles['sb-tslider']} style={{ backgroundColor, color }} {...props}>
      {cards.map(function (card, i) {
        return (
          <input
            type="radio"
            key={i}
            name="slider"
            title={'slide' + (i + 1)}
            defaultChecked={i === 0}
            className={styles['sb-tslider__nav']}
            aria-label={card.title}
          />
        );
      })}
      <div className={styles['sb-tslider__inner']}>
        {cards.map(function (card, i) {
          return (
            <div className={styles['sb-tslider__contents']} key={i}>
              <div className={styles['sb-tslider__image']}>{card.icon}</div>
              <p className={clsx(styles['sb-tslider__caption'], 'font-semibold text-title-md')}>
                {card.title}
              </p>
              <p className={styles['sb-tslider__txt']}>{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

TestimonialSlider.propTypes = {
  /**
   * The cards for carousel
   */
  cards: PropTypes.arrayOf(PropTypes.object),
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
};

TestimonialSlider.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
  cards: [
    {
      icon: <FaCodepen className="sb-tslider__image" />,
      title: 'codepen',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!',
    },
    {
      icon: <FaNewspaper className="sb-tslider__image" />,
      title: 'newspaper',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!',
    },
    {
      icon: <FaConnectdevelop className="sb-tslider__image" />,
      title: 'connectdevelop',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!',
    },
    {
      icon: <FaArtstation className="sb-tslider__image" />,
      title: 'artstation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!',
    },
  ],
};
