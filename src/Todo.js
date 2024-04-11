import './Todo.css';

function App() {
    return (
        <div class="body">
        <div class="header">
        </div>
        <div class="input" id="new_todo">
            <form>
                <input class="textbox" id="add_todo" type="text" placeholder="Add a new task"/>
                <button id="submit_todo" type="submit">Add</button>
            </form>
        </div>

        <div class="container">
            <p>Up Next</p>
            <div class="nc_todo" id="nc_todo">
            </div>

            <p>Completed</p>
            <div class="c_todo" id="c_todo">
            </div>

        </div>
    </div>
  
    );
  }
  
  export default App;