import React from 'react';
import MaskedInput from 'react-text-mask';
import Tooltip from '../Tooltip/Tooltip';

import './Input.scss'

const Input = props => {
  const {mask = [], control: {name, value, label, placeholder, errorMessage, isValid, touched, tip}} = props.config;

  const localMask = mask.map(regexStr => {
    return regexStr.split('').includes('\\') ? new RegExp(regexStr) : regexStr;
  });

  const isInvalid = !isValid && touched;

  return (
    <div className={'FormControl'}>
      <label
        htmlFor={name}
        className={'FormControl__Label'}
      >
        {label}
        {tip &&
        <Tooltip
          name={name}
          tip={tip}
        />
        }

      </label>
      {localMask.length > 0
        ? <MaskedInput
          value={value}
          className={'FormControl__Input'}
          id={name}
          name={name}
          placeholder={placeholder}
          mask={localMask}
          onChange={props.onChange}
          onBlur={props.onBlur}
          guide={false}
          autoComplete={'off'}
        />
        : <input
          type="text"
          value={value}
          className={'FormControl__Input'}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={props.onChange}
          onBlur={props.onBlur}
          autoComplete={'off'}
        />
      }

      {isInvalid
        ? <span className={'FormControl__ErrorMessage'}> {errorMessage} </span>
        : null
      }

    </div>
  );
};

export default Input;