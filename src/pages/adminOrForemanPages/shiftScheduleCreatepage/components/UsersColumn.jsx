import { useDroppable } from '@dnd-kit/core';
import React from 'react';
import UserItem from './UserItem';

const UsersColumn = ({ users }) => {
  const { setNodeRef, over } = useDroppable({
    id: 'unsigned',
    data: {
      is12HoursShift: '',
    },
  });

  /* ... */
  return (
    <div className="user-column" ref={setNodeRef}>
      {/* header */}
      <div className="user-column-headre">
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
