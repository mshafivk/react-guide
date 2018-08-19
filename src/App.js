import React, { Component } from 'react';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      {id:1,name:'Muhammed Shafi Vallattukavil',age:'32', styleName:''},
      {id:2,name:'thansi-mol',age:'24', styleName:''},
      {id:3,name:'afsheen',age:'4', styleName:''},
      {id:4,name:'aisha',age:'2', styleName:''},
      {id:5,name:'alaan',age:'0', styleName:'last'}
    ],
    showPersonList:true
  }
  // DEMO METHOD TO SEE STATE CHANGE
  //changeNameHandler = (newName)=> {
  //   console.log('Clicked!!!',newName);
  //   this.setState({
  //     persons: [
  //       {id:1,name:'Muhammed Shafi Vallattukavil',age:'32', styleName:''},
  //       {id:2,name:'thansi-mol',age:'24', styleName:''},
  //       {id:3,name:'afsheen',age:'4', styleName:''},
  //       {id:4,name:'aisha',age:'2', styleName:''},
  //       {id:5,name:newName,age:'0', styleName:'last'}
  //     ]
  //   });
  // }
  deletePersonHandler = (personIndex) => {
    console.log('delete person handler called!');
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      'persons': persons
    });
  }
  nameChangedHandler = (ev,id) => {
    const newName = ev.target.value;
    console.log(id);
    const newPersons = this.state.persons.map((person)=> {
      if(person.id === id) {
        person.name = newName;
      }
      return person;
    });
    this.setState({
      persons: newPersons
    });
  }
  togglePersonList = () => {
    const showPersonList = this.state.showPersonList;
    console.log('Show Person list',showPersonList);
    this.setState({
      showPersonList: !showPersonList
    })
  }
  render() {
    //inline styling using js - to use css attribute names - use quotation mark. or use js syntax eg: backgroundColor:''
    // advantage - only applied  within element
    //cons -  styles suchas hover  are difficult to write
  //   const buttonStyle = {
  //     width: '250px',
  //     height:'60px',
  //     backgroundColor: 'green',
  //     color:'white',
  //     marginBottom:'10px',
  //     fontWeight: 'bold',
  //     fontSize: '14px'
  // }
  let personList = null;
  let btnClass = '';
  if(this.state.showPersonList) {
    personList = (
      <div>
      {this.state.persons.map((person,index)=> <ErrorBoundary key={person.id}><Person id={person.id} name={person.name} age={person.age} styleName={person.styleName} onDelete={()=>this.deletePersonHandler(index)} nameChanged={(event,id)=>this.nameChangedHandler(event,id)}/></ErrorBoundary>)}
      </div>
    )
    btnClass=classes.Red;
    // buttonStyle.backgroundColor = 'red';
  }
  const clsList = [];
  if (this.state.persons.length <=2 ) {
    clsList.push(classes.red);
  }
  if (this.state.persons.length <=1 ) {
    clsList.push(classes.bold);
  }

  

  
    return (
      <div className={classes.App}>
       <h1>Person - Course Module 3</h1>
       <button onClick={this.togglePersonList} className={btnClass}>Change Name</button>
       <p className={clsList.join(' ')}>You have {this.state.persons.length} persons in the list</p>
        {personList}
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