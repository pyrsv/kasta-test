import React, {useState} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import Countdown from '../Countdown/Countdown';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCreditCard, faCircle} from '@fortawesome/free-solid-svg-icons'

import * as controls from '../../data/payment-controls'
import * as validation from '../../data/validation-service'

import './PaymentForm.scss'


const PaymentForm = props => {

  const [{form, form: {card, expiryDate, cardHolder, CVV}}, setForm] = useState({
    form: {
      card: {...controls.card},
      expiryDate: {...controls.expiryDate},
      cardHolder: {...controls.cardHolder},
      CVV: {...controls.CVV}
    }
  });

  const [rememberCard, setRememberCard] = useState(false);

  const [isSubmitted, setSubmitted] = useState(false);

  const handleControlsChange = (control, event) => {
    const currentForm = {...form};
    const currentControl = currentForm[control];
    currentControl.touched = true;
    currentControl.value = event.target.value;
    setForm({
      form: currentForm
    });
  };

  const handleValidate = (control) => {
    const value = form[control].value.split(' ').join('');
    const validationRegex = validation.default[control].regex;
    const currentForm = {...form};
    const currentControl = currentForm[control];

    currentControl.isValid = false;
    validationRegex.forEach(regex => {
      //eslint-disable-next-line
      new RegExp(regex).test(value) ? currentControl.isValid = true : null;
    });

    setForm({
      form: currentForm
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formKeys = Object.keys(form);
    let isFormValid;

    formKeys.forEach(control => {
      form[control].touched = true;
      handleValidate(control);
    });

    isFormValid = formKeys.every(control => form[control].isValid === true);
    if (isFormValid) {
      const formData = {
        ...formKeys.reduce((formData, control) => {
          formData[control] = form[control].value;
          return formData
        }, {}),
        rememberCard
      };
      setForm({
        form: {
          card: {...controls.card},
          expiryDate: {...controls.expiryDate},
          cardHolder: {...controls.cardHolder},
          CVV: {...controls.CVV}
        }
      });
      setSubmitted(true);

      console.log(formData);
    }
  };

  return (
    <div className="FormContainer">
      {isSubmitted
        ?
        <div>
          <p>Оплата пройшла успішно</p>
          <Button
            text='Закрити'
            onClick={props.closeHandler}
          />
        </div>
        : <form className='PaymentForm'>
          <div className="PaymentForm__Header">
            <div className="Card">
              <p className="Card__Heading">
                <FontAwesomeIcon className={'Card__Circle'} icon={faCircle}/>
                Нова картка
              </p>
              <p className="Card__Description">
                Visa, Mastercard
              </p>
              <FontAwesomeIcon className={'Card__CardIcon'} icon={faCreditCard}/>

            </div>

          </div>
          <div className="PaymentForm__Body">
            <div className="FormRow">
              <div className="FormCol--wide">
                <Input
                  config={{
                    control: card,
                    mask: validation.card.mask
                  }}
                  onChange={handleControlsChange.bind(null, card.name)}
                  onBlur={handleValidate.bind(null, card.name)}
                />
              </div>
              <div className="FormCol--narrow">
                <Input
                  config={{
                    control: expiryDate,
                    mask: validation.expiryDate.mask
                  }}
                  onChange={handleControlsChange.bind(null, expiryDate.name)}
                  onBlur={handleValidate.bind(null, expiryDate.name)}
                />
              </div>
            </div>
            <div className="FormRow">
              <div className="FormCol--wide">
                <Input
                  config={{
                    control: cardHolder,
                    mask: validation.cardHolder.mask
                  }}
                  onChange={handleControlsChange.bind(null, cardHolder.name)}
                  onBlur={handleValidate.bind(null, cardHolder.name)}
                />
              </div>
              <div className="FormCol--narrow">
                <Input
                  config={{
                    control: CVV,
                    mask: validation.CVV.mask
                  }}
                  onChange={handleControlsChange.bind(null, CVV.name)}
                  onBlur={handleValidate.bind(null, CVV.name)}
                />
              </div>
            </div>
          </div>
          <div className='PaymentForm__Footer'>
            <Checkbox
              name={'remember'}
              checked={rememberCard}
              text={'Запам\'ятати цю картку'}
              onChange={() => {
                setRememberCard(!rememberCard)
              }}
              tip={'Наступного разу можна буде вибрати збережену карту i оплатити вводячи тільки CVV'}
            />
            <div className="PaymentForm__actions">
              <Button
                text={`Сплатити ${props.value} UAH`}
                onClick={handleSubmit}
              />
              <Countdown
                text={'Час до завершення платежу'}
                final={+new Date() + 900 * 1000}
              />
            </div>
          </div>

        </form>
      }
    </div>
  )
};

export default PaymentForm