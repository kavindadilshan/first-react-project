import './App.css';
import React ,{Component}from 'react';
import Person from './Person/Person';

class App extends Component{
    state={
        personList:[
            {name:'kavinda',age:'24'},
            {name:'dilshan',age:'56'},
            {name:'nilu',age:'24'}
        ]
    };
    onNameChange=(event)=>{
        this.setState({
            personList:[
                {name:event.target.value,age:'24'},
                {name:'dilshan',age:'56'},
                {name:'nilu',age:'24'}
            ]
        })
    }
    render() {
        const style={
            backgroundColor:'yellow'
        }
        return (
            <div className="App">
                <h1 style={style}>Hi! React</h1>
                <Person name={this.state.personList[0].name} age={this.state.personList[0].age} onChange={this.onNameChange}/>
                <Person name={this.state.personList[1].name} age={this.state.personList[1].age}>My Hobbies:racing</Person>
                <Person name={this.state.personList[2].name} age={this.state.personList[2].age}/>
            </div>
        );
    }


    // return  React.createElement('div',null,React.createElement('h1',null,'work'))
}

export default App;
