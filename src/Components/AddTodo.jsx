import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');

  function submit(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  }

  return (
  <div className="form-container">
     <form onSubmit={submit} style={{ display: 'flex', gap: 10 }}>
      <input
        aria-label="New todo"
        placeholder="Add new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  </div>
  );
}
