import { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: todoText,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <main className="app">
      <div className="app__container">
        <header className="app__header">
          <h1 className="app__title">Lista de Tareas</h1>
          <p className="app__subtitle">
            {todos.length === 0
              ? 'No hay tareas aún'
              : `${todos.filter(t => !t.completed).length} pendientes de ${todos.length}`
            }
          </p>
        </header>
        <ToDoForm
          onAddToDo={handleAddTodo}
        />
        <ToDoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo}
        />
      </div>
    </main>
  )
}

export default App
