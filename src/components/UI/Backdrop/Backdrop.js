import React from 'react';

import './Backdrop.scss'

const Backdrop = (props) => {
  const cls = ['Backdrop'];
  if (props.isOpen) {
    cls.push('open')
  }

  return (
    <div
      onClick={props.onClick}
      className={cls.join(' ')}
    >
      {props.children}
    </div>
  )
};

export default Backdrop