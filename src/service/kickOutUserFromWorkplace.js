const kickOutUserFromWorkplace = async (userId) => {
  const result = await fetch(process.env.REACT_APP_BASE_API_URL + `/user/kickOutUserFromWorkplace`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: userId }),
  });
  const data = await result.json();
  if (result.ok) {
    return data;
  } else {
    throw data;
  }
};
export default kickOutUserFromWorkplace;
