const infoService = {
  // workinkg and implement
  getAll: async (page) => {
    try {
      const result = await fetch(process.env.REACT_APP_BASE_API_URL + `info/getAll?page=${page}`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await result.json();
      if (result.ok) {
        console.log('res is ok');
        return data;
      } else {
        console.log('res is no ok');
        throw data;
      }
    } catch (error) {
      console.log('error from catch');
      console.log(error);
      return error;
    }
  },
  // working and implement
  post: async (info) => {
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
        console.log('res is ok');
        return data;
      } else {
        console.log('res is no ok');
        console.log(data);
        throw data;
      }
    } catch (error) {
      console.log('error in catch');
      console.log(error);
      return error;
      // or throw
    }
  },
  // working and implement
  getImage: async (imageId) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `info/getImage?imageId=${imageId}`, {
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
        console.log(await data);
        throw data;
      }
    } catch (error) {
      console.log('error from catch');
      console.log(error);
      return error;
    }
  },
  //workinkg and implement
  deleteInfo: async (infoId) => {
    console.log('wtf?');
    try {
      console.log('wtf x 2');
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `info/deleteById?infoId=${infoId}`, {
        method: 'delete',
        credentials: 'include',
      });
      console.log(response);
      const data = await response.json();
      if (response.ok) {
        console.log('res is ok');
        console.log(data);
        return data;
      } else {
        console.log('res is no ok');
        throw data;
      }
    } catch (error) {
      console.log('error from catch');
      console.log(error);
      return error;
    }
  },
};
export default infoService;
