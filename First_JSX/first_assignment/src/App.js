import React from 'react';
import logo from './logo.svg';
import './App.css';

import List from "./components/List";

function App() {
  //Two ways of doing the same thing
  return (
    <div>
      <h1>Hello Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt.Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
      <List />
    </div>
  );
}

export default App;
