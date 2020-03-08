import React, {Fragment} from 'react';
import Logo from '../UI/Logo/Logo';

import './Modal.scss'
import Backdrop from '../UI/Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop isOpen={true}/>
        <div className="Modal">
          <div className="Modal__Header">
            <Logo/>
            <div className="ModalTotal">
          <span className="ModalTotal__Label">
            До оплати
          </span>
              <span className="ModalTotal__Value">
            2300 UAH
          </span>
            </div>
          </div>

          <div className="Modal__Body">
            {props.children}
          </div>

          <div className="Modal__Footer">
            <div className="FooterPayment">

            </div>

            <div className="FooterLogo">

            </div>
          </div>
        </div>
    </Fragment>
  )
};

export default Modal;