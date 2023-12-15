import React from 'react';
import Workplace from './workplace';

const Shift = (props) => {
  const { shift, schedule } = props;
  console.log(shift);
  return (
    <div>
      <h1>{shift}</h1>
      <div>
        {schedule[shift].map((scheduleShift) => (
          <Workplace workplace={scheduleShift} />
        ))}
        <button onClick={() => console.log(schedule[shift])}>schedule</button>
      </div>
    </div>
  );
};

export default Shift;
