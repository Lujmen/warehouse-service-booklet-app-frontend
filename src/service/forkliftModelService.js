const forkliftModelService = {
  getForkliftModels: async () => {
    console.log('is it invoke');
    const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'enums/getForkliftTypes', {
      method: 'GET',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Somthing went wrong');
        }
      })
      .catch((err) => {
        throw err;
      });
    return await response;
  },
};

export default forkliftModelService;
