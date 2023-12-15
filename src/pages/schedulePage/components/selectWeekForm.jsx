import React from 'react';

const SelectWeekForm = (props) => {
  const { isNext, setIsNext } = props;
  return (
    <form action="">
      <div>
        <label htmlFor="">Bierzacy tydzien</label>
        <input
          onChange={(e) => {
            if (e.target.checked) {
              setIsNext(false);
            }
          }}
          checked={isNext === false}
          type="checkbox"
        />
      </div>
      <div>
        <label htmlFor="">Ptzyszly tydzien</label>
        <input
          onChange={(e) => {
            if (e.target.checked) {
              setIsNext(true);
            }
          }}
          checked={isNext === true}
          type="checkbox"
        />
      </div>
    </form>
  );
};

export default SelectWeekForm;
