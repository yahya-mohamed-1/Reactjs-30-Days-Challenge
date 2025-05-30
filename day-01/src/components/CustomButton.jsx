import React from 'react';
import '../styles/CustomButton.css';

const CustomButton = ({ text, color = 'blue', size = 'medium', onClick }) => {
  const sizeClass = {
    small: 'btn-small',
    medium: 'btn-medium',
    large: 'btn-large'
  }[size];

  return (
    <button
      className={`custom-button ${sizeClass}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
