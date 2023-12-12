const handleRemoveFromWorkplace = (userToRemove, index, setSchedule, queryCLient, shift, schedule, workplaceName) => {
  const workplaceIndex = schedule[shift].findIndex((workplace) => workplace.workplace === workplaceName);
  setSchedule((prevSchedule) => ({
    ...prevSchedule,
    [shift]: prevSchedule[shift].map((item, i) =>
      i === workplaceIndex
        ? {
            ...item,
            users: item.users.filter((user) => user.user._id !== userToRemove._id),
          }
        : item
    ),
  }));
  queryCLient.setQueryData(['users'], (prevState) => [...prevState, userToRemove]);
  console.log(schedule);
};

export { handleRemoveFromWorkplace };
