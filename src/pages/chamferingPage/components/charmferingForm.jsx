// data , sizeOfPage, amount difference of length to pipe alignment 1 side, amount difference of length to pipe alignment 2 side, time of pipe chamfering
import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import handleChangeCharmferingForm from '../utils/handleChangeCharmferinfForm';
import handleCharmferingFormSubmit from '../utils/handleCharmferingFormSubmit';
import checkIsSubmitEnabled from '../utils/checkIsSubmitEnabled';

const CharmferingForm = () => {
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({ differenceFromPingink: '', diffrentFromQC: '', timeOfChamfering: '' });
  const [isError, setError] = useState();
  const [isSucces, setSucces] = useState(false);

  const handleSubmit = async (e) => {
    await handleCharmferingFormSubmit(formState, setError, setSucces, e, setFormState)
      .then(() => queryClient.invalidateQueries(['charmferingList']))
      .catch((err) => {});
  };
  const handleChange = (event) => {
    handleChangeCharmferingForm(event, formState, setFormState);
  };

  return (
    <div className="chamfering-form-container">
      {/* dropdown to choose pipe */}
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <label htmlFor="differenceFromPingink">Ilość mm różnicy długości do wyrownania 1 strona (od strony piankowania)</label>
          <input id="differenceFromPingink" onChange={handleChange} value={formState.differenceFromPingink} type="number" />
        </div>
        <div className="input-box">
          <label htmlFor="diffrentFromQC">Ilość mm różnicy długości do wyrownania 2 strona (od strony qc)</label>
          <input id="diffrentFromQC" onChange={handleChange} value={formState.diffrentFromQC} type="number" />
        </div>
        <div className="input-box">
          <label htmlFor="timeOfChamfering">czas fazowania rur</label>
          <input id="timeOfChamfering" onChange={handleChange} value={formState.timeOfChamfering} type="number" />
        </div>
        <div className="input-box">
          <input disabled={!checkIsSubmitEnabled(formState)} className="submit-button" type="submit" value="Dodaj" />
        </div>
        <div className="error-box">{isError && isError}</div>
      </form>
    </div>
  );
};

export default CharmferingForm;
