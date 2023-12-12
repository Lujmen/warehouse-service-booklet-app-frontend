const userService = {
  getAllUsers: async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `user/getAll`, {
        method: 'get',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        return await data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
export default userService;
