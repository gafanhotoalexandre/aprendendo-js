import { useState } from 'react';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import { Form } from './Form';

import './Main.css';

export function Main() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskIndex, setTaskIndex] = useState(-1);

  function handleSubmit(event) {
    event.preventDefault();

    if (tasks.indexOf(newTask.trim()) !== -1) return;

    if (taskIndex === -1) {
      setTasks((prevState) => [...prevState, newTask]);
      setNewTask('');
    } else {
      tasks[taskIndex] = newTask;
      setTasks(() => [...tasks]);

      setNewTask('');
      setTaskIndex(-1);
    }
  }

  function handleEdit(event, index) {
    setNewTask(tasks[index]);
    setTaskIndex(index);
  }

  function handleDelete(event, index) {
    tasks.splice(index, 1);
    setTasks(() => [...tasks]);
  }

  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <Form
        handleSubmit={handleSubmit}
        setNewTask={setNewTask}
        newTask={newTask}
      />

      <ul className="tasks">
        { tasks.map((task, index) => (
          <li key={task}>
            { task }

            <span>
              <FaEdit
                onClick={(event) => handleEdit(event, index)}
                className="edit"
              />
              <FaWindowClose
                onClick={(event) => handleDelete(event, index)}
                className="delete"
              />
            </span>
          </li>
        )) }
      </ul>
    </div>
  );
}
