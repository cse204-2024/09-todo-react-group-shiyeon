import React from 'react';
import './NewTodo.css';
//import logo from './logo.svg';
//import './App.css';

function NewTodo() {
    
    return (
        <div className="input" id="new_todo">
          <form>
            <input className="textbox" id="add_todo" type="text" placeholder="Add a new task"/>
            <button id="submit_todo" type="submit">Add</button>
          </form>
        </div>
    );
  }
  
  export default NewTodo;