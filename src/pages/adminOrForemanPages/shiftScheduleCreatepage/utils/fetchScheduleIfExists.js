import { sheduleService } from '../../../../service/shceduleService';
import { shifts } from '../data/data';
export const fetchScheduleIfExists = async (shedule) => {
  //when i fetch schedule i must check if workplace is 12 hours shift
  //and overrite schedule
  // its not posible are user assingned to third shift if shift for concrete workplace dosnt exists
  // i need to map over schedule by shifts ands it shold work
  //but must rember schedule is not a list but objeect with 3 prop firs, second and third shift
  // need to change
  let modifidedSchedule;
  // shift i constant list where types correspond name of the shift firstShift etc...
  modifidedSchedule = shifts.map((shift) => {
    return {
      [shift.type]: shedule[shift.type].map((shift) => {
        return { workplace: shift.workplace, is12HoursShift: shift.is12HoursShift, users: [] };
      }),
    };
    // return { [shift.type]: { workplace: shedule[shift.type].workplace, is12HoursShift: shedule[shift.type].is12HoursShift } };
  });
  const shiftsObject = modifidedSchedule.reduce((acc, shift) => {
    const shiftType = Object.keys(shift)[0]; // Assuming there's only one key in each shift object
    acc[shiftType] = shift[shiftType];
    return acc;
  }, {});
  console.log(shiftsObject);
  return shiftsObject;
};
