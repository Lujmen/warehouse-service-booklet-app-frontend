const shiftScheduleService = {
  createSchedule: async (schedule) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `schedule/createOrUpdate`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(schedule),
      });
      if (response.ok) {
        return 'succes';
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  isExists: async () => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + 'schedule/isExists', {
        method: 'GET',
        credintials: 'include',
      });
      // if dosnt exists return false
      if (response.ok) {
        const data = await response.json();
        if (data) {
          console.log([data]);

          return data;
        }
        return data;
      }
    } catch (error) {}
  },
};
export default shiftScheduleService;
