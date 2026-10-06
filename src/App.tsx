import { useState, type FormEvent } from 'react';

import { readTodos, writeTodos, type Todo } from './todos';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(readTodos);
  const [draft, setDraft] = useState('');
  const [storageError, setStorageError] = useState(false);
  const remaining = todos.filter((todo) => !todo.completed).length;

  function save(next: Todo[]) {
    setTodos(next);
    setStorageError(!writeTodos(next));
  }

  function addTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = draft.trim();
    if (!title) return;
    save([{ id: crypto.randomUUID(), title, completed: false }, ...todos]);
    setDraft('');
  }

  function toggleTodo(id: string) {
    save(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  function removeTodo(id: string) {
    save(todos.filter((todo) => todo.id !== id));
  }

  return (
    <main className="app">
      <header><p className="eyebrow">A small, dependable list</p><h1>Things to do</h1><p>Keep the next step in view.</p></header>
      <form onSubmit={addTodo} className="add-form">
        <label htmlFor="new-todo">New task</label>
        <div><input id="new-todo" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="What needs doing?" maxLength={200} /><button type="submit">Add task</button></div>
      </form>
      {storageError && <p role="alert">Tasks are available in this tab, but could not be saved. They may be lost when you reload.</p>}
      <section aria-label="Tasks">
        <div className="list-heading"><h2>Tasks</h2><span>{remaining} remaining</span></div>
        {todos.length === 0 ? <p className="empty">Your list is clear. Add a task to get started.</p> :
          <ul>{todos.map((todo) => <li key={todo.id}>
            <label className={todo.completed ? 'completed' : ''}><input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} /><span>{todo.title}</span></label>
            <button type="button" className="remove" onClick={() => removeTodo(todo.id)} aria-label={`Remove ${todo.title}`}>Remove</button>
          </li>)}</ul>}
      </section>
    </main>
  );
}
