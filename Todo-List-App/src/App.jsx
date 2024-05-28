// src/App.js
import React from 'react';
import { TodoProvider } from './Context/TodoContext';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import TodoFilter from './Components/TodoFilter';
import './style.css';

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
