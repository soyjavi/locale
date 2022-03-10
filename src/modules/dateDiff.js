import { isDate } from './isDate';

const MS_DAY = 1000 * 60 * 60 * 24;

export const dateDiff = (from, to) => {
  let years;
  let months;
  let days;

  if (isDate(from) && isDate(to) && from < to) {
    const diff = to.getTime() - from.getTime();

    years = to.getFullYear() - from.getFullYear();
    months = years * 12 + to.getMonth() - from.getMonth();
    days = parseInt(diff / MS_DAY, 10);
  }

  return { years, months, days };
};
