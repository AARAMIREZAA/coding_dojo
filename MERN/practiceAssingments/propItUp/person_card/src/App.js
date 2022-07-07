
import './App.css';
import PersonCard from './components/PersonCard'
import React, { useState } from 'react';

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <legend>App.js</legend> */}
      {/* <button onClick={() => setCount(1)}>Click me!</button> */}
      <PersonCard  firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <PersonCard  firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <PersonCard  firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <PersonCard  firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;
