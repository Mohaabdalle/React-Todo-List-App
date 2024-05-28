
import React, { useContext, useMemo } from 'react';
import { TodoContext } from '../Context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  const filteredTodos = useMemo(() => {
    switch (state.filter) {
      case 'completed':
        return state.todos.filter(todo => todo.completed);
      case 'incomplete':
        return state.todos.filter(todo => !todo.completed);
      default:
        return state.todos;
    }
  }, [state.todos, state.filter]);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
