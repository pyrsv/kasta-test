import React from 'react';
import PaymentForm from './components/PaymentForm/PaymentForm'
import Modal from './components/Modal/Modal';

import './App.css';
import Backdrop from './components/UI/Backdrop/Backdrop';

function App() {
  return (
    <div className="App">
      <Modal>
        <PaymentForm/>
      </Modal>
      {/*<Backdrop*/}
      {/*  isOpen={true}*/}
      {/*/>*/}
    </div>
  );
}

export default App;
