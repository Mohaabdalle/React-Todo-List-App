
import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../Context/TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  const handleRemove = useCallback(() => {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id });
  }, [dispatch, todo.id]);

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;
