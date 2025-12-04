import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
export default function App() {
  const [todos, setTodos] = useLocalStorage('todos', []);

  function addTodo(text) {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="main">
        <h3 className='mt-3'>Add Task</h3>
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
    </div>
  );
}
