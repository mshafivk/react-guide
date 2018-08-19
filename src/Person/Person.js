import React from 'react';
import classes from './Person.css';
import DeleteButton from '../DeleteButton/DeleteButton';
const person = (props) => {
    const rnd = Math.random();
    console.log(rnd)
    if(rnd > 0.9)  {
        throw new Error('Oops ! something went wrong!!');
    }
    return (
        <div className={classes.Person} id={props.id}>
        <input type="text" onChange={(ev)=>props.nameChanged(ev,props.id)} placeholder="Update Name here" value={props.name}/>
        <p onClick={props.click}>I'm {props.name}. I'm {props.age} years old <DeleteButton onDelete={props.onDelete}/></p>
        <p>{props.children}</p>
        </div>
    )
        
}

export default person;