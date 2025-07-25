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
      if (response.ok) {
        return 'succes';
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  isExists: async (isNext) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `schedule/get?next=${isNext}`, {
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
