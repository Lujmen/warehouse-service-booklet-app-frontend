const userService = {
  // its return sensivite data
  // TODO: chenge backend
  getActive: async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'user/getAllActiveUsers', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        console.log('przeskadza mi to w kurwe pierdolone stukanie');
        return data;
      } else {
        console.log('res no ok');
        console.log(data.message);
        return { error: data.message };
      }
    } catch (error) {
      return { error: 'server error' };
    }
  },
  // // its return sensivite data
  getAllPostedOnWorkplace: async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'user/getAllPostedUsers', {
        method: 'get',
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        return data;
      } else {
        console.log('res is no ok');
        return { error: data.message };
      }
    } catch (error) {
      console.log('error from catch');
      console.log('server error');
      return { error: 'server error' };
    }
  },
  //HIGHER ROLE THAN USER **********************
  //work at beckend i should add return statment if try kick out not posted user
  kickOutFromWorkplace: async (userId) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `/user/kickOutUserFromWorkplace`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userId }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        return data;
      } else {
        console.log('res is no ok');
        return { error: data.message };
      }
    } catch (error) {
      console.log('error from catch');
      return { error: 'server error' };
    }
  },
  register: async (user) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'user/registerUser', {
        method: 'POST',
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
        return { error: data.message };
      }
    } catch (error) {
      console.log('error from catch');
      return { error: 'server error' };
    }
  },
};
export default userService;
