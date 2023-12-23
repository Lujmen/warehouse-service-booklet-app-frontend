const authService = {
  // working and implement
  login: async (user) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        return data;
      } else {
        console.log('res is no ok');

        throw { message: data.message };
      }
    } catch (error) {
      console.log('server error');
      console.log(error);
      throw error;
    }
  },
  // working and implement
  logout: async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'auth/logout', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        return data;
      } else {
        console.log('res is no ok');
        throw data.message;
      }
    } catch (error) {
      console.log('error from catch');
      console.log(error);
      return 'server error';
    }
  },
  //working and implement
  checkSession: async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'auth/checkIfLogged', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        return data;
      } else {
        console.log('res is no ok');
        throw data;
      }
    } catch (error) {
      console.log('error from catch');
      console.log(error);
      throw error;
    }
  },
};
export default authService;
