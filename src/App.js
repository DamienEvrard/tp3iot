import logo from './logo.svg';
import './App.css';
import Cardio from './component/cardio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Affichage des cardiogrammes
        </p>
        <Cardio/>
      </header>
    </div>
  );
}

export default App;
