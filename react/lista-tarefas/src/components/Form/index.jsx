import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export function Form({ handleSubmit, setNewTask, newTask }) {
  return (
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
  );
}

Form.propTypes = {
  setNewTask: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
