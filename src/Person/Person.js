
import "./Person.css";
import Radium from 'radium';

const person =(props)=>{

    const style={
        '@media(min-width:500px)':{
            width:450
        }
    }

    return (
        <div className={"Person"} style={style}>
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