const addCharmferingEntry = async (data) => {
  const result = await fetch(process.env.REACT_APP_BASE_API_URL + 'chamfering/addByUser', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (result.ok) {
    const response = await result.json();
    return response;
  } else {
    const error = await result.json();
    throw error;
  }
};
export default addCharmferingEntry;
