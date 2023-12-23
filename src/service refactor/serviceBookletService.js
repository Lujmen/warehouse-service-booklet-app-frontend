const serviceBookletService = {
  getLastAddedServiceBookletEntryByUserId: async (userId) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'serviceBooklet/getLatestServiceBookletEntryByUserId', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        console.log(data);
        return data;
      } else {
        console.log('res is no ok');
        console.log(data);
        throw data;
      }
    } catch (error) {
      console.log('error from catch');
      console.log(error);
      return error;
    }
  },
  addEntry: async (model) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'serviceBooklet/serviceBookletEntry', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(model),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        console.log(data);
        return data;
      } else {
        console.log('res is no ok');
        console.log(data);
        throw data;
      }
    } catch (error) {
      console.log('error from catch');
      console.log(error);
      throw error;
    }
  },
};
export default serviceBookletService;
