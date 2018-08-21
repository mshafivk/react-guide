import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Muhammed Shafi Vallattukavil", age: "32", styleName: "" },
      { id: 2, name: "thansi-mol", age: "24", styleName: "" },
      { id: 3, name: "afsheen", age: "4", styleName: "" },
      { id: 4, name: "aisha", age: "2", styleName: "" },
      { id: 5, name: "alaan", age: "0", styleName: "last" }
    ],
    showPersonList: false
  };
  deletePersonHandler = personIndex => {
    console.log("delete person handler called!");
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };
  nameChangedHandler = (ev, id) => {
    const newName = ev.target.value;
    console.log(id);
    const newPersons = this.state.persons.map(person => {
      if (person.id === id) {
        person.name = newName;
      }
      return person;
    });
    this.setState({
      persons: newPersons
    });
  };
  togglePersonList = () => {
    const showPersonList = this.state.showPersonList;
    console.log("Show Person list", showPersonList);
    this.setState({
      showPersonList: !showPersonList
    });
  };
  render() {
    let btnClass = "";
    let persons = "";
    if (this.state.showPersonList) {
      btnClass = classes.Red;
      // buttonStyle.backgroundColor = 'red';
      persons = (
        <Persons
          persons={this.state.persons}
          onChange={this.nameChangedHandler}
          onDelete={this.deletePersonHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersonList={this.state.showPersonList}
          persons={this.state.persons} clicked={this.togglePersonList}
        />
        {persons}
      </div>
    );
    //troublesome to write in below alternative JS apprach - Above JSX Compiled to below code,
    //thats why we need to import React all the time eventhough we are not directly using it.
    // return React.createElement('div',{className:"App"},React.createElement('h1',null,'Welcome to React App!'));
  }
}

export default App;
//another approach to call handler function and pass params
////  {this.state.persons.map((person)=> <Person name={person.name} age={person.age} styleName={person.styleName} click={this.changeNameHandler.bind(this,'Max!!')}/>)}

/**
 * 
 * Using conditional statements
 * {
         this.state.showPersonList ? 
       <div>
      {this.state.persons.map((person)=> <Person id={person.id} key={person.id} name={person.name} age={person.age} styleName={person.styleName} click={()=>this.changeNameHandler('Max!!')} nameChanged={(event,id)=>this.nameChangedHandler(event,id)}/>)}
      </div>
      : null
       }
 */
