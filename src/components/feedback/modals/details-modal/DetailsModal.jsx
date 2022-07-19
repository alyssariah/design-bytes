import React from 'react';
import PropTypes from 'prop-types';
import './details-modal.scss';

/**
 * Details modal as a reusable component
 */
export const DetailsModal = ({
  buttonText,
  buttonPrimary,
  buttonSize,
  buttonShape,
  modalTitle,
  modalContent,
  ...props
}) => {
  return (
    <details className="sb-details-modal" {...props}>
      <summary>
        <div
          className={[
            'sb-button',
            `sb-button--${buttonPrimary}`,
            `sb-button--${buttonSize}`,
            `sb-button--${buttonShape}`,
          ].join(' ')}
          type="button"
        >
          {buttonText}
        </div>
        <div className="sb-details-modal__overlay"></div>
      </summary>
      <div className="sb-details-modal__popup">
        <div className="sb-details-modal__close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="sb-details-modal__title">
          <h1>{modalTitle}</h1>
        </div>
        <div className="sb-details-modal__content">
          <p>{modalContent}</p>
        </div>
      </div>
    </details>
  );
};

DetailsModal.propTypes = {
  /**
   * Text inside of button to open modal
   */
  buttonText: PropTypes.string,
  /**
   * If button is primary or secondary
   */
  buttonPrimary: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Size of button
   */
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Shape of button
   */
  buttonShape: PropTypes.oneOf(['round', 'square']),
  /**
   * Title for modal
   */
  modalTitle: PropTypes.string,
  /**
   * Content inside of modal
   */
  modalContent: PropTypes.string,
};

DetailsModal.defaultProps = {
  buttonText: 'Click here',
  buttonPrimary: 'primary',
  buttonSize: 'large',
  buttonShape: 'square',
  modalTitle: 'My Details Modal',
  modalContent:
    "You can click the X in the corner or click the overlay to close this modal. Something like this could be useful as a nice way to show additional information, but that's about as far as I would take it. It's just a nice way of styling the details element.",
};
