const modelService = {
  // checked
  getForkliftTypes: async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'enums/getForkliftTypes', {
        method: 'GET',
      });
      console.log('is this invoke');
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return { error: data.message };
      }
    } catch (error) {
      console.log(error);
      return { error: 'error' };
    }
  },
  // checked
  getGantryTypes: async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'enums/getGrantyTypes', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res ok');
        return data;
      } else {
        console.log('something wrong with response');
        return { error: data.message };
      }
    } catch (error) {
      console.log(error);
      return { error: 'error' };
    }
  },
};

export default modelService;
