import React from 'react';
import Users from './users.jsx';
import Below18 from './Below18.jsx';

const Props = () => {

  const below18 = Users.filter((user) => user.age < 18);

  return (
    <div>
      <h2>Anime Girls Below 18</h2>

      <div className="cards-container">
        {
          below18.map((user) => (
            <Below18
              key={user.id}
              userAge={user.age}
              fname={user.name}
              anime={user.anime}
              image={user.image}
            />
          ))
        }
      </div>

    </div>
  );
};

export default Props;