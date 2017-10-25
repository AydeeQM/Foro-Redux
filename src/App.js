import React, { Component } from 'react';
import { addComment, deleteComment } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ foro }) => {
  const foroList = foro.map((item, index) => {
    return(
      <li key={index}>
        <h1>{item.name}</h1>
        <h3>{item.comment}</h3>
        <button onClick = {deleteComment(item)}> Remove Comment </button>
      </li>)
      console.log(foro.lenght);
  });
  const onSubmit = e => {
     e.preventDefault();
     addComment(this.refInput.value, this.refInput2.value);
  };
   return (
      <div className="wrapper">
         <header>
            <h1>FORO</h1>
            <p> Comment App </p>
            <form onSubmit={onSubmit}>
               <input
                  type="text"
                  name="name"
                  placeholder="User"
                  ref={e => (this.refInput = e)}
               />
               <input 
                type = "text" 
                placeholder = "Comment"
                ref = {e => (this.refInput2 = e)}/>
               <button type="submit" name="submit" value="submit">
                  Submit
               </button>
            </form>
         </header>
         <div className="main">
            <h2>Comment</h2><span> cantidad {foro.lenght} </span>
            <ul id="invitedList">{foroList}</ul>
         </div>
      </div>
   );
};

const mapToProps = ({ foro}) => ({ foro });

export default connect(mapToProps)(App);