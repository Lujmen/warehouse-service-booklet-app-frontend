const getCurrentColor = async () => {
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'info/getColor', {
    method: 'get',
    credentials: 'include',
  });
  const data = response.json();
  if (response.ok) {
    return data;
  } else {
    throw data;
  }
};
export default getCurrentColor;
