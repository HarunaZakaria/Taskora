import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p>No todos yet — add one!</p>;
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 8 }}>
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
