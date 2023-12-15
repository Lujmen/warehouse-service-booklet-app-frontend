const handleDrop = async (user, workplaceName, setSchedule, queryCLient, shift, schedule) => {
  console.log(user);

  // Find the index of the workplace in the specified shift
  const workplaceIndex = schedule[shift].findIndex((workplace) => workplace.workplace === workplaceName);
  console.log(workplaceIndex);
  // If the workplace is found, update it; otherwise, do nothing
  if (workplaceIndex !== -1) {
    console.log(user);
    const updatedSchedule = {
      ...schedule,
      [shift]: [
        ...schedule[shift].slice(0, workplaceIndex),
        { workplace: workplaceName, users: [...schedule[shift][workplaceIndex].users, { username: user.username, _id: user._id }] },
        ...schedule[shift].slice(workplaceIndex + 1),
      ],
    };
    setSchedule(updatedSchedule);
  }
};
export { handleDrop };
