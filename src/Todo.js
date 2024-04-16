import React from 'react';
import './Todo.css';
import deleteTodo from './TodoList'

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
                        //onChange = {UpdateTodo}
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
                        onClick = {e.deleteTodo}
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
                        //onChange = {UpdateTodo}
                    />
    
                    <label 
                        id = {e.id}
                        text = {e.text}
                    >{e.text}</label>
    
                    <button 
                        type = "submit"
                        className = "delete_btn"
                        id = {e.id}
                        onClick = {e.deleteTodo}
                    >Delete</button>
    
                </div>
            </div> 
        );
    }
}



