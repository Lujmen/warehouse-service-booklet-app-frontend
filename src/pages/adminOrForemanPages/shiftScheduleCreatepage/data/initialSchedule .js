const workplaces = ['smallCart', 'crane', 'forklift'];

const initialSchedule = {
  firstShift: [
    { workplace: workplaces[0], users: [] },
    { workplace: workplaces[1], users: [] },
    { workplace: workplaces[2], users: [] },
  ],
  secondShift: [
    { workplace: workplaces[0], users: [] },
    { workplace: workplaces[1], users: [] },
    { workplace: workplaces[2], users: [] },
  ],
  thirdShift: [
    { workplace: workplaces[0], users: [] },
    { workplace: workplaces[1], users: [] },
    { workplace: workplaces[2], users: [] },
  ],
};

export { workplaces, initialSchedule };
