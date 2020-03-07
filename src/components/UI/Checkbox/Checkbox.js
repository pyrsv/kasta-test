import React from 'react';

import './Checkbox.scss'

const Checkbox = props => {

  return (
    <div className="CheckboxWrapper">
      <label
        htmlFor={props.name}
        className={'Checkbox'}
      >
        <input
          className={'Checkbox__input'}
          id={props.name}
          type="checkbox"
          checked={props.checked}
          onChange={props.onChange}
        />
        <span className={'Checkbox__text'}>
          {props.text}
        </span>
      </label>
    </div>
  )
};

export default Checkbox;
