import React from 'react';

const Select12HoursShiftForm = ({ set12HoursShift, is12HoursShift, submitFunction }) => {
  return (
    <>
      <div className="select-shift-header">
        <p>12 godzinna</p>
        <p>zmiana</p>
      </div>
      <div>
        <div className="select-shift-input-box">
          <label htmlFor="">small cart</label>
          <input
            onChange={() => set12HoursShift((prev) => ({ ...prev, smallCart: !prev.smallCart }))}
            type="checkbox"
            checked={is12HoursShift.smallCart}
            value={is12HoursShift.smallCart}
          />
        </div>
        <div className="select-shift-input-box">
          <label htmlFor="">crane</label>
          <input
            onChange={() => set12HoursShift((prev) => ({ ...prev, crane: !prev.crane }))}
            type="checkbox"
            checked={is12HoursShift.crane}
            value={is12HoursShift.crane}
          />
        </div>
        <div className="select-shift-input-box">
          <label htmlFor="">forklift</label>
          <input
            onChange={() => set12HoursShift((prev) => ({ ...prev, forklift: !prev.forklift }))}
            type="checkbox"
            checked={is12HoursShift.forklift}
            value={is12HoursShift.forklift}
          />
        </div>
      </div>
      <div className="button-container">
        <button className="btn-primary" onClick={submitFunction}>
          Zatwierdz
        </button>
      </div>
    </>
  );
};

export default Select12HoursShiftForm;
