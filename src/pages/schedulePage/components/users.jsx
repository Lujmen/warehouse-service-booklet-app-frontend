import React from 'react';

export const Users = (prop) => {
  const { users } = prop;
  return (
    <div>
      {users.map((user) => (
        <div style={{ border: '1px solid gold', marginBottom: '.25rem' }}>{user.username}</div>
      ))}
    </div>
  );
};
