import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './app/component/todo/index';
import ToDoList from './app/component/todoList/index';

function App() {
  return (
    <div className="App">
      <ToDo />
      <ToDoList />
    </div>
  );
}

export default App;
