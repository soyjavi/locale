import { dateAdd } from '../dateAdd';
import { UTC } from '../UTC';

const DATE = new Date(1980, 3, 10, 5, 15, 45);
const AMOUNT = 3;
const IN_3_DAYS = new Date(1980, 3, 10 + AMOUNT, 5, 15, 45);
const IN_3_MONTHS = new Date(1980, 3 + AMOUNT, 10, 5, 15, 45);
const IN_3_YEARS = new Date(1980 + AMOUNT, 3, 10, 5, 15, 45);

describe('@modules/dateAdd', () => {
  test('alive', () => {
    expect(dateAdd).toBeDefined();
  });

  test('Naive use', () => {
    expect(dateAdd(DATE, AMOUNT, 'days')).toEqual(UTC(IN_3_DAYS));
    expect(dateAdd(DATE, AMOUNT, 'months')).toEqual(UTC(IN_3_MONTHS));
    expect(dateAdd(DATE, AMOUNT, 'years')).toEqual(UTC(IN_3_YEARS));
  });

  test('Incorrect use', () => {
    expect(dateAdd()).toEqual(undefined);
    expect(dateAdd(DATE)).toEqual(undefined);
    expect(dateAdd(undefined, AMOUNT)).toEqual(undefined);
    expect(dateAdd(DATE, AMOUNT, 'centuries')).toEqual(undefined);
  });
});
