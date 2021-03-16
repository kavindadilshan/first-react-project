import styles from "./Person.css";

import React, {Component} from 'react';
import WithClass from "../../../hoc/WithClass";
import PropTypes from 'prop-types';

class Person extends Component {
    componentDidMount() {
        if (this.props.position===0){
            this.inputElement.focus();
        }
    }

    render() {
        return (
            <WithClass class={styles.Person}>
                <p onClick={this.props.onClick}> I'm a {this.props.name}! I,m {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp)=>this.inputElement=inp}
                    type={"text"}
                    onChange={this.props.onChange}/>
            </WithClass>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    onChange: PropTypes.func
}

export default Person;