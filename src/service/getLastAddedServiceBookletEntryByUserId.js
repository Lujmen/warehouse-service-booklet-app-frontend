export const getLastAddedServiceBookletEntryByUserId = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'serviceBooklet/getLatestServiceBookletEntryByUserId', {
      method: 'GET',
      credentials: 'include',
    });
    console.log('WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');

    if (!response.ok) {
      console.log(response);

      throw response.json();
    }
    return await response.json();
  } catch (error) {
    console.log(await error);
    throw await error;
  }
};
