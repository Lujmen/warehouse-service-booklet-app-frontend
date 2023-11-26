const GantryTypesService = {
  getGantryTypes: async () => {
    const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'enums/getGrantyTypes', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
    return response;
  },
};
export default GantryTypesService;
