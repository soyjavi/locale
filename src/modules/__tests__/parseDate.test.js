import { parseDate } from '../parseDate';
import { UTC } from '../UTC';

const DATE = UTC(new Date(1980, 3, 10, 5, 15, 45));

describe('@modules/parseDate', () => {
  test('alive', () => {
    expect(parseDate).toBeDefined();
  });

  test('Naive use', () => {
    expect(parseDate('10/04/1980')).toEqual(DATE);
  });

  test('using a determinated format', () => {
    expect(parseDate('1980/04/10', 'YYYY/MM/DD')).toEqual(DATE);
    expect(parseDate('1980/10/04', 'YYYY/DD/MM')).toEqual(DATE);
    expect(parseDate('10-04-1980', 'DD-MM-YYYY')).toEqual(DATE);
    expect(parseDate('19800410', 'YYYYMMDD')).toEqual(DATE);
    expect(parseDate('10041980', 'DDMMYYYY')).toEqual(DATE);
  });
});
