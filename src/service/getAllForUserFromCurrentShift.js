const getAllForUserFromCurrentShift = async () => {
  const result = await fetch(process.env.REACT_APP_BASE_API_URL + 'chamfering/getAllForUserFromCurrentShift', {
    method: 'get',
    credentials: 'include',
  });
  if (result.ok) {
    const response = await result.json();
    return await response;
  } else {
    const error = await result.json();
    throw error;
  }
};
export default getAllForUserFromCurrentShift;
