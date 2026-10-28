import React from 'react';

const AdminPanel = ({ onHome, onBack }) => {
  return (
    <div className="admin-panel">

      <h2>Admin Panel</h2>

      <p>Welcome to the Admin Panel</p>

      <button>Add User</button>
      <button>Delete User</button>
      <button>Manage Users</button>

      <br />

      <button onClick={onHome}>
        Go to Homepage
      </button>

      <button onClick={onBack}>
        ← Back to Login
      </button>

    </div>
  );
};

export default AdminPanel;