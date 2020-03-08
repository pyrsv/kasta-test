import React, {Fragment} from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';
import CloseButton from '../UI/CloseButton/CloseButton';
import logo from '../../assets/logo.svg';

import './Modal.scss'

const Modal = (props) => {

  return (
    <Fragment>
      <Backdrop
        isOpen={true}
        onClick={props.closeHandler}
      />
      <div className="Modal">
        <div className="Modal__Header">
          <img className={'ModalLogo'} src={logo} alt="Kasta Logo"/>
          <div className="ModalTotal">
          <span className="ModalTotal__Label">
            До оплати
          </span>
            <span className="ModalTotal__Value">
                {props.value} UAH
          </span>
          </div>
          <CloseButton onClick={props.closeHandler}/>
        </div>

        <div className="Modal__Body">
          {React.Children.map(props.children, (child, i) => {
            return React.cloneElement(child, {
              closeHandler: props.closeHandler,
              value: props.value
            })
          })}
        </div>

        <div className="Modal__Footer">
          <div className="FooterPayment">
            <img className={'FooterPayment__Image'}
                 src="https://www.deac.eu/files/docs/text_image/big/deac-pci-logo1.png" alt="PCI DSS Compilant"/>
            <img className={'FooterPayment__Image'}
                 src="https://www.nicepng.com/png/full/136-1366983_mastercard-securecode.png"
                 alt="Mastercard Securecode"/>
            <img className={'FooterPayment__Image'}
                 src="https://benyaizubrik.com/wp-content/uploads/verified-by-visa.png" alt="Verified by Visa"/>

          </div>

          <div className="FooterLogo">
            <img className={'ModalLogo'} src={logo} alt="Kasta Logo"/>
          </div>
        </div>
      </div>
    </Fragment>
  )
};

export default Modal;