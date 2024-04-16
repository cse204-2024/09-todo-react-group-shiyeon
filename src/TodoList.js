import React from 'react';
import './TodoList.css';
import Todo from './Todo';
import {useState, useEffect} from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const com_todolist = todos.filter(todo => 
        todo.completed == true
    );
    const non_todolist = todos.filter(todo =>
        todo.completed == false
    );
    com_todolist.sort(function (a, b){
        return parseFloat(a.created_at) - parseFloat(b.created_at);
      });
    non_todolist.sort(function (a, b){
        return parseFloat(a.created_at) - parseFloat(b.created_at);
      });


    useEffect(()=>{
        let xhttp2 = new XMLHttpRequest();
  
        xhttp2.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                let todo = JSON.parse(this.responseText);
                setTodos(todo);
                
              }else if(this.readyState == 4){
                console.log(this.responseText);
            }
        };
        xhttp2.open("GET", "https://cse204.work/todos", true);
        xhttp2.setRequestHeader("x-api-key", "d4681d-747376-1752ce-4282a1-053f50");
        xhttp2.send();

        com_todolist.sort(function (a, b){
            return parseFloat(a.created_at) - parseFloat(b.created_at);
          });
        non_todolist.sort(function (a, b){
            return parseFloat(a.created_at) - parseFloat(b.created_at);
          });
    }, []);


      function addTodo(todo){
        todo.preventDefault();
        let newTodo = document.getElementById("add_todo").value;

        let data = {
            text : newTodo
        }
        let xhttp2 = new XMLHttpRequest();

        xhttp2.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                let todo = JSON.parse(this.responseText);
                let newTodos = [todo,...todos];
                setTodos(newTodos);
                document.getElementById("add_todo").value = "";

            }else if(this.readyState == 4){
                console.log(this.responseText);
            }
        };
        xhttp2.open("POST", "https://cse204.work/todos", true);

        xhttp2.setRequestHeader("Content-type", "application/json");
        xhttp2.setRequestHeader("x-api-key", "d4681d-747376-1752ce-4282a1-053f50");
        xhttp2.send(JSON.stringify(data));

      }

      function deleteTodo(todo){
        //todo is id of the element 
        //call ajax
        let xhttp2 = new XMLHttpRequest();

        xhttp2.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
            //let todos = JSON.parse(this.responseText);
            //console.log(todos);
            }else if (this.readyState == 4){
            console.log(this.responseText);
            }
        };
        xhttp2.open("DELETE", "https://cse204.work/todos/"+todo, true);

        xhttp2.setRequestHeader("Content-type", "application/json");
        xhttp2.setRequestHeader("x-api-key", "d4681d-747376-1752ce-4282a1-053f50");
        xhttp2.send();

        const remainingTodos = todos.filter((t) => todo !== t.id);
        //console.log(remainingTodos);
        setTodos(remainingTodos);
        }

        function updateTodo(todo){
            let id = todo.id;
            let checked = todo.checked;

            let data = {
                completed: checked
            }
            
            let xhttp2 = new XMLHttpRequest();

            xhttp2.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200){
                    let todo = JSON.parse(this.responseText);
                    //console.log(todo);

                }else if (this.readyState == 4){
                    console.log(this.responseText);
                }
            };

            xhttp2.open("PUT", "https://cse204.work/todos/"+id, true);

            xhttp2.setRequestHeader("Content-type", "application/json");
            xhttp2.setRequestHeader("x-api-key", "d4681d-747376-1752ce-4282a1-053f50");
            xhttp2.send(JSON.stringify(data));  

            if(checked){
                //add todo to a completed todolist
                let changestatus = todos.find((prev_todo) => id == prev_todo.id);
                changestatus.completed = true;
            }else{
                let changestatus = todos.find((prev_todo) => id == prev_todo.id);
                changestatus.completed = false;
            }
            setTodos(todos);

        }

       
    return (
        <div>
            <div className="input" id="new_todo">
                <form>
                    <input className="textbox" id="add_todo" type="text" placeholder="Add a new task"/>
                    <button id="submit_todo" type="submit" onClick={addTodo}>Add</button>
                </form>
            </div>

            <div className="container">

            <p>Up Next</p>
            <div className="nc_todo" id="nc_todo">
                {
                non_todolist.map((todo)=>{
                    return(
                        <Todo key ={todo.id} id ={todo.id} text = {todo.text} completed = {todo.completed} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    );
                })
                }
            </div>
            
            <p>Completed</p>
            <div className="c_todo" id="c_todo">
                {
                com_todolist.map((todo)=>{
                    return(
                        <Todo key ={todo.id} id ={todo.id} text = {todo.text} completed = {todo.completed} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    );
                })
                }
            </div>
            </div>
        </div>
        
    );
    

  }
  
  export default TodoList;

