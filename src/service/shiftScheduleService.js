const shiftScheduleService = {
  createSchedule: async (schedule) => {
    try {
      const response = await fetch(process.env.REACT_APP_BASE_API_URL + `test/check`, {
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
};
export default shiftScheduleService;
