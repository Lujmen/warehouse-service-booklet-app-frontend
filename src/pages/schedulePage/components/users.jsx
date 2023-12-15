import React from 'react';

export const Users = (prop) => {
  const { users } = prop;
  return (
    <div>
      {users.map((user) => (
        <div>{user.username}</div>
      ))}
    </div>
  );
};
