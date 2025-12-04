import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{ display: 'flex', alignItems: 'center', gap: 10 }}
      className="tasks"
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark ${todo.text} as ${
          todo.completed ? 'incomplete' : 'complete'
        }`}
      />
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
        className="delete-btn"
      >
        <i className="ph ph-trash"></i>
      </button>
    </li>
  );
}
