import logo from './logo.svg';
import './App.css';
import Cardio from './component/cardio';
import React, { useState, useEffect } from 'react';

function App() {
const [val,setVal]=useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVal(Math.floor(Math.random() * (200 - 40) + 40));

    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Affichage des cardiogrammes
        </p>
        <div id="bpm"></div>
        <Cardio data={val}/>
      </header>
    </div>
  );
}



export default App;
