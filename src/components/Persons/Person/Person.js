
import styles from "./Person.css";

import React, {Component} from 'react';

class Person extends Component {
    render() {
        return (
            <div className={styles.Person} >
                <p onClick={this.props.onClick}> I'm a {this.props.name}! I,m {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type={"text"} onChange={this.props.onChange}/>
            </div>
        );
    }
}

export default Person;