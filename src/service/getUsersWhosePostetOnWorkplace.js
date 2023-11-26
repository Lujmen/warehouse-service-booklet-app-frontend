const getUsersWhosePostetOnWorkplace = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'user/getAllPostedUsers', {
      method: 'get',
      credentials: 'include',
    });
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const error = response.json();
      throw error.message;
    }
  } catch (error) {
    return error;
  }
};
export default getUsersWhosePostetOnWorkplace;
