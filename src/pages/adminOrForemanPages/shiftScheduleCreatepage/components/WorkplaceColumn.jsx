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
  };

  return (
    <div style={style} ref={setNodeRef} className="workplace-column" key={index}>
      {/* header */}
      <div className="workplace-header">
        <h1>{workplace}</h1>
      </div>
      <div className="workplace-column-content">
        <div className="workplace-duration-header">
          <p>Zmiana: {is12HoursShift ? '12' : '8'} godzin</p>
        </div>
        <ul>
          {users.map((user, index) => (
            <li className="workplace-list-item" key={index}>
              <UserItem user={user} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkplaceColumn;
