const getCurrentColor = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'info/getColor', {
      method: 'get',
      credentials: 'include',
    });
    const data = await response.json();
    if (response.ok) {
      console.log('res is ok');
      return data;
    } else {
      console.log('res is no ok');
      throw data;
    }
  } catch (error) {
    console.log('error from catch');
    console.log(error);
    return error;
  }
};
export default getCurrentColor;
