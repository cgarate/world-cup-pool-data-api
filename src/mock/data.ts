export const teams = [
  {
    emoji: "flag-mx",
    fifaCode: "MEX",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.png",
    id: 1,
    iso2: "mx",
    name: "Mexico",
    groupId: 1
  },
  {
    emoji: "flag-ar",
    fifaCode: "ARG",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.png",
    id: 2,
    iso2: "ar",
    name: "Argentina",
    groupId: 2
  },
  {
    emoji: "flag-br",
    fifaCode: "BRA",
    flag:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/720px-Flag_of_Brazil.png",
    id: 3,
    iso2: "br",
    name: "Brazil",
    groupId: 1
  },
  {
    emoji: "flag-co",
    fifaCode: "COL",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/450px-Flag_of_Colombia.png",
    id: 4,
    iso2: "co",
    name: "Colombia",
    groupId: 2
  }
];

export const matches = [
  {
    type: "group",
    homeTeamId: 1,
    awayTeamId: 3,
    awayTeamResult: 0,
    homeTeamResult: 0,
    date: "2018-06-14T18:00:00+03:00",
    finished: true
  },
  {
    type: "group",
    homeTeamId: 2,
    awayTeamId: 4,
    awayTeamResult: 1,
    homeTeamResult: 0,
    date: "2018-06-14T15:00:00+03:00",
    finished: true
  }
];

export const groups = [
  { id: 1, name: "A", winnerId: 1, runnerUpId: 3 },
  { id: 2, name: "B", winnerId: 4, runnerUpId: 2 }
];

