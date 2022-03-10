import { DEFAULT_LOCALE } from '../../Locale.definition';
import { dateFormat } from '../dateFormat';

const DATE = new Date(1980, 3, 10);

const TESTS = {
  'es-ES': {
    options: 'jueves, 10 de abril de 1980',
    value: '1/1/2020',
  },
  'en-GB': {
    options: 'Thursday, 10 April 1980',
    value: '01/01/2020',
  },
  'fr-FR': {
    options: 'jeudi 10 avril 1980',
    value: '01/01/2020',
  },
  'it-IT': {
    options: 'giovedì 10 aprile 1980',
    value: '1/1/2020',
  },
  'pt-PT': {
    options: 'quinta-feira, 10 de abril de 1980',
    value: '01/01/2020',
  },
  'de-DE': {
    options: 'Donnerstag, 10. April 1980',
    value: '1.1.2020',
  },
};

describe('modules/dateFormat()', () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const value = new Date(2020, 0, 1);

  const sample = TESTS[DEFAULT_LOCALE];

  test('alive', () => {
    expect(dateFormat).toBeDefined();
  });

  test('should be sane', () => {
    expect(dateFormat()).toEqual(undefined);
  });

  test('with value', () => {
    expect(dateFormat(value)).toEqual(sample.value);
  });

  test('with an incorrect value', () => {
    expect(dateFormat('10/04/1980')).toEqual(undefined);
  });

  test('with format', () => {
    expect(dateFormat(DATE, { format: 'DD/MM/YYYY' })).toEqual('10/04/1980');
    expect(dateFormat(DATE, { format: 'YYYY/MM/DD' })).toEqual('1980/04/10');
    expect(dateFormat(DATE, { format: 'MM/YY' })).toEqual('04/80');
  });

  test('with format & delimiter', () => {
    expect(dateFormat(DATE, { delimiter: '-', format: 'DD-MM-YYYY' })).toEqual('10-04-1980');
    expect(dateFormat(DATE, { delimiter: '-', format: 'YYYY-MM-DD' })).toEqual('1980-04-10');
    expect(dateFormat(DATE, { delimiter: '-', format: 'MM-YY' })).toEqual('04-80');
  });

  test('with options', () => {
    expect(dateFormat(DATE, { ...options })).toEqual(sample.options);
  });

  Object.keys(TESTS).forEach((locale) =>
    describe(`locale:${locale}`, () => {
      const sample = TESTS[locale];

      test(`with options`, () => {
        expect(dateFormat(DATE, { locale, ...options })).toEqual(sample.options);
      });

      test(`with value`, () => {
        expect(dateFormat(value, { locale })).toEqual(sample.value);
      });
    }),
  );
});
