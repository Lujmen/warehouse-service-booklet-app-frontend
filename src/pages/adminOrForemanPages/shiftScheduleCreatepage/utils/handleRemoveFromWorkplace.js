const handleRemoveFromWorkplace = (userToRemove, index, setSchedule, queryCLient, shift, schedule, workplaceName) => {
  const workplaceIndex = schedule[shift].findIndex((workplace) => workplace.workplace === workplaceName);
  console.log(userToRemove);
  setSchedule((prevSchedule) => ({
    ...prevSchedule,
    [shift]: prevSchedule[shift].map((item, i) =>
      i === workplaceIndex
        ? {
            ...item,
            users: item.users.filter((user) => user._id !== userToRemove._id),
          }
        : item
    ),
  }));
};

export { handleRemoveFromWorkplace };
