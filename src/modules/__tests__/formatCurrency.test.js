import { DEFAULT_LOCALE } from '../../Locale.definition';
import { formatCurrency } from '../formatCurrency';

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

describe('formatCurrency()', () => {
  const currency = 'GBP';
  const value = 1219.95;
  const test = TESTS[DEFAULT_LOCALE];

  it('should be sane', () => expect(formatCurrency()).toEqual(test.locale));

  it('with currency', () => expect(formatCurrency({ currency })).toEqual(test.currency));

  it(`with value`, () => expect(formatCurrency({ value })).toEqual(test.value));

  Object.keys(TESTS).forEach((locale) =>
    describe(`locale:${locale}`, () => {
      const test = TESTS[locale];

      it('with currency', () => expect(formatCurrency({ locale, currency })).toEqual(test.currency));

      it(`with locale`, () => expect(formatCurrency({ locale })).toEqual(test.locale));

      it(`with value`, () => expect(formatCurrency({ locale, value })).toEqual(test.value));
    }),
  );
});
