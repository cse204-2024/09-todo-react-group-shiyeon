import React from 'react';
import {useState, useEffect} from "react";
import './App.css';
import logo from './Logo.png';

function App() {
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

    <div className="App">
        
        <div className="header">
            <img src={logo} alt="logo image"></img>
        </div>

    </div>


    //iterate through the todos object create todo componenet and add them to the list
  );
}

export default App;
