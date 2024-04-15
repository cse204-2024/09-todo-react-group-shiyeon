import React from 'react';
import './TodoList.css';
import Todo from './Todo';
import {useState, useEffect} from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
      let xhttp2 = new XMLHttpRequest();
  
      xhttp2.onreadystatechange = function(){
          if (this.readyState == 4 && this.status == 200){
              let todo = JSON.parse(this.responseText);
              setTodos(todo);
              
              todos.sort(function (a, b){
                return parseFloat(a.created_at) - parseFloat(b.created_at);
              });
                //console.log(todos);
              
            }else if(this.readyState == 4){
              console.log(this.responseText);
          }
      };
      xhttp2.open("GET", "https://cse204.work/todos", true);
      xhttp2.setRequestHeader("x-api-key", "d4681d-747376-1752ce-4282a1-053f50");
      xhttp2.send();
  
    }, []);

    return (
        <div className="container">
            
        <p>Up Next</p>
        <div className="nc_todo" id="nc_todo">
                {todos.map((todo) => {
                    return(
                        <Todo 
                        key = {todo.id} 
                        id = {todo.id} 
                        text = {todo.text} 
                        completed = {todo.completed} />
                    );        
            })}
        </div>

        <p>Completed</p>
        <div className="c_todo" id="c_todo"></div>
        </div>
    );
  }
  
  export default TodoList;
