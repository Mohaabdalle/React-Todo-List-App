
import React, { useRef, useContext } from 'react';
import { TodoContext } from '../Context/TodoContext';

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value.trim()) {
      dispatch({ type: 'ADD_TODO', payload: value });
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Add a new todo" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
