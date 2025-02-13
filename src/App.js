import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World !!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleButtonClick}>Click Me</button>
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </header>
    </div>
  );
}

export default App;