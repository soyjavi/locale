import { isDate } from '../isDate';

const DATE = new Date(1980, 3, 10, 5, 15, 45);

describe('@modules/isDate', () => {
  test('alive', () => {
    expect(isDate).toBeDefined();
  });

  test('Naive use', () => {
    expect(isDate(DATE)).toEqual(true);
    expect(isDate()).toEqual(false);
    expect(isDate(1980)).toEqual(false);
    expect(isDate('soyjavi')).toEqual(false);
    expect(isDate(['soyjavi'])).toEqual(false);
    expect(isDate({ name: 'soyjavi' })).toEqual(false);
  });
});
