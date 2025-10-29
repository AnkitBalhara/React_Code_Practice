import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todoSlice';

const Todo = () => {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Redux Todo List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={handleAdd}>Add Todo</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              margin: '10px 0',
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: '10px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
