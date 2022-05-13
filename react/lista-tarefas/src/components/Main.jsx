import { useState } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export function Main() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (tasks.indexOf(newTask.trim()) !== -1) return;

    setTasks((prevState) => [...prevState, newTask]);
  }

  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form onSubmit={handleSubmit} action="#" className="form">
        <input
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />

        <button type="submit">
          <FaPlus />
        </button>
      </form>

      <ul className="tasks">
        { tasks.map((task) => (
          <li key={task}>
            { task }

            <span>
              <FaEdit className="edit" />
              <FaWindowClose className="delete" />
            </span>
          </li>
        )) }
      </ul>
    </div>
  );
}
