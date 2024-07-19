import React from 'react';
import './ToggleButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleButton = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="toggle-button">
      <FontAwesomeIcon icon={theme === 'day' ? faMoon : faSun} />
    </button>
  );
};

export default ToggleButton;
