import shiftScheduleService from '../../../../service/shiftScheduleService';

const handleCreateSchedule = (e, schedule, isNext) => {
  e.preventDefault();
  shiftScheduleService.createSchedule(schedule, isNext);
};
export { handleCreateSchedule };
