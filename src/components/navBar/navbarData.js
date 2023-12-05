const forForemanOrAdmin = [
  {
    to: '/home',
    name: 'Strona Domowa',
  },

  {
    to: '/info',
    name: 'Informacje',
  },
  {
    to: '/activeUsers',
    name: 'Aktywni uzytkownicy',
  },
  {
    to: '/chamferingRaports',
    name: 'Raport Fazowania',
  },
];
const forUsersPostedOnForklift = [
  {
    to: '/home',
    name: 'Strona Domowa',
  },

  {
    to: '/info',
    name: 'Informacje',
  },
  {
    to: '/serviceBooklet',
    name: 'Ksiazka serwisowa',
  },
];
const forUsersPostedOnGantry = [
  {
    to: '/home',
    name: 'Strona Domowa',
  },
  {
    to: '/info',
    name: 'Informacje',
  },
  {
    to: '/chamfering',
    name: 'Fazowanie',
  },
  {
    to: '/serviceBooklet',
    name: 'Ksiazka serwisowa',
  },
];
const forNoPosted = [
  {
    to: '/login',
    name: 'Zaloguj',
  },
  {
    to: '/home',
    name: 'Strona Domowa',
  },
  {
    to: '/info',
    name: 'Informacje',
  },
];
export { forForemanOrAdmin, forUsersPostedOnForklift, forUsersPostedOnGantry, forNoPosted };
