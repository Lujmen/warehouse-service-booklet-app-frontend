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

  const handleChange = (e) => {
    handleInputChange(formData, e, setFormData);
  };
  const handleFormSubmit = (e) => {
    handleSubmit(e, formData, handleLogin, setLoginFormError, navigate);
  };

  return (
    <div className="content-box">
      <h1>Logowanie</h1>
      <div>
        <form onSubmit={handleFormSubmit} action="">
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} id="username" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="password">Login</label>
            <input onChange={handleChange} id="password" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="">Wybierz stanowisko:</label>
            <select id="workplace" onChange={handleChange}>
              {workplaceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {formData.workplace === 'forklift' && !isLoading && (
            <div className="input-container">
              <label htmlFor="">Wybierz stanowisko:</label>
              <select id="workplaceModel" onChange={handleChange}>
                {forkliftModels.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="input-container">
            <input className="submit-button" type="submit" name="Login" value="Zaloguj" />
          </div>
        </form>
      </div>
      <div className="error-container"> {loginFormError.message && <p>{loginFormError.message}</p>}</div>
    </div>
  );
};

export default LoginPage;
