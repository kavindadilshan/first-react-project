import './App.css';
import React ,{Component}from 'react';
import Person from './Person/Person';

class App extends Component{
    state={
        personList:[
            {id:0,name:'kavinda',age:'24'},
            {id:1,name:'dilshan',age:'56'},
            {id:2,name:'nilu',age:'24'}
        ]
    };


    onNameChange=(event,id)=>{
        const personIndex=this.state.personList.findIndex(p=>{
            return p.id === id
        });

        const person = {...this.state.personList[personIndex]}; // create object

        // const person = Object.assign({},this.state.personList[personIndex])  // create object

        person.name = event.target.value;
        const persons =[...this.state.personList];
        persons[personIndex] = person

        this.setState({personList:persons})
    }

    onDeleteHandler=(selectedIndex)=>{
        const persons = this.state.personList;
        persons.splice(selectedIndex,1);
        this.setState({personList:persons})
        console.log(this.state.personList)
    }

    render() {
        const style={
            backgroundColor:'yellow'
        }
        const btnStyle={
            backgroundColor: 'white',
            borderRadius:10,
            padding:10,
            cursor:'pointer',
            margin:20
        }

        btnStyle.backgroundColor='green'

        const list = this.state.personList.map((items,i)=>(
            <Person
                name={items.name}
                age={items.age}
                key={i}
                onClick={()=>this.onDeleteHandler(i)}
                onChange={(event)=>this.onNameChange(event,items.id)}
            />
        ))
        return (
            <div className="App">
                <h1 style={style}>Hi! React</h1>
                <button style={btnStyle}>Toggle Button</button>
                {/*<Person name={this.state.personList[0].name} age={this.state.personList[0].age} onChange={this.onNameChange}/>*/}
                {/*<Person name={this.state.personList[1].name} age={this.state.personList[1].age}>My Hobbies:racing</Person>*/}
                {/*<Person name={this.state.personList[2].name} age={this.state.personList[2].age}/>*/}
                {list}
            </div>
        );
    }


    // return  React.createElement('div',null,React.createElement('h1',null,'work'))
}

export default App;
