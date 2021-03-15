import './App.css';
import React from 'react';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi! React</h1>
        <Person/>
    </div>
  );
  // return  React.createElement('div',null,React.createElement('h1',null,'work'))
}

export default App;
