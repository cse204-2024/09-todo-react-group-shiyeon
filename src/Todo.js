import React from 'react';
import './Todo.css';

//building individual todo item
function Todo() {
    //let id = props.id;
    //let classes = props.className;

    return (
        <div className = "todo_list">
            <div className = "label_div">

                <input 
                    type = "checkbox"
                    className = "check"
                    //id= 
                />

                <label 
                    //id = {e}
                    //text = {e}
                />

                <button 
                    type = "submit"
                    className = "delete_btn"
                    //id = {e}
                >Delete</button>

            </div>
        </div>
        

    );
  }

  export default Todo;

  //export default Todo();