import React from 'react';
import './style.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IE from './components/IE';
import History from './components/History';
import Form from './components/Form';
import GlobalProvider from './context/GlobalState';
export default function App() {
  console.log(<GlobalProvider />);
  return (
    <div className="main">
      <GlobalProvider>
        <Header />
        <Balance />
        <IE />
        <History />
        <Form />
      </GlobalProvider>
    </div>
  );
}
