'use client';

import { useState } from 'react';
import Link from 'next/link';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoListPage() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Learn Bootstrap', completed: false },
    { id: 2, text: 'Practice jQuery', completed: false },
    { id: 3, text: 'Build a Project', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, #6a11cb, #2575fc)',
      minHeight: '100vh',
      color: 'white',
      paddingTop: '2rem'
    }}>
      <div className="container">
        <Link href="/" className="btn btn-sm btn-light mb-3">
          ← Back to Home
        </Link>
        <h1 className="text-center my-4">Todo List</h1>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Tambahkan item baru"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Tambah
          </button>
        </div>

        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? 'completed' : ''
              }`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                borderRadius: '5px',
                margin: '5px 0',
                textDecoration: todo.completed ? 'line-through' : 'none',
                opacity: todo.completed ? 0.6 : 1,
              }}
            >
              <span>{todo.text}</span>
              <div>
                <button
                  className="btn btn-sm btn-success me-2"
                  onClick={() => toggleComplete(todo.id)}
                  style={{ backgroundColor: 'white', color: '#6a11cb' }}
                >
                  Selesai
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeTodo(todo.id)}
                  style={{ backgroundColor: 'white', color: '#dc3545' }}
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
