import React from 'react';
import './Todo.css';

//building individual todo item
export default function Todo(key, id, text) {

    return (
        <div className = "todo_list" key = {key}>
            <div className = "label_div">

                <input 
                    type = "checkbox"
                    className = "check"
                    id= {id}
                />

                <label 
                    id = {id}
                    text = {text}
                />

                <button 
                    type = "submit"
                    className = "delete_btn"
                    id = {id}
                >Delete</button>

            </div>
        </div>
        
    );
  }

