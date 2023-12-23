import React from 'react';

const SelectWeekForm = ({ setWeek, week }) => {
  const handleSelectWeek = (e) => {
    setWeek(e.target.value);
  };
  return (
    <form action="">
      <div className="select-week-input-box">
        <label htmlFor="">Ten tydzień</label>
        <input onClick={handleSelectWeek} type="checkbox" value="current" checked={week === 'current' ? true : false} />
      </div>
      <div className="select-week-input-box">
        <label htmlFor="">Następny tydzień</label>
        <input onClick={handleSelectWeek} type="checkbox" value="next" checked={week === 'next' ? true : false} />
      </div>
    </form>
  );
};

export default SelectWeekForm;
