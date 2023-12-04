const postInfo = async (info) => {
  try {
    const response = await fetch(process.env.REACT_APP_BASE_API_URL + `info/add`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(info),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('success');
    } else {
      console.log('something went wrong');
      console.log(data);
    }
  } catch (error) {
    throw ('Error parsing JSON:', error);
  }
};
export default postInfo;
