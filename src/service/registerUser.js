export const registerUser = async (user) => {
  try {
    const result = await fetch(process.env.REACT_APP_BASE_API_URL + 'user/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (result.ok) {
      return;
    } else {
      throw result.json();
    }
  } catch (error) {
    throw await error;
  }
};
