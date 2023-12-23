import { useDroppable } from '@dnd-kit/core';
import React from 'react';
import UserItem from './UserItem';

const UsersColumn = ({ users }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: 'unsigned',
    data: {
      is12HoursShift: '',
    },
  });
  const style = {
    backgroundColor: isOver ? '#686868' : 'transparent', // Change to your desired color
  };

  /* ... */
  return (
    <div className="user-column" ref={setNodeRef}>
      {/* header */}
      <div style={style} className="user-column-header">
        <h1>Uzytkownicy</h1>
      </div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersColumn;
