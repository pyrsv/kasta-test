import React, {useState} from 'react';
import PaymentForm from './components/PaymentForm/PaymentForm'
import Button from './components/UI/Button/Button';
import Modal from './components/Modal/Modal';

import './App.scss';

const App = () => {
  const [isModal, setModal] = useState(false);

  return (
    <div className="App">
      <Button
        onClick={setModal.bind(null, !isModal)}
        text='Открыть виджет'
      />

      {
        isModal &&
        <Modal
          closeHandler={setModal.bind(null, !isModal)}
          value={1000000}
        >
          <PaymentForm/>
        </Modal>
      }
    </div>
  );
};

export default App;
