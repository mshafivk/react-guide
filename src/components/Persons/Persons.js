import React from "react";
import Person from "./Person/Person";
const persons = props =>
  props.persons.map((person, index) => (
    <Person
      id={person.id}
      key={person.id}
      name={person.name}
      age={person.age}
      styleName={person.styleName}
      onDelete={() => props.onDelete(index)}
      onChange={event => props.onNameChange(event, person.id)}
    />
  ));
export default persons;
