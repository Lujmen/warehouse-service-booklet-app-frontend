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
    <div ref={setNodeRef} style={{ minWidth: '15rem', border: '1px solid black', marginLeft: '1rem', borderRadius: '0 0 1rem 1rem' }}>
      {/* header */}
      <div style={{ marginBottom: '1rem', background: 'black', padding: '.25rem 0 .25rem 0' }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>Uzytkownicy</h1>
      </div>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        {users.map((user, index) => (
          <li key={index} style={{ width: '100%', marginBottom: '1rem', padding: '.5rem' }}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersColumn;
