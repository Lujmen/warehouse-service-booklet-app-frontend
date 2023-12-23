import { sheduleService } from '../../../../service/shceduleService';
import { initialSchedule } from '../data/data';

export const createScheduleFormUSerList = (users, shcedule, week) => {
  let schedule = JSON.parse(JSON.stringify(shcedule));
  //   create new list for users whose assigned to workplace
  const dataFormUsers = users.map((user) => {
    const match = user.columnId.match(/([a-zA-Z]+)(firstShift|secondShift|thirdShift)(.*)/);
    if (match) {
      const workplace = match[1];
      const shift = match[2];
      return { workplace, shift, username: user.username, id: user._id, is12HoursShift: user.is12HoursShift };
    } else {
      return { workplace: '', shift: '', username: user.username, id: user._id };
    }
  });
  console.log(dataFormUsers);
  //   crete new shedule
  dataFormUsers.map((user) => {
    if (user.shift && user.workplace) {
      console.log(user);
      const workplaceIndex = schedule[user.shift].findIndex((shift) => shift.workplace === user.workplace);
      schedule[user.shift][workplaceIndex].users.push({ username: user.username, id: user.id, is12HoursShift: user.is12HoursShift });
    }
  });
  console.log(schedule);

  //send shcedule dataa to backend
  sheduleService.createShedule(schedule, week);
};
