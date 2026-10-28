import React from 'react';

const LoginForm = ({ onLogin }) => {
  return (
    <div className="login-form">

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button onClick={onLogin}>
        Login
      </button>

    </div>
  );
};

export default LoginForm;