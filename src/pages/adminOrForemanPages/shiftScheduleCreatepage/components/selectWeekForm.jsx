import React from 'react';

const SelectWeekForm = () => {
  return (
    <form action="">
      <div className="select-week-input-box">
        <label htmlFor="">Ten tydzień</label>
        <input type="checkbox" />
      </div>
      <div className="select-week-input-box">
        <label htmlFor="">Następny tydzień</label>
        <input type="checkbox" />
      </div>
    </form>
  );
};

export default SelectWeekForm;
