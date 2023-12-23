import { sheduleService } from '../../../../service/shceduleService';
import usersService from '../../../../service/userService';
import { shifts } from '../data/data';
import { fetchScheduleIfExists } from './fetchScheduleIfExists';

export const fetchUsers = async (setUsers, setLoading, setShcedule, set12HoursShift, week) => {
  setLoading(true);
  // i fetch all users and copare it with shedule if exists
  let users = await usersService.getAllUsers();
  users = users.map((user) => ({ ...user, columnId: 'unsigned', is12HoursShift: '' }));
  //here i need to use separatly function to get schedule
  //and extract users from it
  const shedule = await sheduleService.getIfExists(week);

  if (shedule) {
    shifts.map((shift) => {
      shedule[shift.type].map((workplace) => {
        workplace.users.map((userFromShcedule) => {
          let userIndex = users.findIndex((userFromList) => userFromList._id === userFromShcedule._id);
          if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], columnId: `${workplace.workplace}${shift.type}` };
          }
        });
      });
    });
  }
  setUsers(users);

  let scheduleToOverride = await fetchScheduleIfExists(shedule);
  setShcedule(scheduleToOverride);
  //change state of controll state is workplace 12hShift using set 12 Hour Shift which have workplaces
  // to check that i need only map over first or second shift
  scheduleToOverride.firstShift.map((workplace) => workplace.is12HoursShift && set12HoursShift((prev) => ({ ...prev, [workplace.workplace]: true })));

  setLoading(false);
};
