function onDragEnd(e) {
  const { active, over } = e;
  console.log(over.data.current.is12HoursShift);
  if (!e.over) return;
  const userIndex = users.findIndex((user) => user._id === active.id);
  setUsers((prevUsers) =>
    prevUsers.map((user, index) => (index === userIndex ? { ...user, columnId: over.id, is12HoursShift: over.data.current.is12HoursShift } : user))
  );
  setDragingUser(null);
  return;
}
function onDragStart(e) {
  const { active } = e;
  const userIndex = users.findIndex((user) => user._id === active.id);
  setDragingUser(users[userIndex]);
}
export { onDragEnd, onDragStart };
