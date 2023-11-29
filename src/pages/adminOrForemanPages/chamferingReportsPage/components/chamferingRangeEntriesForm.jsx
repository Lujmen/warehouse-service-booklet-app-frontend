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
    <div className="chamfering-repotrs-form">
      <h1>Wybierza zakres dat</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('form submitting');
        }}
      >
        <div>
          <label htmlFor="startDate">Od: </label>
          <input name="startDate" type="date" onChange={handelStartDate} value={formState.startDate} />
        </div>
        <div>
          <label htmlFor="endDate">Do: </label>
          <input name="endDate" type="date" onChange={handleEndDate} value={formState.endDate} disabled={endDateBlocked} />
        </div>
        <div>
          <input className="submit-button" type="submit" name="Pokaz wpisy" value="wyszukaj" onClick={handleSubmitList} disabled={submitBlocked} />
        </div>
        <div>
          <input className="submit-button" type="submit" value="Pokaz czas" onClick={handleSubmitTime} disabled={submitBlocked} />
        </div>
      </form>
      {selectError && <p>{selectError}</p>}
    </div>
  );
};

export default ChamferingRangeEntriesForm;
