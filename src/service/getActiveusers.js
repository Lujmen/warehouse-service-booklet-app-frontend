const getActiveUsers = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'user/getAllActiveUsers', {
      method: 'GET',
      credentials: 'include',
    });
    if (response.ok) {
      const result = await response.json();
      return await result;
    } else {
      throw response;
    }
  } catch (error) {
    throw error;
  }
};
export default getActiveUsers;
