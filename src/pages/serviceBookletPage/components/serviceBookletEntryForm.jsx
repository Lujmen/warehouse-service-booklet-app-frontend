import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { handleChange } from '../utils/handleChangeForm';
import { handeSubmitForm } from '../utils/handleSubmitForm';
import { useAuth } from '../../../context/authProvider';
import { useQueryClient } from '@tanstack/react-query';
import { QueryCache } from '@tanstack/react-query';

const ServiceBookletEntryForm = () => {
  const queryClient = useQueryClient();
  const { workplaceDetails } = useAuth();

  const [formState, setFormState] = useState({ status: '', issues: '', shift: '' });
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
    <div>
      <h1>{location.state && location.state.gantryType !== null ? location.state.gantryType : workplaceDetails.workplaceModel}</h1>
      <div>
        <form>
          <div>
            <label htmlFor="status">Status</label>
            <input disabled={formState.isIssue} onChange={handelChange} id="status" type="checkbox" />
          </div>
          <div>
            <label htmlFor="isIssue">Issuses</label>
            <input disabled={formState.status} onChange={handelChange} id="isIssue" type="checkbox" />
          </div>
          {formState.isIssue && (
            <div>
              <label htmlFor="issues">Issues </label>
              <textarea onChange={handelChange} id="issues" type="text" />
            </div>
          )}
        </form>
      </div>
      <button onClick={() => check()}>check</button>
      <div>{isError && <p>{isError}</p>}</div>
    </div>
  );
};

export default ServiceBookletEntryForm;
