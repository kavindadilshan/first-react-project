const person =(props)=>{
    return <p>I'm a {props.name}! I,m {props.age} years old</p>
}

export default person;

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