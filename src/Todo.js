import React from 'react';
import './Todo.css';

//building individual todo item
export default function Todo(e) {
    //let id = props.id;
    //let classes = props.className;

    return (
        <div className = "todo_list">
            <div className = "label_div">

                <input 
                    type = "checkbox"
                    className = "check"
                    id= {e.id}
                />

                <label 
                    id = {e.id}
                    text = {e.text}
                />

                <button 
                    type = "submit"
                    className = "delete_btn"
                    id = {e.id}
                >Delete</button>

            </div>
        </div>
        
    );
  }

