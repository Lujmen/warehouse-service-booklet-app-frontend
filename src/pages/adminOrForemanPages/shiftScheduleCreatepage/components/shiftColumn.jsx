// ShiftColumn.js

import React from 'react';
import Workplace from './workplace';

export const ShiftColumn = ({ shift, users, setUsers, schedule, setSchedule }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', flex: '1' }}>
      <h3>{shift.type}</h3>
      {shift.workplaces.map((workplace, index) => (
        <Workplace
          index={index}
          key={workplace}
          workplaceName={workplace}
          shift={shift.type}
          schedule={schedule}
          setSchedule={setSchedule}
          setUsers={setUsers}
        />
      ))}
    </div>
  );
};
