import React, { useState } from 'react';
import './App.css';
import Generator from './components/Generator';
import Box from './components/Box';

function App() {
  const [box, setBox] = useState([]);
  const [generator, setGenerator] = useState({
    color: ""
  });

  const onColorHandler = event => {
    setGenerator({
      ...generator,
      [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = event => {
    console.log("entering onSubmitHandler")
    event.preventDefault();
    let newBox = {
      color: generator.color
    }
    setBox(b => [...b, newBox]);
    setGenerator({
      color: ""
    })
  }

  return (
    <div className="App">
      <Generator generator={generator} onColorHandler={onColorHandler} onSubmitHandler={onSubmitHandler} />
      {
        box.map((newBox, i) => {
          return (
            <Box color={newBox.color} />
          )
        })
      }
    </div>
  );
}

export default App;