// Workstation.js
import React from 'react';
import { useDrop } from 'react-dnd';
import { useQueryClient } from '@tanstack/react-query';
import { handleDrop } from '../utils/handelDrop';
import { handleRemoveFromWorkplace } from '../utils/handleRemoveFromWorkplace';

//index is concrete workplace
const Workplace = ({ workplaceName, schedule, setSchedule, shift, index }) => {
  const queryCLient = useQueryClient();
  const [, drop] = useDrop({
    accept: 'USER',
    drop: (item) => {
      console.log(item);
      handleDrop(item, workplaceName, setSchedule, queryCLient, shift, schedule);
    },
  });

  return (
    <div ref={drop} style={{ margin: '5px', padding: '5px', border: '1px solid #ddd' }}>
      {workplaceName}
      {schedule[shift][index].users.map((user, index) => (
        <div key={index}>
          <p>{user.username}</p>
          <button onClick={() => handleRemoveFromWorkplace(user, index, setSchedule, queryCLient, shift, schedule, workplaceName)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default Workplace;
