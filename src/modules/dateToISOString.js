import { UTC } from './UTC';

export const dateToISOString = (date = new Date()) => UTC(date).toISOString().substring(0, 10).split('-').join('/');
