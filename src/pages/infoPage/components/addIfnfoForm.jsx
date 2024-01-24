import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { handleChangeInput } from '../utils/handleChangeInput';
import { handleChangeImage } from '../utils/handleChangeImage';
import { handleSubmit } from '../utils/handleSubmit';
import { checkIsSubmitFormEnabled } from '../utils/checkIsubmitFormEnabled';

const AddIfnfoForm = () => {
  const [file, setFile] = useState();
  const [info, setInfo] = useState();
  const [error, setError] = useState();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const queryClient = useQueryClient();

  return (
    <div className="add-info-form-container">
      <form onSubmit={(e) => handleSubmit(e, file, info, queryClient, setIsSubmiting, setError)}>
        <div className="input-box">
          <textarea className="text-input" onChange={(e) => handleChangeInput(e, setInfo)} type="text" name="info" id="info" />
        </div>
        <div className="input-box">
          <label className="add-photo" htmlFor="photo">
            Dodaj zdjęcie
          </label>
          <input id="photo" type="file" accept="image/*" onChange={(e) => handleChangeImage(e, setFile, setError)} />
        </div>
        <div className="input-box-button">
          <input disabled={isSubmiting || !checkIsSubmitFormEnabled(info)} className="button btn-primary" type="submit" value="Opublikuj" />
        </div>
      </form>
      <div className="error-box">{error && <p>{error}</p>}</div>
    </div>
  );
};

export default AddIfnfoForm;
