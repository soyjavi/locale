import { dateToISOString } from '../dateToISOString';

const DATE = new Date(1980, 3, 10, 5, 15, 45);

describe('@modules/dateToISOString', () => {
  test('alive', () => {
    expect(dateToISOString).toBeDefined();
  });

  test('Naive use', () => {
    expect(dateToISOString(DATE)).toEqual('1980/04/10');
  });

  test('Using a custom delimiter', () => {
    expect(dateToISOString(DATE, '-')).toEqual('1980-04-10');
  });

  test('with an incorrect value', () => {
    expect(dateToISOString('soyjavi')).toEqual(undefined);
  });
});
