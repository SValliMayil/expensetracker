
import React from 'react';
import  Head from './components/header';
import  Balance from './components/balance';
import  Income from './components/income  expense';
import  Transaction from './components/transactionList';
import  AddTran from './components/addTranssaction';

import { GlobalProvider } from './context/GlobalState';
import './App.css';
function App() {
  return (
    <GlobalProvider>
      <Head/>
      <div className="container">
        <Balance/>
        <Income/>
        <Transaction/>
        <AddTran/>
      </div>
      </GlobalProvider>
    );
}

export default App;
