
import Person from '../Persons/Person/Person';
import React, {Component} from 'react';

class Persons extends Component {
    render() {
        return this.props.personList.map((items, i) => (
            <Person
                name={items.name}
                age={items.age}
                key={i}
                onClick={() => this.props.onClicked(i)}
                onChange={(event) => this.props.onChanged(event, items.id)}
            />
        ))
    }
}

export default Persons;
