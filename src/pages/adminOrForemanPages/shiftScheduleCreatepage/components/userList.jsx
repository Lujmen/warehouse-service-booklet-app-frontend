import React from 'react';
import { useDrag } from 'react-dnd';
import DraggableUser from './draggableUser';

export const UserList = ({ users }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Available Users</h3>
      {users.map((user, index) => (
        <DraggableUser key={index} user={user} />
      ))}
    </div>
  );
};
