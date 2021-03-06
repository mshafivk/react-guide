import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons.js] inside constructor!",props);
        this.lastPersonRef=React.createRef();

    }
  componentWillMount() {
    console.log("[Persons.js] componentWillMount Called!");
  }
  componentDidMount() {
    console.log("[Persons.js] componentDidMount Called!");
    this.lastPersonRef.current.focus();
  }
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount Called!");
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] inside componentWillReceiveProps",
      JSON.stringify(nextProps)
    );
  }
//if you are extending from PureComponent - then no need to have shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE Persons.js] inside shouldComponentUpdate");
    // return true;


    return (
      nextProps.persons !== this.props.persons ||
      nextProps.onDelete !== this.props.onDelete ||
      nextProps.onChange !== this.props.onChange
    );
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE Persons.js] inside UNSAFE_componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("[UPDATE Persons.js] inside componentDidUpdate");
  }
  render() {
    console.log("[Persons.js] render Called!");
    return this.props.persons.map((person, index) => (
      <Person
        id={person.id}
        key={person.id}
        name={person.name}
        position={index}
        age={person.age}
        ref={this.lastPersonRef}
        styleName={person.styleName}
        onDelete={() => this.props.onDelete(index)}
        onChange={event => this.props.onChange(event, person.id)}
      />
    ));
  }
}
export default Persons;
