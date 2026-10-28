import React from 'react';

const Below18 = ({ userAge, fname, anime, image }) => {

  console.log("Name:", fname);
  console.log("Age:", userAge);
  console.log("Anime:", anime);

  return (
    <div className="card">

      <img
        src={image}
        alt={fname}
        className="card-image"
      />

      <h2>{fname}</h2>

      <p>
        <strong>Age:</strong> {userAge}
      </p>

      <p>
        <strong>Anime:</strong> {anime}
      </p>

    </div>
  );
};

export default Below18;