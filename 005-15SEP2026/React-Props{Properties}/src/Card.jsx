import React from 'react';
import './Card.css';

const Card = ({ name, age, anime, role, image }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={name}
        className="card-image"
      />

      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Anime:</strong> {anime}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
};

export default Card;