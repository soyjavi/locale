import { dateCalc } from '../dateCalc';
import { UTC } from '../UTC';

const DATE = new Date(1980, 3, 10, 5, 15, 45);
const AMOUNT = 3;
const IN_3_DAYS = new Date(1980, 3, 10 + AMOUNT, 5, 15, 45);
const IN_3_MONTHS = new Date(1980, 3 + AMOUNT, 10, 5, 15, 45);
const IN_3_YEARS = new Date(1980 + AMOUNT, 3, 10, 5, 15, 45);
const AGO_3_DAYS = new Date(1980, 3, 10 - AMOUNT, 5, 15, 45);
const AGO_3_MONTHS = new Date(1980, 3 - AMOUNT, 10, 5, 15, 45);
const AGO_3_YEARS = new Date(1980 - AMOUNT, 3, 10, 5, 15, 45);

describe('@modules/dateCalc', () => {
  test('alive', () => {
    expect(dateCalc).toBeDefined();
  });

  test('Naive use', () => {
    expect(dateCalc(DATE, AMOUNT)).toEqual(UTC(IN_3_DAYS));
    expect(dateCalc(DATE, AMOUNT, 'days')).toEqual(UTC(IN_3_DAYS));
    expect(dateCalc(DATE, AMOUNT, 'months')).toEqual(UTC(IN_3_MONTHS));
    expect(dateCalc(DATE, AMOUNT, 'years')).toEqual(UTC(IN_3_YEARS));
    expect(dateCalc(DATE, -AMOUNT, 'days')).toEqual(UTC(AGO_3_DAYS));
    expect(dateCalc(DATE, -AMOUNT, 'months')).toEqual(UTC(AGO_3_MONTHS));
    expect(dateCalc(DATE, -AMOUNT, 'years')).toEqual(UTC(AGO_3_YEARS));
  });

  test('Incorrect use', () => {
    expect(dateCalc()).toEqual(undefined);
    expect(dateCalc(DATE)).toEqual(undefined);
    expect(dateCalc(DATE, '1')).toEqual(undefined);
    expect(dateCalc(undefined, AMOUNT)).toEqual(undefined);
    expect(dateCalc(DATE, AMOUNT, 'centuries')).toEqual(undefined);
  });
});
