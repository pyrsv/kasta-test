import React from 'react';

import './CloseButton.scss'

const CloseButton = props => {
  return (
    <span
      onClick={props.onClick}
      className='CloseBtn'>
      &times;
    </span>
  )
};

export default CloseButton;