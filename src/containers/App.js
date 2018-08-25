import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
    this.state = {
      persons: [
        {
          id: 1,
          name: "Muhammed Shafi Vallattukavil",
          age: "32",
          styleName: ""
        },
        { id: 2, name: "thansi-mol", age: "24", styleName: "" },
        { id: 3, name: "afsheen", age: "4", styleName: "" },
        { id: 4, name: "aisha", age: "2", styleName: "" },
        { id: 5, name: "alaan", age: "0", styleName: "last" }
      ],
      showPersonList: false
    };
  }
  componentWillMount() {
    console.log("[App.js] componentWillMount Called!");
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount Called!");
  }
  componentWillUnmount() {
    console.log("[App.js] componentWillUnmount Called!");
  }
  //only triggered by props change
  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE App.js] inside componentWillReceiveProps",
      JSON.stringify(nextProps)
    );
  }
  //update cycle - triggered by state change
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] inside shouldComponentUpdate",
      nextProps,
      nextState
    );
    //return true;
    return (
      nextState.persons !== this.state.persons ||
      nextState.showPersonList !== this.state.showPersonList
    );
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] inside UNSAFE_componentWillUpdate", nextState);
  }
  componentDidUpdate() {
    console.log("[UPDATE App.js] inside componentDidUpdate");
  }
  //only work in modern browser
  // state = {
  //   persons: [
  //     { id: 1, name: "Muhammed Shafi Vallattukavil", age: "32", styleName: "" },
  //     { id: 2, name: "thansi-mol", age: "24", styleName: "" },
  //     { id: 3, name: "afsheen", age: "4", styleName: "" },
  //     { id: 4, name: "aisha", age: "2", styleName: "" },
  //     { id: 5, name: "alaan", age: "0", styleName: "last" }
  //   ],
  //   showPersonList: false
  // };
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
    console.log("[App.js] render Called!");
    let persons = "";
    if (this.state.showPersonList) {
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
        <button
          onClick={() => {
            this.setState({ showPersonList: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          title={this.props.title}
          showPersonList={this.state.showPersonList}
          persons={this.state.persons}
          clicked={this.togglePersonList}
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
