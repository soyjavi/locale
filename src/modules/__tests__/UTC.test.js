import { UTC } from '../UTC';

const DATE = new Date(1980, 3, 10, 5, 15, 45);

describe('@helpers/UTC', () => {
  test('alive', () => {
    expect(UTC).toBeDefined();
  });

  test('Naive use', () => {
    expect(DATE.getHours()).not.toEqual(0);
    expect(DATE.getMinutes()).not.toEqual(0);
    expect(DATE.getSeconds()).not.toEqual(0);

    const date = UTC(DATE);
    expect(date.getUTCHours()).toEqual(0);
    expect(date.getMinutes()).toEqual(0);
    expect(date.getSeconds()).toEqual(0);
  });
});
