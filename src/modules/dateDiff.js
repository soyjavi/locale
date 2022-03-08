import { isDate } from './isDate';

const MS_DAY = 1000 * 60 * 60 * 24;
const MS_MONTH = MS_DAY * 30;
const MS_YEAR = MS_DAY * 365;

export const dateDiff = (from, to) => {
  let days = 0;
  let months = 0;
  let years = 0;

  if (isDate(from) && isDate(to)) {
    const diff = to.getTime() - from.getTime();
    days = parseInt(diff / MS_DAY, 10);
    months = parseInt(diff / MS_MONTH, 10);
    years = parseInt(diff / MS_YEAR, 10);
  }

  return { days, months, years };
};
