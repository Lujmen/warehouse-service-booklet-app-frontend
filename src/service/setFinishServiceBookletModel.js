const setFinishServiceBookletModel = async (id) => {
  const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'serviceBooklet/leaveFromWorkplace', {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ serviceBookletEntryId: id }),
  });
  if (response.ok) {
    console.log('zmieniono');
  } else {
    console.log('cos poszlo nie tak');
  }
};
export default setFinishServiceBookletModel;
