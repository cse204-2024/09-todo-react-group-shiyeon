/*
import React from 'react';
import './NewTodo.css';
import Todo from './Todo';
import {useState, useEffect} from "react";
//import logo from './logo.svg';
//import './App.css';

function NewTodo() {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        e.preventDefault();
        let data={
            text: document.getElementById("add_todo").value
        };


            let xhttp2 = new XMLHttpRequest();

            xhttp2.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200){
                    let todo = JSON.parse(this.responseText);
                    console.log(todo);
                    document.getElementById("add_todo").value = "";

                }else if(this.readyState == 4){
                    console.log(this.responseText);
                }
            };
            xhttp2.open("POST", "https://cse204.work/todos", true);

            xhttp2.setRequestHeader("Content-type", "application/json");
            xhttp2.setRequestHeader("x-api-key", "d4681d-747376-1752ce-4282a1-053f50");
            xhttp2.send(JSON.stringify(data));
    }, []);

    function addTodo(todo){
        console.log(todo);

        return(
            <Todo 
            key ={todo.id} 
            id ={todo.id} 
            text = {todo.text} 
            completed = {todo.completed} 
            updateTodo={updateTodo} 
            deleteTodo={deleteTodo}/>
        );
    }

    return (

        <div className="input" id="new_todo">
          <form>
            <input className="textbox" id="add_todo" type="text" placeholder="Add a new task"/>
            <button id="submit_todo" type="submit" addTodo={addTodo}>Add</button>
          </form>
        </div>
        
    );
  }
  
  export default NewTodo;
      */