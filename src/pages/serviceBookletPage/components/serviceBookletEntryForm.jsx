import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { handleChange } from '../utils/handleChangeForm';
import { handeSubmitForm } from '../utils/handleSubmitForm';
import { useAuth } from '../../../context/authProvider';
import { useQueryClient } from '@tanstack/react-query';
import { isSubmitFormEnabled } from '../utils/isSubmitFormEnabled';

const ServiceBookletEntryForm = () => {
  const queryClient = useQueryClient();
  const { workplaceDetails } = useAuth();

  const [formState, setFormState] = useState({ status: '', issues: '', shift: '', isIssue: '' });
  const [isError, setError] = useState();
  const [isSubmiting, setIsSubmiting] = useState();
  const location = useLocation();

  const handleSubmit = async () => {
    const additionalData = {
      details:
        location.state && location.state.gantryType !== null
          ? { entryType: 'gantry', model: location.state.gantryType }
          : { entryType: 'forklift', model: workplaceDetails.workplaceModel },
    };
    try {
      setError('');
      await handeSubmitForm(formState, additionalData.details, setIsSubmiting).then(() => {
        queryClient.invalidateQueries({ queryKey: ['lastEntry'] });
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className="service-booklet-entry-form">
      <h1>{location.state && location.state.gantryType !== null ? location.state.gantryType : workplaceDetails.workplaceModel}</h1>
      <div>
        <form>
          <div className="input-box">
            <label htmlFor="status">Status</label>
            <input disabled={formState.isIssue} onChange={(e) => handleChange(e, formState, setFormState)} id="status" type="checkbox" />
          </div>
          <div className="input-box">
            <label htmlFor="isIssue">Issuses</label>
            <input disabled={formState.status} onChange={(e) => handleChange(e, formState, setFormState)} id="isIssue" type="checkbox" />
          </div>
          {formState.isIssue && (
            <div className="input-box-issues">
              <label htmlFor="issues">Issues</label>
              <textarea className="text-input" onChange={(e) => handleChange(e, formState, setFormState)} id="issues" type="text" />
            </div>
          )}
          <div className="button-input-box">
            <input
              disabled={isSubmitFormEnabled(formState) || isSubmiting}
              onClick={handleSubmit}
              className="btn-primary"
              type="button"
              value="Dodaj"
            />
          </div>
        </form>
      </div>
      <div className="error-box">{isError && <p>{isError}</p>}</div>
    </div>
  );
};

export default ServiceBookletEntryForm;
