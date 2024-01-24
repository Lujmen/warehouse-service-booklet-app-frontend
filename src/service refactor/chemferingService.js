const chamferingService = {
  // working and implement
  getAllFromCurrentShift: async (page) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `chamfering/getAllForUserFromCurrentShift?page=${page}`, {
        method: 'get',
        credentials: 'include',
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        return data;
      } else {
        console.log('res is no ok');
        return { error: data.message };
      }
    } catch (error) {
      console.log('error from catch');
      return { error: 'server error' };
    }
  },
  //working and implement
  getByDateRange: async (date) => {
    try {
      const { startDate, endDate, page = 1 } = date;
      const response = await fetch(
        process.env.REACT_APP_BASE_API_URL + `chamfering/getByDateRange?startDate=${startDate}&endDate=${endDate}&page=${page}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        return data;
      } else {
        console.log('res is no ok');
        return { error: data.message };
      }
    } catch (error) {
      console.log('error from catch');
      return { error: 'server error' };
    }
  },
  //working and implement
  calcTimeByDataRande: async (date) => {
    try {
      const { startDate, endDate } = date;
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `chamfering/getTimeFromDateRange?startDate=${startDate}&endDate=${endDate}`, {
        method: 'get',
        credentials: 'include',
        headers: {
          'Content-Type': 'appication/json',
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        console.log(data);
        return data;
      } else {
        console.log('res is no ok');
        return { error: data.message };
      }
    } catch (error) {
      console.log('error from catch');
      return 'server error';
    }
  },
  //working and implement
  addEntry: async (model) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'chamfering/addByUser', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(model),
      });
      console.log(await response);
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        return data;
      } else {
        console.log('is from here ? ');
        console.log('res is no ok');
        throw data;
      }
    } catch (error) {
      console.log('error from catch');
      console.log(error);
      throw error;
    }
  },
};
export default chamferingService;
