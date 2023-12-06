import React, { useState } from 'react';
import { handleInputChange } from '../utils/handleInputChange';
import { handlesubmit } from '../utils/handlesubmit';
import { displayErrors } from '../utils/displaErrors';

const RegisterForm = () => {
  const [formState, setFormState] = useState({ username: '', password: '', eMail: '' });
  const [error, setError] = useState();
  const [isSubmiting, setIsSubmiting] = useState();

  return (
    <div className="register-form-container bg-primary-100">
      <h1 className="fs-primary-heading">RegisterUser</h1>
      <form onSubmit={(e) => handlesubmit(e, formState, setError, setIsSubmiting)}>
        <div className="input-container">
          <label htmlFor="">Username</label>
          <input className="text-input" id="username" onChange={(e) => handleInputChange(formState, e, setFormState)} type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="">Password</label>
          <input className="text-input" id="password" onChange={(e) => handleInputChange(formState, e, setFormState)} type="password" />
        </div>
        <div className="input-container ">
          <label htmlFor="">Email</label>
          <input className="text-input" id="eMail" onChange={(e) => handleInputChange(formState, e, setFormState)} type="email" />
        </div>
        <div className="input-container">
          <input className="button btn-primary" disabled={isSubmiting} type="submit" value="Zarejestruj" />
        </div>
      </form>
      <div>{Array.isArray(error) && error.length > 0 && displayErrors(error)}</div>
    </div>
  );
};

export default RegisterForm;
