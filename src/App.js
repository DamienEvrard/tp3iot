import logo from './logo.svg';
import './App.css';
import Cardio from './component/cardio';
import Graph from './component/graph';
import React, { useState, useEffect } from 'react';

function App() {
const [vals,setVal]=useState([{
                                time: 0,
                                valeur : 0
                              }]);


  useEffect(() => {
     setInterval(() => {
        const val = {
          time: new Date().toLocaleTimeString('fr-FR'),
          valeur : Math.floor(Math.random() * (200 - 40) + 40)
        }
        
        setVal((prev)=>{
        return  [...prev,val]
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
          Affichage du cardiogramme
        </p>
        <div id="bpm"></div>
        <Cardio data={val}/>
        <Graph data = {vals}/>
      </header>
    </div>
  );
}



export default App;
