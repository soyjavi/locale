import { dateDiff } from '../dateDiff';

const DATE = new Date(1980, 3, 10, 5, 15, 45);
const NEXT_2_DAYS = new Date(1980, 3, 10 + 2, 5, 15, 45);
const NEXT_25_DAYS = new Date(1980, 3, 10 + 25, 5, 15, 45);
const NEXT_500_DAYS = new Date(1980, 3, 10 + 500, 5, 15, 45);

describe('@modules/dateDiff', () => {
  test('alive', () => {
    expect(dateDiff).toBeDefined();
  });

  test('Naive use', () => {
    expect(dateDiff(DATE, NEXT_2_DAYS)).toEqual({ years: 0, months: 0, days: 2 });
    expect(dateDiff(DATE, NEXT_25_DAYS)).toEqual({ years: 0, months: 1, days: 25 });
    expect(dateDiff(DATE, NEXT_500_DAYS)).toEqual({ years: 1, months: 16, days: 500 });
  });

  test('Incorrect use', () => {
    const error = { years: undefined, months: undefined, days: undefined };

    expect(dateDiff()).toEqual(error);
    expect(dateDiff(DATE)).toEqual(error);
    expect(dateDiff(undefined, DATE)).toEqual(error);
    expect(dateDiff(NEXT_2_DAYS, DATE)).toEqual(error);
    expect(dateDiff(DATE, '1980/04/10')).toEqual(error);
    expect(dateDiff('1980/04/10', DATE)).toEqual(error);
  });
});
