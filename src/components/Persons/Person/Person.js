
import styles from "./Person.css";

import React, {Component} from 'react';
import WithClass from "../../../hoc/WithClass";

class Person extends Component {
    render() {
        return (
            <WithClass class={styles.Person} >
                <p onClick={this.props.onClick}> I'm a {this.props.name}! I,m {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type={"text"} onChange={this.props.onChange}/>
            </WithClass>
        );
    }
}

export default Person;