import { useState } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export function Main() {
  const [newTask, setNewTask] = useState('');
  const [tasks] = useState([
    'Fazer café', 'Beber água', 'Estudar',
  ]);

  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form action="#" className="form">
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

            <div>
              <FaEdit className="edit" />
              <FaWindowClose className="delete" />
            </div>
          </li>
        )) }
      </ul>
    </div>
  );
}
