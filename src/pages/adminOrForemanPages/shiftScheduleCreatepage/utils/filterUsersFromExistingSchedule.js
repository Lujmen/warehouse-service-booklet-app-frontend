const filterUsersFromExistingSchedule = (data) => {
  const { users, schedule, shifts } = data.data;
  let filtredusers = [];
  let usersFromSchedule = new Set();

  shifts.forEach((shift) => {
    schedule[shift.type].forEach((shiftFromSchedule) => {
      shiftFromSchedule.users.forEach((userFromSchedule) => {
        usersFromSchedule.add(userFromSchedule._id);
      });
    });
  });
  filtredusers = users.filter((user) => !usersFromSchedule.has(user._id));

  return filtredusers;
};

export default filterUsersFromExistingSchedule;
