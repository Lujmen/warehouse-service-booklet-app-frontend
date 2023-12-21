const workplaces = ['smallCart', 'crane', 'forklift'];

const initialSchedule = {
  firstShift: [
    { workplace: workplaces[0], users: [], is12HoursShift: false },
    { workplace: workplaces[1], users: [], is12HoursShift: false },
    { workplace: workplaces[2], users: [], is12HoursShift: false },
  ],
  secondShift: [
    { workplace: workplaces[0], users: [], is12HoursShift: false },
    { workplace: workplaces[1], users: [], is12HoursShift: false },
    { workplace: workplaces[2], users: [], is12HoursShift: false },
  ],
  // its not possible to third shift presist 12 hours
  // its possible but its really hard to implement
  // 12h shifts can presists between 6-18, and 18-6, or 2-14, and 14-2 meybe i try do this

  thirdShift: [
    { workplace: workplaces[0], users: [], is12HoursShift: false },
    { workplace: workplaces[1], users: [], is12HoursShift: false },
    { workplace: workplaces[2], users: [], is12HoursShift: false },
  ],
};
const shifts = [
  { id: 1, type: 'firstShift', workplaces: ['smallCart', 'crane', 'forklift'] },
  { id: 2, type: 'secondShift', workplaces: ['smallCart', 'crane', 'forklift'] },
  { id: 3, type: 'thirdShift', workplaces: ['smallCart', 'crane', 'forklift'] },
];

export { workplaces, initialSchedule, shifts };
