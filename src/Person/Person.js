
import "./Person.css";
import Radium from 'radium';

const person =(props)=>{
    return (
        <div className={"Person"} >
            <p onClick={props.onClick}> I'm a {props.name}! I,m {props.age} years old</p>
            <p>{props.children}</p>
            <input type={"text"} onChange={props.onChange}/>
        </div>

    )
}

export default Radium(person);

// import React, {Component} from 'react';
//
// class Person extends Component {
//     render() {
//         return (
//             <p>I'm a {this.props.name}! I,m {this.props.age} years old</p>
//         );
//     }
// }
//
// export default Person;