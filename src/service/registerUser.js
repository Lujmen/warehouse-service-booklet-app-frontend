export const registerUser = async (user) => {
  try {
    const result = await fetch(process.env.REACT_APP_BASE_API_URL + 'user/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await result.json();
    if (result.ok) {
      console.log(data);
      return;
    } else {
      console.log('if request no ok');
      throw data;
    }
  } catch (error) {
    console.log(error.message);
    return await error;
  }
};
