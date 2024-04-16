import React from 'react';
import './Todo.css';

//building individual todo item
export default function Todo(todo) {
    
    function handleDelete(e){
        e.preventDefault();
        todo.deleteTodo(e.target.id);
    }

    function handleUpdate(e){
        e.preventDefault();
        todo.updateTodo(e.target);
    }

    if(todo.completed){
        return(
            <div className = "todo_list" key = {todo.id}>
                <div className = "label_div">
    
                    <input 
                        type = "checkbox"
                        className = "check"
                        id= {todo.id}
                        onChange = {handleUpdate}
                        checked
                    />
    
                    <label 
                        id = {todo.id}
                        text = {todo.text}
                    >{todo.text}</label>
    
                    <button 
                        type = "submit"
                        className = "delete_btn"
                        id = {todo.id}
                        onClick = {handleDelete}
                    >Delete</button>
    
                </div>
            </div>
        );
    }else{
        return (
            <div className = "todo_list" key = {todo.id}>
                <div className = "label_div">
    
                    <input 
                        type = "checkbox"
                        className = "check"
                        id= {todo.id}
                        onChange = {handleUpdate}
                    />
    
                    <label 
                        id = {todo.id}
                        text = {todo.text}
                    >{todo.text}</label>
    
                    <button 
                        type = "submit"
                        className = "delete_btn"
                        id = {todo.id}
                        onClick = {handleDelete}
                    >Delete</button>
    
                </div>
            </div> 
        );
    }
}



