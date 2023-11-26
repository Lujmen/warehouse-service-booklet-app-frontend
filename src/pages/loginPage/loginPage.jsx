import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { handleInputChange } from './utils/handleInputChange';
import { handleSubmit } from './utils/handleSubmit';
import { useAuth } from '../../context/authProvider';
import { workplaceOptions } from './utils/workplaceDropDownList';
import { forkliModelOptions } from './utils/forkliftWorkplaceModels';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h1>Logowanie</h1>
      <div>
        <form onSubmit={handleFormSubmit} action="">
          <div>
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} id="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">Login</label>
            <input onChange={handleChange} id="password" type="text" />
          </div>
          <div>
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
            <div>
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
          <div>
            <input type="submit" name="Login" />
          </div>
        </form>
        {loginFormError.message && <p>{loginFormError.message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
