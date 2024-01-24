// data , sizeOfPage, amount difference of length to pipe alignment 1 side, amount difference of length to pipe alignment 2 side, time of pipe chamfering
import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import handleChangeCharmferingForm from '../utils/handleChangeCharmferinfForm';
import handleCharmferingFormSubmit from '../utils/handleCharmferingFormSubmit';
import checkIsSubmitEnabled from '../utils/checkIsSubmitEnabled';
import { logDOM } from '@testing-library/react';

const CharmferingForm = () => {
  const queryClient = useQueryClient();
  const [showSuccesStatus, setSuccesStatus] = useState({ id: 1 });
  const [formState, setFormState] = useState({ differenceFromPingink: '', diffrentFromQC: '', timeOfChamfering: '' });
  const [isError, setError] = useState();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const errorcheck = () => {
    console.log(isError);
  };
  // should export to utils
  const setSuccesHandler = () => {
    setSuccesStatus({ message: 'added' });

    setTimeout(function () {
      setSuccesStatus('');

      console.log('State changed to', showSuccesStatus);
    }, 1500);

    console.log('wtf from now1');
    setSuccesStatus({ message: 'pomyslnie dodano' });
    console.log('handle succes function: ' + showSuccesStatus.message);
    console.log('is this print from here');
    console.log(showSuccesStatus.message);
  };

  const handleSubmit = async (e) => {
    console.log('is this in range ?');
    await handleCharmferingFormSubmit(formState, setError, setIsSubmiting, e, setFormState, setSuccesHandler)
      .then(() => queryClient.invalidateQueries(['charmferingList']))
      .catch((err) => {
        {
          console.log(err);
          setError('error message');
        }
      });
    console.log('is this finished ?');
  };
  return (
    <div className="chamfering-form-container">
      {/* dropdown to choose pipe */}
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="differenceFromPingink">Ilość mm różnicy długości do wyrownania 1 strona (od strony piankowania)</label>
          <input
            className="text-input"
            id="differenceFromPingink"
            onChange={(e) => handleChangeCharmferingForm(e, formState, setFormState)}
            value={formState.differenceFromPingink}
            type="number"
          />
        </div>
        <div className="input-box">
          <label htmlFor="diffrentFromQC">Ilość mm różnicy długości do wyrownania 2 strona (od strony qc)</label>
          <input
            className="text-input"
            id="diffrentFromQC"
            onChange={(e) => handleChangeCharmferingForm(e, formState, setFormState)}
            value={formState.diffrentFromQC}
            type="number"
          />
        </div>
        <div className="input-box">
          <label htmlFor="timeOfChamfering">czas fazowania rur</label>
          <input
            className="text-input"
            id="timeOfChamfering"
            onChange={(e) => handleChangeCharmferingForm(e, formState, setFormState)}
            value={formState.timeOfChamfering}
            type="number"
          />
        </div>
        <div className="input-box">
          <input
            disabled={!checkIsSubmitEnabled(formState) || isSubmiting}
            className="btn-primary button submit-button-chamfering"
            type="submit"
            value="Dodaj"
          />
        </div>
        <div className="error-box" style={{ color: 'red' }}>
          {isError && isError}
        </div>
      </form>
    </div>
  );
};

export default CharmferingForm;
