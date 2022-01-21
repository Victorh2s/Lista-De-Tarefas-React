import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './form.css';

export default function Form({ hadleSubmit, handleChange, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={hadleSubmit}>
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  hadleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
