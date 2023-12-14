import React, { useContext, useEffect, useState } from 'react';
import loginService from '../service/loginService';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [workplaceDetails, setWorkplaceDetailsState] = useState({ workplace: '', workplaceModel: '' });
  const [userDetails, setUserDetailsState] = useState({ username: '', id: '' });
  const [userRole, setUserRoleState] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log('update auth context');
    setLoading(true);
    loginService
      .checkSession()
      .then((data) => {
        const { user, workplace, workplaceModel } = data.isActive;
        const { authenticated, role, username } = data;

        if (data.isActive.workplaceModel) {
          setWorkplaceDetailsState({ workplace: workplace, workplaceModel: workplaceModel });
        } else {
          setWorkplaceDetailsState({ workplace: workplace });
        }
        setIsAuthenticated(authenticated);
        setUserDetailsState({ id: user, username: username });
        setUserRoleState(role);
      })
      .catch((error) => {
        localStorage.clear();
        console.log('error was here');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogin = async (data) => {
    console.log('handle login function');
    try {
      const response = await loginService.login(data);
      setIsAuthenticated(response.authenticated);
      setUserDetailsState({ id: response.activeStatus.user, username: response.username });
      setUserRoleState(response.role);
      if (response.activeStatus.workplaceModel) {
        setWorkplaceDetailsState({ workplace: response.activeStatus.workplace, workplaceModel: response.activeStatus.workplaceModel });
      } else {
        setWorkplaceDetailsState({ workplace: response.activeStatus.workplace });
      }
    } catch (error) {
      console.log('error was here ! ');
      throw error;
    }
  };

  const handleLogOut = async (navigate) => {
    console.log('handle logout finction');
    try {
      await loginService
        .logout()
        .then(() => {
          setIsAuthenticated('');
          setWorkplaceDetailsState({ workplace: '', workplaceModel: '' });
          setUserDetailsState('');
          setUserRoleState('');

          localStorage.clear();
        })
        .then(() => navigate('/'));
    } catch (error) {
      console.log(error);
      setIsAuthenticated('');
      setWorkplaceDetailsState({ workplace: '', workplaceModel: '' });
      setUserDetailsState('');
      setUserRoleState('');
      localStorage.clear();
      navigate('/');
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogOut, isAuthenticated, isLoading, workplaceDetails, userDetails, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
