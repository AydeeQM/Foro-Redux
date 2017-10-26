import React, { Component } from 'react';
import { addComment, removeComment } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const User = ({name, comment, index}) => {
	return (
    <div className="data">
			<div className="lista">
        <h4><i class="fa fa-user-circle" aria-hidden="true"></i> @{name}</h4>
        <h5>{comment}</h5>
        <button className="delete" onClick={() => removeComment(index)}>
					Remove Comment
				</button>
		</div>
    </div>
	);
}

const App = ({ foro }) => {
  const onSubmit = e => {
     e.preventDefault();
     if(this.refInput.value && this.refInput2.value){
      addComment(this.refInput.value, this.refInput2.value);
      this.refInput.value = '';
      this.refInput2.value = '';
    }
     
  };
const foroComponent =  foro.map ( (item, index) => {
    return <User
        key = {index}
        name={item.name}
        comment={item.comment}
        index={index}
       />
  })

   return (
      <div className="container-fluid wrapper">
         <header>
            <h1>FORO</h1>
            <p> Comment App </p>

            <form onSubmit={onSubmit}>
            <div className="inner-wrap">
            <label>Your Name
               <input
                  type="text"
                  name="name"
                  placeholder="User"
                  ref={e => (this.refInput = e)}
               />
               </label>
               <label>Your Comment
               <textarea 
                type = "text" 
                placeholder = "Comment"
                ref = {e => (this.refInput2 = e)}/>
               <input type="submit" name="submit" value="Post Comment"/>
               </label>
               </div>
            </form>
         </header>
         <div className="main">
            <h2><i class="fa fa-commenting" aria-hidden="true"></i> {foro.length} comments</h2>
              {foroComponent}
         </div>
      </div>
   );
};

const mapToProps = ({ foro}) => ({ foro });

export default connect(mapToProps)(App);