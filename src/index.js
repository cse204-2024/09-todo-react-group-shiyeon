import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Todo from './Todo';
import TodoList from './TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TodoList />
  </React.StrictMode>
);