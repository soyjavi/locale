import { DEFAULT_LOCALE } from '../../Locale.definition';
import { currencyFormat } from '../currencyFormat';

const TESTS = {
  'es-ES': {
    currency: '0,00 GBP',
    locale: '0,00 €',
    value: '1219,95 €',
  },
  'en-GB': {
    currency: '£0.00',
    locale: '€0.00',
    value: '€1,219.95',
  },
  'fr-FR': {
    currency: '0,00 £GB',
    locale: '0,00 €',
    value: '1 219,95 €',
  },
  'it-IT': {
    currency: '0,00 £',
    locale: '0,00 €',
    value: '1.219,95 €',
  },
  'pt-PT': {
    currency: '0,00 £',
    locale: '0,00 €',
    value: '1219,95 €',
  },
  'fr-BE': {
    currency: '0,00 £GB',
    locale: '0,00 €',
    value: '1 219,95 €',
  },
  'de-DE': {
    currency: '0,00 £',
    locale: '0,00 €',
    value: '1.219,95 €',
  },
};

describe('currencyFormat()', () => {
  const currency = 'GBP';
  const value = 1219.95;
  const sample = TESTS[DEFAULT_LOCALE];

  test('should be sane', () => expect(currencyFormat()).toEqual(sample.locale));

  test('with currency', () => expect(currencyFormat({ currency })).toEqual(sample.currency));

  test(`with value`, () => expect(currencyFormat({ value })).toEqual(sample.value));

  Object.keys(TESTS).forEach((locale) =>
    describe(`locale:${locale}`, () => {
      const sample = TESTS[locale];

      test('with currency', () => expect(currencyFormat({ locale, currency })).toEqual(sample.currency));

      test(`with locale`, () => expect(currencyFormat({ locale })).toEqual(sample.locale));

      test(`with value`, () => expect(currencyFormat({ locale, value })).toEqual(sample.value));
    }),
  );
});
