import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { handleChangeInput } from '../utils/handleChangeInput';
import { handleChangeImage } from '../utils/handleChangeImage';
import { handleSubmit } from '../utils/handleSubmit';

const AddIfnfoForm = () => {
  const [file, setFile] = useState();
  const [info, setInfo] = useState();
  const queryClient = useQueryClient();

  return (
    <div className="add-info-form-container">
      <form onSubmit={(e) => handleSubmit(e, file, info, queryClient)}>
        <div className="input-box">
          <textarea className="text-input" onChange={(e) => handleChangeInput(e, setInfo)} type="text" name="info" id="info" />
        </div>
        <div className="input-box">
          <label className="file-button btn-primary" htmlFor="photo">
            Dodaj zdjęcie
          </label>
          <input id="photo" type="file" accept="image/*" onChange={(e) => handleChangeImage(e, setFile)} />
        </div>
        <div className="input-box-button">
          <input className="button btn-primary" type="submit" value="Opublikuj" />
        </div>
      </form>
    </div>
  );
};

export default AddIfnfoForm;
