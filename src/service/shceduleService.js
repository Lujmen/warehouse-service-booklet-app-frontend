export const sheduleService = {
  async createShedule(shedule) {
    try {
      const response = fetch('http://localhost:3050/api/schedule/createOrUpdate', {
        method: 'post',

        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shedule),
      });
      if (response.ok) {
        console.log('working fine');
        const data = await response.json();
        console.log(data);
      } else {
        console.log('some troubles');

        console.log(await response);
      }
    } catch (error) {
      console.log(error);
    }
  },
  async getIfExists() {
    try {
      const response = await fetch('http://localhost:3050/api/schedule/get', {
        method: 'get',
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
