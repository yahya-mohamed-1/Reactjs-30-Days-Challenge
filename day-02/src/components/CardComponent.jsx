import React from 'react';
import '../styles/CardComponent.css';

const CardComponent = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        {link && (
          <a href={link} className="card-btn" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
