import { useState } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

import './Main.css';

export function Main() {
  const [task, setTask] = useState('');

  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form action="#" className="form">
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />

        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}
