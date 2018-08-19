import React from 'react';
import Delete from './delete.svg';
const deleteButtonStyle = {
    height: '20px',
    marginLeft:'10px',
    boxShadow:'0 0.5px 0.5px #7e6d6d',
    float:'right',
    cursor: 'pointer'
}
const deleteButton = (props) => {
    return <img src={Delete} style={deleteButtonStyle} alt="delete-button" onClick={props.onDelete}/>
}
export default deleteButton;