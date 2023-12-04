const getInfos = async () => {
  const result = await fetch(process.env.REACT_APP_BASE_API_URL + `info/getAll`, {
    method: 'GET',
    credentials: 'include',
  });
  const data = await result.json();
  if (result.ok) {
    return await data;
  } else {
    throw new Error('something went wrong');
  }
};
export default getInfos;
