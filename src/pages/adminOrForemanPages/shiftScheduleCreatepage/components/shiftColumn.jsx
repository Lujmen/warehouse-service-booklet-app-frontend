import React from 'react';
import WorkplaceColumn from './WorkplaceColumn';

const ShiftColumn = ({ workplaces, shift, shiftColumnIndex, users }) => {
  return (
    <div key={shiftColumnIndex} style={{ padding: '0 1rem 0 1rem', minWidth: '15rem', marginRight: '10rem' }}>
      {/* header */}
      <div style={{ marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>{shift}</h1>
      </div>
      {workplaces.map((workplace, index) => (
        <ul>
          <li key={index}>
            <WorkplaceColumn
              users={users.filter((user) => user.columnId === `${workplace.workplace}${shift}`)}
              is12HoursShift={workplace.is12HoursShift}
              index={index}
              shift={shift}
              workplace={workplace.workplace}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ShiftColumn;
