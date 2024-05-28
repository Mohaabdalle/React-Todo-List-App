
import React, { useContext, useCallback } from 'react';
import { TodoContext } from '../Context/TodoContext';

const TodoFilter = () => {
  const { dispatch, state } = useContext(TodoContext);

  const setFilter = useCallback((filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  }, [dispatch]);

  return (
    <div className="todo-filter">
      <button
        className={state.filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={state.filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
      <button
        className={state.filter === 'incomplete' ? 'active' : ''}
        onClick={() => setFilter('incomplete')}
      >
        Incomplete
      </button>
    </div>
  );
};

export default TodoFilter;
