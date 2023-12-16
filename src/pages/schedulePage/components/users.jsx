import React from 'react';

export const Users = (prop) => {
  const { users } = prop;
  return (
    <div>
      {users.map((user) => (
        <div style={{ marginBottom: '.25rem' }}>{user.username}</div>
      ))}
    </div>
  );
};
