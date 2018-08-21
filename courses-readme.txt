Section 5 - Using Radium for mediaquery and pseudo selectors with inline styles
    - npm install --save radium
    - import Radium, { StyleRoot } from 'radium';
    - update style with pseudo selectors as given below:
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    - update mediaquery as below:
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    - export default Radium( App ); 

Section 5 - CSS Module Highlights
    - npm run eject
    - config
      > webpack.config.dev.js && webpack.config.dev.js 
      > in css-loader options 
      > modules:true,localIdentName:'[name]__[local]__[hash:base64:5]'
    - in css file write all required css including mediaquery and keyframe animation
    - import as import classes (anyname) from './Person.css'
    - use as className={classes.Person}
Section 7- Folder restructuring
    - Restructure components, containers and assets
    - Use Persons wrapper component
