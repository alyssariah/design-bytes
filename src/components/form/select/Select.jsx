import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './select.module.scss';
import clsx from 'clsx';

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  config,
  label,
  name,
  required,
  status,
  helpText,
  leadingIcon,
  options,
}) => {
  const textInput = useRef(null);

  const manuallyOpenSelect = () => {
    let opts = { view: window, bubbles: true, cancelable: true, buttons: 1 };
    textInput.dispatchEvent(new MouseEvent('keydown', opts));
  };

  return (
    <div
      className={clsx('w-[100%] flex flex-col', {
        ['text-error']: status == 'error',
      })}
    >
      <label
        htmlFor={name}
        className={clsx('w-[100%] relative flex items-start', {
          [styles['outline-label']]: config == 'outline',
          [styles['filled-label']]: config == 'filled',
        })}
      >
        {leadingIcon && (
          <div
            className={clsx('absolute left-[12px] top-[35px] z-10', {
              ['top-[35px]']: config == 'outline',
              ['top-[38px]']: config == 'filled',
            })}
          >
            {leadingIcon}
          </div>
        )}
        <select
          ref={textInput}
          name={name}
          id="textInput"
          className={clsx(
            'w-[100%] py-[10px] mt-[20px] border-outline outline-none flex flex-col relative pr-[30px]',
            {
              [styles['outline-select']]: config == 'outline',
              [styles['filled-select']]: config == 'filled',
              ['pl-[35px]']: leadingIcon,
              ['pl-[15px]']: !leadingIcon,
              ['border-error']: status === 'error',
              ['border-disabled']: status === 'disabled',
            }
          )}
          required={required}
          disabled={status == 'disabled'}
        >
          {status == 'disabled' && <option value="" className="w-[100%] "></option>}
          {options.map((option, i) => {
            return (
              <option value={option} className="w-[100%]" key={i}>
                {option}
              </option>
            );
          })}
        </select>
        <span
          className={clsx('absolute left-[10px] text-[14px] duration-300 px-[5px]', {
            ['translate-y-[32px]']: config == 'outline',
            ['translate-y-[35px]']: config == 'filled',
            ['text-disabled']: status == 'disabled',
            ['ml-6']: leadingIcon,
          })}
          onClick={manuallyOpenSelect}
        >
          {label} {required && '*'}
        </span>
      </label>
      {helpText && (
        <div className="w-[100%] flex justify-between items-center px-4 mt-1">
          <p
            className={clsx('inline-block text-[12px]', {
              ['text-error']: status == 'error',
              ['text-disabled']: status == 'disabled',
              ['text-text-helper']: status == 'enabled',
            })}
          >
            {helpText}
          </p>
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  /**
   * Configuration
   */
  config: PropTypes.oneOf(['outline', 'filled']),
  /**
   * Input Label
   */
  label: PropTypes.string,
  /**
   * Input name
   */
  name: PropTypes.string,
  /**
   * Help Text
   */
  helpText: PropTypes.string,
  /**
   * Input required
   */
  required: PropTypes.bool,
  /**
   * Input Status
   */
  status: PropTypes.oneOf(['enabled', 'error', 'disabled']),
  /**
   * Leading Icon
   */
  leadingIcon: PropTypes.element,
  /**
   * Select Options
   */
  options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  config: 'outline',
  label: 'Choose an option',
  name: 'select',
  required: true,
  status: 'enabled',
  options: ['Audi', 'Subaru', 'Ford'],
};
