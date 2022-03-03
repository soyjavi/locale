import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from '../locale.definition';

const FRACTION_DIGITS = {
  [DEFAULT_LOCALE]: 2,
};

export const formatCurrency = ({ currency = DEFAULT_CURRENCY, locale = DEFAULT_LOCALE, value = 0 } = {}) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: FRACTION_DIGITS[locale] || FRACTION_DIGITS[DEFAULT_LOCALE],
  });

  return formatter.format(value);
};
