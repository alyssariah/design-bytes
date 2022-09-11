import React from 'react';
import PropTypes from 'prop-types';
import styles from './3d-carousel.module.scss';

/**
 * Primary UI component for user interaction
 */
export const ThreeDCarousel = ({ cards, backgroundColor, color, borderColor, ...props }) => {
  let style = { backgroundColor, color, borderColor };

  return (
    <div className={styles['sb-3dcarousel']} {...props}>
      <div className={styles['sb-3dcarousel__wrapper']}>
        <input type="radio" name="slider" id={styles['item-1']} defaultChecked />
        <input type="radio" name="slider" id={styles['item-2']} />
        <input type="radio" name="slider" id={styles['item-3']} />
        <div className={styles['sb-3dcarousel__cards']}>
          {cards.map(function (card, i) {
            return (
              <label
                className={styles['sb-3dcarousel__card']}
                style={style}
                htmlFor={styles['item-' + (i + 1)]}
                id={styles[`card-${i + 1}`]}
                key={i}
              >
                <img src={card.image} alt={card.title} />
                <h3 className="h3 text-center">{card.title}</h3>
                <p className="text-sm text-center">{card.details}</p>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

ThreeDCarousel.propTypes = {
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
   * What border color to use
   */
  borderColor: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ThreeDCarousel.defaultProps = {
  backgroundColor: null,
  borderColor: null,
  onClick: undefined,
  cards: [],
};
