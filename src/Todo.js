import React from 'react';
import './Todo.css';

//building individual todo item
export default function Todo(e) {

    if(e.completed){
        return(
            <div className = "todo_list" key = {e.id}>
                <div className = "label_div">
    
                    <input 
                        type = "checkbox"
                        className = "check"
                        id= {e.id}
                        checked
                    />
    
                    <label 
                        id = {e.id}
                        text = {e.text}
                    >{e.text}</label>
    
                    <button 
                        type = "submit"
                        className = "delete_btn"
                        id = {e.id}
                    >Delete</button>
    
                </div>
            </div>
        );
    }else{
        return (
            <div className = "todo_list" key = {e.id}>
                <div className = "label_div">
    
                    <input 
                        type = "checkbox"
                        className = "check"
                        id= {e.id}
                    />
    
                    <label 
                        id = {e.id}
                        text = {e.text}
                    >{e.text}</label>
    
                    <button 
                        type = "submit"
                        className = "delete_btn"
                        id = {e.id}
                    >Delete</button>
    
                </div>
            </div> 
        );
    }

    
  }

