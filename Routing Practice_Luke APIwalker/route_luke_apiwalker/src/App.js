import React, { useState, useEffect } from 'react';
import './App.css';
import { navigate, Router } from '@reach/router'

import Planet from './views/planets'
import People from './views/people'
import Param from './views/param1'
import Colors from './views/colors'


function App() {
  const [formState, setFormState] = useState({
    category: "people",
    id: ""
  });

  function handleCategory(event) {
    const newCategory = event.target.value;

    setFormState({
      ...formState,
      category: newCategory
    });
  };

  function handleId(event) {
    setFormState({
      ...formState,
      id: event.target.value
    })
  };

  function formHandler(event) {
    event.preventDefault();

    navigate("/" + formState.category + "/" + formState.id);
  }
  return (
    <div className="container text-center mt-5">
      <div>
        <form onSubmit={formHandler}>
          <label>Search for:{' '}
            <select name="option" value={formState.option} onChange={handleCategory}>
              <option value="people">People</option>
              <option value="planets">Planets</option>
            </select>
          </label>{' '}
          <label>ID:</label>
          <input name="id" value={formState.id} onChange={handleId} />{' '}
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
      <div className="text-left">
        <Router>
          <People path="people/:id" />
          <Param path=":id" />
          <Colors path="hello/:color/:bg" />
          <Planet path="planets/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
