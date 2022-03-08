import { UTC } from './UTC';

const YEAR = 'YYYY';
const MONTH = 'MM';
const DAY = 'DD';

export const parseDate = (value = '', format = `${DAY}/${MONTH}/${YEAR}`) => {
  if (typeof value !== 'string') return undefined;

  const today = UTC(new Date());
  const delimiter = format.includes('/') ? '/' : format.includes('-') ? '-' : undefined;
  let date = {};

  if (delimiter) {
    const formatParts = format.split(delimiter).map((part) => part.substr(part, 1).toUpperCase());
    value.split(delimiter).map((part, index) => {
      date[formatParts[index]] = parseInt(part, 10) - (formatParts[index] === 'M' ? 1 : 0);
    });
  } else {
    [YEAR, MONTH, DAY].forEach((part) => {
      const index = format.indexOf(part);
      if (index > -1) date[part.substr(0, 1)] = parseInt(value.substr(index, part.length)) - (part === MONTH ? 1 : 0);
    });
  }

  return UTC(new Date(date.Y || today.getFullYear(), date.M || today.getMonth(), date.D || today.getDate()));
};
