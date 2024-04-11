import React from 'react';
import './App.css';

function App() {
  //const [todos, setTodos] = useState([]);

  function initialize(){
    //ajax
    let xhttp2 = new XMLHttpRequest();

    xhttp2.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let todo = JSON.parse(this.responseText);
            console.log(todo);
          }else if(this.readyState == 4){
            console.log(this.responseText);
        }
    };
    xhttp2.open("GET", "https://cse204.work/todos", true);
    xhttp2.setRequestHeader("x-api-key", "d4681d-747376-1752ce-4282a1-053f50");
    xhttp2.send();

    //let newTodos = [result.data,...todos];
    //setTodos(newTodos)

    return (
      <div className="App">
       
      </div>
    );
  }


  return (
    <div className="App">
        <div class="header">
            <img class="logo" src="Logo.png" alt="logo image"/>
        </div>
    </div>
  );
}

export default App;
