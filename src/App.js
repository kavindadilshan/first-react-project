import './App.css';
import React from 'react';
import Person from './Person/Person';

function App() {
    return (
        <div className="App">
            <h1>Hi! React</h1>
            <Person name={"kavinda"} age={"25"}/>
            <Person name={"dilshan"} age={"24"}>My Hobbies:racing</Person>
            <Person name={"nilupulie"} age={"25"}/>
        </div>
    );
    // return  React.createElement('div',null,React.createElement('h1',null,'work'))
}

export default App;
