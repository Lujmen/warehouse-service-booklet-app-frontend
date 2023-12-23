const getInfos = async (page) => {
  console.log('invoking that function');
  const result = await fetch(process.env.REACT_APP_BASE_API_URL + `info/getAll?page=${page}`, {
    method: 'GET',
    credentials: 'include',
  });
  const data = await result.json();
  if (result.ok) {
    console.log(data);
    return await data;
  } else {
    throw new Error('something went wrong');
  }
};
export default getInfos;
