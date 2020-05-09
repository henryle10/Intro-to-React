import React from 'react';
import './App.css';

import PersonCard from './components/PersonCard'

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} HairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} HairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} HairColor="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} HairColor="Brown" />
      {/* <h1>
        <PersonCard name={"Doe, Jane"} />
      </h1>
      <p><PersonCard age={"Age: 45"} /></p>
      <p><PersonCard HairColor={"Hair Color: Black"} /></p>
      <BirthdayButt />
      <h1>
        <PersonCard name={"Smith, John"} />
      </h1>
      <p><PersonCard age={"Age: 88"} /></p>
      <p><PersonCard HairColor={"Hair Color: Brown"} /></p>
      <h1>
        <PersonCard name={"Fillmore, Millard"} />
      </h1>
      <p><PersonCard age={"Age: 50"} /></p>
      <p><PersonCard HairColor={"Hair Color: Brown"} /></p>
      <h1>
        <PersonCard name={"Smith, Maria"} />
      </h1>
      <p><PersonCard age={"Age: 62"} /></p>
      <p><PersonCard HairColor={"Hair Color: Brown"} /></p> */}
    </div>
  );
}

export default App;
