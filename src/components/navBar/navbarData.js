const forForemanOrAdmin = [
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
    to: '',
    name: 'Strona Domowa',
  },

  {
    to: '',
    name: 'Informacje',
  },
  {
    to: '/serviceBooklet',
    name: 'Ksiazka serwisowa',
  },
];
const forUsersPostedOnGantry = [
  {
    to: '/',
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
    to: '/',
    name: 'Strona Domowa',
  },
  {
    to: '/',
    name: 'Informacje',
  },
];
export { forForemanOrAdmin, forUsersPostedOnForklift, forUsersPostedOnGantry, forNoPosted };
