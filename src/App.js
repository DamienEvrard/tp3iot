import logo from './logo.svg';
import './App.css';
import Cardio from './component/cardio';
import Graph from './component/graph';
import React, { useState, useEffect } from 'react';

function App() {
const [vals,setVal]=useState([0])


  useEffect(() => {
     setInterval(() => {
      setVal((prev)=>{
       return  [...prev,Math.floor(Math.random() * (200 - 40) + 40)]
      });
      },
    1000);
  }, []);

  console.log(vals);

  const val=vals[vals.length-1];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Affichage des cardiogrammes
        </p>
        <div id="bpm"></div>
        <Cardio data={val}/>
        <Graph valeurs = {vals}/>
      </header>
    </div>
  );
}



export default App;
