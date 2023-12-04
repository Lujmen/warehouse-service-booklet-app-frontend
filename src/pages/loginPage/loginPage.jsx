import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { handleInputChange } from './utils/handleInputChange';
import { handleSubmit } from './utils/handleSubmit';
import { useAuth } from '../../context/authProvider';
import { workplaceOptions } from './utils/workplaceDropDownList';
import { forkliModelOptions } from './utils/forkliftWorkplaceModels';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';

const LoginPage = () => {
  const { data: forkliftModels, isLoading } = useQuery({ querKey: ['forkliftModels'], queryFn: forkliModelOptions });
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loginFormError, setLoginFormError] = useState({ message: '' });
  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="login-form-container bg-primary-100">
      <h1 className="fs-primary-heading">Logowanie</h1>
      <div>
        <form onSubmit={(e) => handleSubmit(e, formData, handleLogin, setLoginFormError, navigate)} action="">
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input className="text-input" onChange={(e) => handleInputChange(formData, e, setFormData)} id="username" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Login</label>
            <input className="text-input" onChange={(e) => handleInputChange(formData, e, setFormData)} id="password" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Wybierz stanowisko:</label>
            <select className="text-input" id="workplace" onChange={(e) => handleInputChange(formData, e, setFormData)}>
              {workplaceOptions.map((option) => (
                <option className="text-input" key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {formData.workplace === 'forklift' && !isLoading && (
            <div className="input-container">
              <label htmlFor="">Wybierz stanowisko:</label>
              <select className="text-input" id="workplaceModel" onChange={(e) => handleInputChange(formData, e, setFormData)}>
                {forkliftModels.map((option) => (
                  <option className="text-input" key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="input-container">
            <input className="btn-primary" type="submit" name="Login" value="Zaloguj" />
          </div>
        </form>
      </div>
      <div className="error-container"> {loginFormError.message && <p>{loginFormError.message}</p>}</div>
    </div>
  );
};

export default LoginPage;
