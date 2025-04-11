import React from 'react';
import './Friend.css';

const Friend = (props) => {
  return (
    <div className="Friend">  
      {<h1 onClick={props.onChange}>Name: {props.name}</h1>}
      <h1 onClick={props.delete}>Name: {props.name}</h1>  
      <h2>Email: {props.email}</h2>
      <input type="text" onChange={props.inputName} value = {props.friendName} placeholder="Change name" />
    </div>
  );
};

export default Friend;
