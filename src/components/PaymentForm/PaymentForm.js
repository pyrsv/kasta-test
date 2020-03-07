import React, {useState} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Checkbox from '../UI/Checkbox/Checkbox';
import * as controls from '../../data/payment-controls'
import * as validation from '../../data/validation-service'

import './PaymentForm.scss'


const PureForm = props => {

  const [{form, form: {card, expiryDate, cardHolder, CVV}}, setForm] = useState({
    form: {
      card: controls.card,
      expiryDate: controls.expiryDate,
      cardHolder: controls.cardHolder,
      CVV: controls.CVV
    }
  });

  const [rememberCard, setRememberCard] = useState(false);

  const handleControlsChange = (control, event) => {
    const currentForm = {...form};
    const currentControl = currentForm[control];
    currentControl.touched = true;
    currentControl.value = event.target.value;
    console.log(currentControl.value);
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
      console.log(new RegExp(regex).test(value), 'test from blur');
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
      console.log(formData);

    } else {
      console.log('invalid form');
    }
  };

  return (
    <div className="Form-container">
      <form className='PaymentForm'>
        <div className="PaymentForm__Body">
          <div className="FormRow">
            <div className="FormCol--wide">
              <Input
                config = {{
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
          />
          <div className="PaymentForm__actions">
            <Button
              text={'Сплатити 2300 UAH'}
              onClick={handleSubmit}
            />
          </div>
        </div>

      </form>
    </div>
  )
};

export default PureForm