import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './textarea.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

/**
 * Primary UI component for user interaction
 */
export const Textarea = ({ config, label, name, required, helpText, wordLimit, status }) => {
  const textInput = useRef(null);
  const [inputLength, setInputLength] = useState(0);

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
        <textarea
          type="text"
          ref={textInput}
          name={name}
          className={clsx('w-[100%] py-[10px] px-[15px] mt-[20px] border-outline outline-none', {
            [styles['outline-textarea']]: config == 'outline',
            [styles['filled-textarea']]: config == 'filled',
            ['border-error']: status === 'error',
            ['border-disabled']: status === 'disabled',
          })}
          required={required}
          disabled={status == 'disabled'}
          placeholder={label}
          maxLength={wordLimit}
          onChange={() => {
            setInputLength(textInput.current.value.length);
          }}
        />
        <span
          className={clsx('absolute left-[10px] text-[14px] duration-300 px-[5px]', {
            ['translate-y-[32px]']: config == 'outline',
            ['translate-y-[35px]']: config == 'filled',
            ['text-disabled']: status == 'disabled',
          })}
          onClick={() => textInput.current.focus()}
        >
          {label} {required && '*'}
        </span>
      </label>
      {(helpText || wordLimit) && (
        <div className="w-[100%] flex justify-between items-center px-4">
          <p
            className={clsx('inline-block text-[12px]', {
              ['text-error']: status == 'error',
              ['text-disabled']: status == 'disabled',
              ['text-text-helper']: status == 'enabled',
            })}
          >
            {helpText}
          </p>
          {wordLimit && wordLimit > 0 && (
            <p
              className={clsx('inline-block text-[12px]', {
                ['text-error']: status == 'error',
                ['text-disabled']: status == 'disabled',
                ['text-text-helper']: status == 'enabled',
              })}
            >
              {inputLength}/{wordLimit}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

Textarea.propTypes = {
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
   * wordLimit
   */
  wordLimit: PropTypes.number,
  /**
  /**
   * Input required
   */
  required: PropTypes.bool,
  /**
   * Textarea Status
   */
  status: PropTypes.oneOf(['enabled', 'error', 'disabled']),
};

Textarea.defaultProps = {
  config: 'outline',
  label: 'Description',
  name: 'description',
  required: true,
  status: 'enabled',
  wordLimit: null,
};
