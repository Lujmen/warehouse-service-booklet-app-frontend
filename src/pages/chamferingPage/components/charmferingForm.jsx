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
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSubmit = async (e) => {
    await handleCharmferingFormSubmit(formState, setError, setIsSubmiting, e, setFormState)
      .then(() => queryClient.invalidateQueries(['charmferingList']))
      .catch((err) => {});
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
          <input disabled={!checkIsSubmitEnabled(formState) || isSubmiting} className="btn-primary button" type="submit" value="Dodaj" />
        </div>
        <div className="error-box">{isError && isError}</div>
      </form>
    </div>
  );
};

export default CharmferingForm;
