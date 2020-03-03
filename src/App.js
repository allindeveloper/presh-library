import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonComp  from './components/ButtonComp';
import TextFieldComp from './components/TextFieldComp';

function App() {

  const handleInputChange = (event) =>{
    console.log("event.target.value", event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComp/>

        <TextFieldComp onChange={handleInputChange} />
      </header>
    </div>
  );
}

export default App;
