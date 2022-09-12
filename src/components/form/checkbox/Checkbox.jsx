import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';
import { AiOutlineCheck } from 'react-icons/ai';

export const Checkbox = ({ label, name, config, status, checkedStatus }) => {
  const [checked, setChecked] = useState(checkedStatus);
  return (
    <div
      className="flex items-center space-x-2 hover:cursor-pointer h-[20px]"
      onClick={() => {
        status != 'disabled' ? setChecked(!checked) : '';
      }}
    >
      <div
        className={clsx('w-[20px] h-[20px] flex justify-center items-center', {
          ['border-[#AEAEB2] border-[1px] border-solid']: !checked || config == 'transparent',
          ['bg-primary']: checked && config !== 'transparent',
          ['bg-transparent']: checked && config == 'transparent',
          ['rounded-[4px]']: config != 'sharp',
          ['border-disabled']: status == 'disabled',
        })}
      >
        {checked && (
          <AiOutlineCheck
            className={clsx({
              ['text-on-primary']: config !== 'transparent',
              ['text-primary']: config == 'transparent',
              ['text-disabled']: status == 'disabled',
            })}
          />
        )}
      </div>
      <input
        type="checkbox"
        id={name}
        name={name}
        value={label}
        className="hidden"
        checked={checked}
      />
      {label && (
        <label
          htmlFor={name}
          className={clsx('body-md leading-6 block', {
            ['text-disabled']: status == 'disabled',
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  /**
   * Label
   */
  label: PropTypes.string,
  /**
   * Name
   */
  name: PropTypes.string,
  /**
   * Name
   */
  checkedStatus: PropTypes.bool,
  /**
   * Configuration
   */
  config: PropTypes.oneOf(['sharp', 'smooth', 'transparent']),
  /**
   * Status
   */
  status: PropTypes.oneOf(['enabled', 'disabled']),
};

Checkbox.defaultProps = {
  label: 'Checkbox',
  name: 'checkbox',
  checkedStatus: false,
  config: 'smooth',
  status: 'enabled',
};
