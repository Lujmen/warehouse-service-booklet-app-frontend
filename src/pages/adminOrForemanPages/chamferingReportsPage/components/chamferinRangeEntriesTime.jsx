import React from 'react';

const ChamferinRangeEntriesTime = (props) => {
  const { hours, minutes } = props.time;
  return (
    <div>
      <div>Godziny: {hours}</div>
      <div>minuty: {minutes}</div>
    </div>
  );
};

export default ChamferinRangeEntriesTime;
