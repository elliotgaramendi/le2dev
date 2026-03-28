import { useState } from 'react';

const ToDoForm = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    onAddToDo(inputValue);
    setInputValue('');
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="What needs to be done?"
        className="todo-form__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="todo-form__button"
      >
        Agregar
      </button>
    </form>
  );
};

export default ToDoForm;
