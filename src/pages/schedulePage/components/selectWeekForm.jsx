import React from 'react';

const SelectWeekForm = (props) => {
  const { isNext, setIsNext } = props;
  return (
    <form className="selectWeekForm" action="">
      <div className="inputFormContainer">
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
      <div className="inputFormContainer">
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
