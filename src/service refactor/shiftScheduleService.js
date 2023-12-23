const shiftScheduleService = {
  createSchedule: async (schedule, isNext) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `schedule/createOrUpdate?next=${isNext}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(schedule),
      });
      const data = await response.json();
      if (response.ok) {
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
  isExists: async (isNext) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `schedule/get?next=${isNext}`, {
        method: 'GET',
        credintials: 'include',
      });
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
export default shiftScheduleService;
