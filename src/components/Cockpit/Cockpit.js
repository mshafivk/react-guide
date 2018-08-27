import React,{ Fragment }  from "react";
import classes from "./Cockpit.css";
const cockpit = props => {
  const REACT_VERSION = React.version;
  const clsList = [];
  if (props.persons.length <= 2) {
    clsList.push(classes.red);
  }
  if (props.persons.length <= 1) {
    clsList.push(classes.bold);
  }
  let btnClass = classes.Button;
  if (props.showPersonList) {
    btnClass = [classes.Button, btnClass, classes.Red].join(" ");
  }
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <h3>React Version - {REACT_VERSION}</h3>
      <button onClick={props.clicked} className={btnClass}>
        Toggle Person List
      </button>
      <p className={clsList.join(" ")}>
        {props.showPersonList
          ? `You have ${props.persons.length} items in the list`
          : ``}
      </p>
      <p>
        You Clicked toggle button {props.toggleClicked} times !
      </p>
    </Fragment>
  );
};

export default cockpit;
