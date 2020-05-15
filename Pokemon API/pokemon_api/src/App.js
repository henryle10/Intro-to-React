import React from 'react';
import Pokemon from './components/Pokemon'
import './App.css';
import Pokemon_axios from './components/Pokemon_axios';

function App() {
  return (
    <div className="App">
      {/* <Pokemon /> */}
      <Pokemon_axios />
    </div>
  );
}

export default App;
