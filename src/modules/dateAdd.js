import { isDate } from './isDate';
import { UTC } from './UTC';

const CONTEXTS = ['days', 'months', 'years'];

export const dateAdd = (value, amount = 0, context = 'days') => {
  if (!isDate(value) || !amount || !CONTEXTS.includes(context)) return;

  const date = UTC(value);

  const year = date.getFullYear() + (context === 'years' ? amount : 0);
  const month = date.getMonth() + (context === 'months' ? amount : 0);
  const day = date.getDate() + (context === 'days' ? amount : 0);

  return UTC(new Date(year, month, day));
};
