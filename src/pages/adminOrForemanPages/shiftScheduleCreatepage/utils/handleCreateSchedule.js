import shiftScheduleService from '../../../../service/shiftScheduleService';

const handleCreateSchedule = (e, schedule) => {
  e.preventDefault();
  shiftScheduleService.createSchedule(schedule);
};
export { handleCreateSchedule };
