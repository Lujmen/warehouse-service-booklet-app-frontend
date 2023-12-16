import React from 'react';
import Workplace from './workplace';

const Shift = (props) => {
  const { shift, schedule } = props;
  console.log(shift);
  return (
    <div style={{ minWidth: '20rem' }}>
      <h1 className="bg-primary-400" style={{ display: 'flex', alignItems: 'center', minHeight: '2rem', padding: '0 1rem', marginTop: '1rem' }}>
        {shift}
      </h1>
      <div>
        <ul>
          {schedule[shift].map((scheduleShift) => (
            <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Workplace workplace={scheduleShift} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shift;
