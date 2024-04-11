import React from 'react';
import './Todo.css';
//import logo from './logo.svg';
//import './App.css';

function Todo() {
    
    return (
        <div class="container">
            <p>Up Next</p>
            <div class="nc_todo" id="nc_todo"></div>

            <p>Completed</p>
            <div class="c_todo" id="c_todo">
            </div>
        </div>
    );
  }

  export default Todo;