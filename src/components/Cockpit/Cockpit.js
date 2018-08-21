import React from "react";
import classes from "./Cockpit.css";
const cockpit = props => {
  const clsList = [];
  if (props.persons.length <= 2) {
    clsList.push(classes.red);
  }
  if (props.persons.length <= 1) {
    clsList.push(classes.bold);
  }
  let btnClass = "";
  if (props.showPersonList) {
    btnClass = classes.Red;
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Person - Course Module 3</h1>
      <button onClick={props.clicked} className={btnClass}>
        Change Name
      </button>
      <p className={clsList.join(" ")}>
        {(props.showPersonList)? `You have ${props.persons.length} items in the list`: ``}
      </p>
    </div>
  );
};

export default cockpit;