export default () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const weekend = new Array(
    'Sun.',
    'Mon.',
    'Tue.',
    'Wed.',
    'Thu.',
    'Fri.',
    'Sat.'
  );
  const week = weekend[date.getDay()];
  const time = date.getTime();
  const hour = date.getHours();

  let now = '';

  if (6 < hour && hour < 12) {
    now = 'Morning';
  } else if (hour < 18) {
    now = 'Afternoon';
  } else if (hour < 22) {
    now = 'Evening';
  } else {
    now = 'Night';
  }

  const getInfo = {
    month,
    day,
    week,
    time,
    now,
  };

  return getInfo;
};
