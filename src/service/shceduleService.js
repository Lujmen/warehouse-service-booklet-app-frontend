export const sheduleService = {
  async createShedule(shedule, week) {
    try {
      const response = fetch(`http://localhost:3050/api/schedule/createOrUpdate?week=${week}`, {
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
  // return false if dont find
  async getIfExists(week) {
    console.log(week);
    try {
      const response = await fetch(`http://localhost:3050/api/schedule/get?week=${week}`, {
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
