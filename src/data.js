const today = new Date();
const getTime = hours => today.setHours(hours, 0);

export const meetingsData = [
  {
    startsAt: getTime(9),
    team: { name: 'A' }
  },
  {
    startsAt: getTime(10),
    team: { name: 'B' }
  },
  {
    startsAt: getTime(11),
    team: { name: 'C' }
  },
  {
    startsAt: getTime(12),
    team: { name: 'D' }
  },
  {
    startsAt: getTime(13),
    team: { name: 'E' }
  },
  {
    startsAt: getTime(14),
    team: { name: 'F' }
  },
  {
    startsAt: getTime(15),
    team: { name: 'G' }
  }
];
