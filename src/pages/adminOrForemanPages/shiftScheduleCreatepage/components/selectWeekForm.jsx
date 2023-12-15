import React from 'react';

const SelectWeekForm = (props) => {
  const { isForNextWeek, setIsForNextWeek } = props;
  return (
    <form action="">
      <div>
        <label htmlFor="">Bierzacy tydzien</label>
        <input
          onChange={(e) => {
            if (e.target.checked) {
              setIsForNextWeek(false);
            }
          }}
          checked={isForNextWeek === false}
          type="checkbox"
        />
      </div>
      <div>
        <label htmlFor="">Ptzyszly tydzien</label>
        <input
          onChange={(e) => {
            if (e.target.checked) {
              setIsForNextWeek(true);
            }
          }}
          checked={isForNextWeek === true}
          type="checkbox"
        />
      </div>
    </form>
  );
};

export default SelectWeekForm;
