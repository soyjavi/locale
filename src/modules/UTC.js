import { isDate } from './isDate';

export const UTC = (value) =>
  isDate(value) ? new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate(), 0, 0, 0, 0)) : undefined;
