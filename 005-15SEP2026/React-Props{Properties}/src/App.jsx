import React, { useState } from 'react';
import Users from './users.jsx';
import Card from './Card.jsx';
import './App.css';
import LoginForm from './LoginForm.jsx';
import AdminPanel from './AdminPanel.jsx';
import Props from './Props.jsx';

const a = 18;

const userdata = Users.filter((element) => element.age >= a);

console.log(userdata);

const MyButton = () => {
  return (
    <button>
      Click Me
    </button>
  );
};

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHome, setShowHome] = useState(false);

  let content;

  if (!isLoggedIn) {
    content = (
      <LoginForm onLogin={() => setIsLoggedIn(true)} />
    );
  } 
  else if (!showHome) {
    content = (
      <AdminPanel
        onHome={() => setShowHome(true)}
        onBack={() => setIsLoggedIn(false)}
      />
    );
  } 
  else {
    content = (
      <>
        <button onClick={() => setShowHome(false)}>
          ← Back
        </button>

        <h1>Hello, React Props!</h1>

        <MyButton />

        <div className="cards-container">
          {
            Users.map((user) => (
              <Card
                key={user.id}
                name={user.name}
                age={user.age}
                anime={user.anime}
                role={user.role}
                image={user.image}
              />
            ))
          }
        </div>

        <h3>Adult Anime Girls:</h3>

        <div className="cards-container">
          {
            userdata.map((user) => (
              <Card
                key={user.id}
                name={user.name}
                age={user.age}
                anime={user.anime}
                role={user.role}
                image={user.image}
              />
            ))
          }
        </div>
        <Props />
      </>
    );
  }

  return (
    <div className="app">
      {content}
    </div>
  );
};

export default App;