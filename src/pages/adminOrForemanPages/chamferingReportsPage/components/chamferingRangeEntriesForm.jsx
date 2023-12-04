import React, { useState } from 'react';
import { handleEndDateChange, handelStartDateChange } from '../utils/hanldeChangeRangeEntriesForm';

const ChamferingRangeEntriesForm = (props) => {
  const { handleSubmit } = props;
  const [formState, setFormState] = useState({ startDate: '', endDate: '' });
  const [endDateBlocked, setEndDateBlocked] = useState(true);
  const [selectError, setSelectError] = useState(false);
  const [submitBlocked, setSubmitBlocked] = useState(true);

  const handleEndDate = (e) => {
    handleEndDateChange(e, formState, setFormState, setSelectError, setSubmitBlocked);
  };
  const handelStartDate = (e) => {
    handelStartDateChange(e, formState, setFormState, setSelectError, setEndDateBlocked);
  };
  const handleSubmitTime = () => {
    handleSubmit({ ...formState, key: 'time' });
  };
  const handleSubmitList = () => {
    handleSubmit({ ...formState, key: 'list' });
  };

  return (
    <div className="chamfering-repotrs-form-container">
      <h1 className="fs-secondary-heading">Wybierza zakres dat</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('form submitting');
        }}
      >
        <div className="input-box">
          <label htmlFor="startDate">Od: </label>
          <input className="text-input" name="startDate" type="date" onChange={handelStartDate} value={formState.startDate} />
        </div>
        <div className="input-box">
          <label htmlFor="endDate">Do: </label>
          <input className="text-input" name="endDate" type="date" onChange={handleEndDate} value={formState.endDate} disabled={endDateBlocked} />
        </div>
        <div className="input-box">
          <input className="btn-primary" type="submit" name="Pokaz wpisy" value="wyszukaj" onClick={handleSubmitList} disabled={submitBlocked} />
        </div>
        <div className="input-box">
          <input className="btn-primary" type="submit" value="Pokaz czas" onClick={handleSubmitTime} disabled={submitBlocked} />
        </div>
      </form>
      <div className="error-box">{selectError && <p>{selectError}</p>}</div>
    </div>
  );
};

export default ChamferingRangeEntriesForm;
