import React from 'react';

const Select12HoursShiftForm = ({ set12HoursShift, is12HoursShift, submitFunction }) => {
  return (
    <div>
      <p>12 godzinna zmiana</p>
      <div style={{ display: 'flex' }}>
        <div>
          <label htmlFor="">small cart</label>
          <input
            onChange={() => set12HoursShift((prev) => ({ ...prev, smallCart: !prev.smallCart }))}
            type="checkbox"
            checked={is12HoursShift.smallCart}
            value={is12HoursShift.smallCart}
          />
        </div>
        <div>
          <label htmlFor="">crane</label>
          <input
            onChange={() => set12HoursShift((prev) => ({ ...prev, crane: !prev.crane }))}
            type="checkbox"
            checked={is12HoursShift.crane}
            value={is12HoursShift.crane}
          />
        </div>
        <div>
          <label htmlFor="">forklift</label>
          <input
            onChange={() => set12HoursShift((prev) => ({ ...prev, forklift: !prev.forklift }))}
            type="checkbox"
            checked={is12HoursShift.forklift}
            value={is12HoursShift.forklift}
          />
        </div>
      </div>
      <button onClick={submitFunction}>Zatwierdz</button>
    </div>
  );
};

export default Select12HoursShiftForm;
