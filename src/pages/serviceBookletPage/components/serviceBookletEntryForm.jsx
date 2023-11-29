import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { handleChange } from '../utils/handleChangeForm';
import { handeSubmitForm } from '../utils/handleSubmitForm';
import { useAuth } from '../../../context/authProvider';
import { useQueryClient } from '@tanstack/react-query';
import { QueryCache } from '@tanstack/react-query';
import { ifSbumitFormEnabled, isSubmitFormEnabled } from '../utils/isSubmitFormEnabled';

const ServiceBookletEntryForm = () => {
  const queryClient = useQueryClient();
  const { workplaceDetails } = useAuth();

  const [formState, setFormState] = useState({ status: '', issues: '', shift: '', isIssue: '' });
  const [isError, setError] = useState();
  const [isIssue, setIsIssue] = useState(false);
  const location = useLocation();

  const check = async () => {
    const additionalData = {
      details:
        location.state && location.state.gantryType !== null
          ? { entryType: 'gantry', model: location.state.gantryType }
          : { entryType: 'forklift', model: workplaceDetails.workplaceModel },
    };
    try {
      setError('');
      await handeSubmitForm(formState, additionalData.details).then(() => {
        queryClient.invalidateQueries({ queryKey: ['lastEntry'] });
      });
    } catch (error) {
      console.log('how to cathc there');
      setError(error);
    }
  };
  const handelChange = (e) => {
    handleChange(e, formState, setFormState);
  };
  return (
    <div className="form-container">
      <h1>{location.state && location.state.gantryType !== null ? location.state.gantryType : workplaceDetails.workplaceModel}</h1>
      <div>
        <form>
          <div className="input-box">
            <label htmlFor="status">Status</label>
            <input disabled={formState.isIssue} onChange={handelChange} id="status" type="checkbox" />
          </div>
          <div className="input-box">
            <label htmlFor="isIssue">Issuses</label>
            <input disabled={formState.status} onChange={handelChange} id="isIssue" type="checkbox" />
          </div>
          {formState.isIssue && (
            <div className="input-box">
              <label htmlFor="issues">Issues </label>
              <textarea onChange={handelChange} id="issues" type="text" />
            </div>
          )}
          <div className="input-box">
            <input disabled={isSubmitFormEnabled(formState)} onClick={check} className="button" type="button" value="Dodaj" />
          </div>
        </form>
      </div>
      <div>{isError && <p>{isError}</p>}</div>
    </div>
  );
};

export default ServiceBookletEntryForm;
