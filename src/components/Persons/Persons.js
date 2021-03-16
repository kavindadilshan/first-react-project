import React from 'react';
import Person from '../Persons/Person/Person';

const persons = (props) => props.personList.map((items, i) => (
    <Person
        name={items.name}
        age={items.age}
        key={i}
        onClick={() => props.onClicked(i)}
        onChange={(event) => props.onChanged(event, items.id)}
    />
))

export default persons;
