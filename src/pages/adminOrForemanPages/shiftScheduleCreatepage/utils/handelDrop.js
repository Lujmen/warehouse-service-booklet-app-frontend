const handleDrop = (user, workplaceName, setSchedule, queryCLient, shift, schedule) => {
  console.log(user.user.username);

  // Find the index of the workplace in the specified shift
  const workplaceIndex = schedule[shift].findIndex((workplace) => workplace.workplace === workplaceName);
  console.log(workplaceIndex);
  // If the workplace is found, update it; otherwise, do nothing
  if (workplaceIndex !== -1) {
    const updatedSchedule = {
      ...schedule,
      [shift]: [
        ...schedule[shift].slice(0, workplaceIndex),
        { workplace: workplaceName, users: [...schedule[shift][workplaceIndex].users, user] },
        ...schedule[shift].slice(workplaceIndex + 1),
      ],
    };
    setSchedule(updatedSchedule);
    queryCLient.setQueryData(['users'], (prevState) => {
      const userIndex = prevState.findIndex((userFromList) => userFromList['username'] === user.user.username);
      if (userIndex !== -1) {
        prevState.splice(userIndex, 1);
        return prevState;
      }
      return prevState;
    });
  }
};
export { handleDrop };
