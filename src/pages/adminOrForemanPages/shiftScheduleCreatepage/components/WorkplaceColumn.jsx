import { useDroppable } from '@dnd-kit/core';
import React from 'react';
import UserItem from './UserItem';

const WorkplaceColumn = ({ users, index, shift, workplace, is12HoursShift }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `${workplace}${shift}`,
    data: {
      is12HoursShift: is12HoursShift,
    },
  });

  const style = {
    backgroundColor: isOver ? '#686868' : 'transparent', // Change to your desired color
    minHeight: '5rem',
    border: '1px solid black',
    marginBottom: '1rem',
    borderRadius: '0 0 1rem 1rem',
    paddingBottom: '1rem',
  };

  return (
    <div key={index} style={style} ref={setNodeRef}>
      {/* header */}
      <div style={{ display: 'flex', background: 'black', justifyContent: 'center', alignItems: 'center', marginBottom: '.5rem' }}>
        <h1 style={{ fontSize: '1.2rem', textAlign: 'center', lineHeight: '1.5' }}>{workplace}</h1>
      </div>
      <p>shift duration: {is12HoursShift ? '12' : '8'}</p>
      <ul>
        {users.map((user, index) => (
          <li key={index} style={{ marginBottom: '.5rem' }}>
            <UserItem user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkplaceColumn;
