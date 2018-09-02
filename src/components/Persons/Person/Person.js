import React, { Component } from "react";
import classes from "./Person.css";
import DeleteButton from "../../DeleteButton/DeleteButton";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux";
import withCls from "../../../hoc/withCls";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  componentWillMount() {
    console.log("[Person.js] componentWillMount Called!");
  }
  componentDidMount() {
    console.log("[Person.js] componentDidMount Called!");
    if(this.props.position === 0)
    this.inputElement.current.focus();
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

  focus () {
    this.inputElement.current.focus();
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
      <Aux>
        <input
          type="text"
          ref={this.inputElement}
          onChange={ev => this.props.onChange(ev, this.props.id)}
          placeholder="Update Name here"
          value={this.props.name}
        />
        <p onClick={this.props.click}>
          I'm {this.props.name}. I'm {this.props.age} years old{" "}
          <DeleteButton onDelete={this.props.onDelete} />
        </p>
        <p>{this.props.children}</p>
      </Aux>
    );
  }
}
Person.propTypes = {
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  position:PropTypes.number
};
export default withCls(Person, classes.Person);
