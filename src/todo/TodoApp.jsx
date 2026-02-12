import { useState } from "react";
import "./todo.css";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!input.trim()) return;

    if (editId) {
      // update
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      // add
      setTodos(prev => [
        ...prev,
        { id: Date.now(), text: input }
      ]);
    }

    setInput("");
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>📝 Todo App for CI/CD implemented by chitro</h2>
      <h3>Welcome to the Dashboard</h3>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <div className="actions">
              <button className="edit" onClick={() => handleEdit(todo)}>
                Edit
              </button>
              <button className="delete" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
