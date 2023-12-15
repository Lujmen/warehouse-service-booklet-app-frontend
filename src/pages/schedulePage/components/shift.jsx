import React from 'react';
import Workplace from './workplace';

const Shift = (props) => {
  const { shift, schedule } = props;
  console.log(shift);
  return (
    <div>
      <h1>{shift}</h1>
      <div>
        <ul>
          {schedule[shift].map((scheduleShift) => (
            <li style={{ border: '1px solid yellow', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Workplace workplace={scheduleShift} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shift;
