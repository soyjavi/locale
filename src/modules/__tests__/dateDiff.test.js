import { dateDiff } from '../dateDiff';

const DATE = new Date(1980, 3, 10, 5, 15, 45);
const NEXT_2_DAYS = new Date(1980, 3, 10 + 2, 5, 15, 45);
const NEXT_45_DAYS = new Date(1980, 3, 10 + 45, 5, 15, 45);
const NEXT_500_DAYS = new Date(1980, 3, 10 + 500, 5, 15, 45);

describe('@modules/dateDiff', () => {
  test('alive', () => {
    expect(dateDiff).toBeDefined();
  });

  test('Naive use', () => {
    expect(dateDiff(DATE, NEXT_2_DAYS)).toEqual({ days: 2, months: 0, years: 0 });
    expect(dateDiff(DATE, NEXT_45_DAYS)).toEqual({ days: 45, months: 1, years: 0 });
    expect(dateDiff(DATE, NEXT_500_DAYS)).toEqual({ days: 500, months: 16, years: 1 });
  });

  test('Incorrect use', () => {
    expect(dateDiff()).toEqual({ days: undefined, months: undefined, years: undefined });
    expect(dateDiff(DATE)).toEqual({ days: undefined, months: undefined, years: undefined });
    expect(dateDiff(undefined, DATE)).toEqual({ days: undefined, months: undefined, years: undefined });
    expect(dateDiff(NEXT_2_DAYS, DATE)).toEqual({ days: undefined, months: undefined, years: undefined });
    expect(dateDiff(DATE, '1980/04/10')).toEqual({ days: undefined, months: undefined, years: undefined });
    expect(dateDiff('1980/04/10', DATE)).toEqual({ days: undefined, months: undefined, years: undefined });
  });
});
