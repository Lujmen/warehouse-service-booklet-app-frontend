const loginService = {
  login: async (data) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'auth/login', {
        method: 'POST',
        // Fix the typo here
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return response.json(); // Make sure to return the result
      } else {
        // Check the response and extract the error message if available
        const errorResponse = await response.json();
        console.log(errorResponse);
        throw new Error(errorResponse.message || 'Wrong credentials');
      }
    } catch (err) {
      throw err;
    }
  },
  logout: async () => {
    try {
      await fetch(process.env.REACT_APP_BASE_API_URL + 'auth/logout', {
        method: 'GET',
        credentials: 'include',
      }).then((res) => {
        if (res.ok) {
          document.cookie = 'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          return res.json();
        } else {
          throw new Error(res);
        }
      });
    } catch (error) {
      throw error;
    }
  },
  checkSession: async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'auth/checkIfLogged', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('No one was logged in');
      }
    } catch (error) {
      throw new Error('Error during session check');
    }
  },
};

export default loginService;
