import React, { Component } from "react";
import classes from "./Person.css";
import DeleteButton from "../../DeleteButton/DeleteButton";

class Person extends Component {
  componentWillMount() {
    console.log("[Person.js] componentWillMount Called!");
  }
  componentDidMount() {
    console.log("[Person.js] componentDidMount Called!");
  }
  componentWillUnmount() {
    console.log("[Person.js] componentWillUnmount Called!");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE - PROP Person.js] inside componentWillReceiveProps",
      JSON.stringify(nextProps)
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE Person.js] inside shouldComponentUpdate");
    return true;
    //return nextProps.persons !== this.props.persons;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE Person.js] inside UNSAFE_componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("[UPDATE Person.js] inside componentDidUpdate");
  }
  render() {
    console.log("[Person.js] render Called!");
    return (
      <div className={classes.Person} id={this.props.id}>
        <input
          type="text"
          onChange={ev => this.props.onChange(ev, this.props.id)}
          placeholder="Update Name here"
          value={this.props.name}
        />
        <p onClick={this.props.click}>
          I'm {this.props.name}. I'm {this.props.age} years old{" "}
          <DeleteButton onDelete={this.props.onDelete} />
        </p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
export default Person;
