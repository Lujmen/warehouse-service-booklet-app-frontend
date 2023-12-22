import React from 'react';
import WorkplaceColumn from './WorkplaceColumn';

const ShiftColumn = ({ workplaces, shift, shiftColumnIndex, users }) => {
  if (workplaces.length === 0) {
    return null;
  } else {
    return (
      <div className="shift-column" key={shiftColumnIndex}>
        {/* header */}
        <div className="shift-column-header">
          <h1>{shift}</h1>
        </div>
        {workplaces.map((workplace, index) => (
          <ul className="workplace-list">
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
  }
};

export default ShiftColumn;
