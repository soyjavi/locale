import { UTC } from './UTC';

export const dateToISOString = (value = new Date(), delimiter = '/') =>
  UTC(value)?.toISOString().substring(0, 10).split('-').join(delimiter);
