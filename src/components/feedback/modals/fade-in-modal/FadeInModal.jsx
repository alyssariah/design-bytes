import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './fade-in-modal.scss';
import { BasicButton } from '../../../data-display/button/basic-button/BasicButton';

/**
 * Fade in modal as a reusable component
 */
export const FadeInModal = ({
  triggerButton,
  rejectButton,
  confirmButton,
  modalTitle,
  modalContent,
}) => {
  const [stateChecked, setStateChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        checked={stateChecked}
        readOnly
        name="sb-fade-dialog-state"
        id="sb-fade-dialog-state"
        className="sb-fade-dialog-state"
      />
      <div className="sb-fade-dialog">
        <label
          className="dlg-back"
          htmlFor="sb-fade-dialog-state"
          onClick={() => setStateChecked(!stateChecked)}
        ></label>
        <div className="dlg-wrap">
          <label className="dlg-close" htmlFor="sb-fade-dialog-state"></label>
          <h2 className="dlg-header">{modalTitle}</h2>
          <div className="dlg-content">{modalContent}</div>
          <div className="dlg-prompt">
            {rejectButton && (
              <span onClick={() => setStateChecked(!stateChecked)}>{rejectButton}</span>
            )}
            {confirmButton && (
              <span onClick={() => setStateChecked(!stateChecked)}>{confirmButton}</span>
            )}
          </div>
        </div>
      </div>
      <label htmlFor="sb-fade-dialog-state" onClick={() => setStateChecked(!stateChecked)}>
        {triggerButton}
      </label>
      <div className="sb-fade-dialog-console"></div>
    </>
  );
};

FadeInModal.propTypes = {
  /**
   * Button that triggers modal
   */
  triggerButton: PropTypes.element,
  /**
   * Button that rejects modal
   */
  rejectButton: PropTypes.element,
  /**
   * Button that confirms modal
   */
  confirmButton: PropTypes.element,
  /**
   * Title for modal
   */
  modalTitle: PropTypes.string,
  /**
   * Content inside of modal
   */
  modalContent: PropTypes.string,
};

FadeInModal.defaultProps = {
  triggerButton: <BasicButton label="Open the dialog" />,
  rejectButton: (
    <BasicButton
      label="No, I'll reconsider"
      shape="round"
      configuration={'outline'}
      primary={false}
    />
  ),
  confirmButton: <BasicButton label="Yes, let's do it!" shape="round" primary={true} />,
  buttonText: 'Open the dialog',
  buttonPrimary: 'primary',
  buttonSize: 'large',
  buttonShape: 'square',
  modalTitle: 'Are you sure?',
  modalContent: 'By clicking yes, you are confirming your purchase.',
};
