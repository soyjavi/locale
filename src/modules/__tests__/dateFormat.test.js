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

  const test = TESTS[DEFAULT_LOCALE];

  it('should be sane', () => {
    expect(dateFormat()).toEqual(undefined);
  });

  it('with value', () => {
    expect(dateFormat(value)).toEqual(test.value);
  });

  it('with an incorrect value', () => {
    expect(dateFormat('10/04/1980')).toEqual(undefined);
  });

  it('with format', () => {
    expect(dateFormat(DATE, { format: 'DD/MM/YYYY' })).toEqual('10/04/1980');
    expect(dateFormat(DATE, { format: 'YYYY/MM/DD' })).toEqual('1980/04/10');
    expect(dateFormat(DATE, { format: 'MM/YY' })).toEqual('04/80');
  });

  it('with format & delimiter', () => {
    expect(dateFormat(DATE, { delimiter: '-', format: 'DD-MM-YYYY' })).toEqual('10-04-1980');
    expect(dateFormat(DATE, { delimiter: '-', format: 'YYYY-MM-DD' })).toEqual('1980-04-10');
    expect(dateFormat(DATE, { delimiter: '-', format: 'MM-YY' })).toEqual('04-80');
  });

  it('with options', () => {
    expect(dateFormat(DATE, { ...options })).toEqual(test.options);
  });

  Object.keys(TESTS).forEach((locale) =>
    describe(`locale:${locale}`, () => {
      const test = TESTS[locale];

      it(`with options`, () => {
        expect(dateFormat(DATE, { locale, ...options })).toEqual(test.options);
      });

      it(`with value`, () => {
        expect(dateFormat(value, { locale })).toEqual(test.value);
      });
    }),
  );
});
