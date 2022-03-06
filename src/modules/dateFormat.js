import { DEFAULT_LOCALE } from '../locale.definition';

const FORMAT = {
  weekday: ['long', 'short', 'narrow'],
  year: ['numeric', '2-digit'],
  month: ['numeric', '2-digit', 'long', 'short', 'narrow'],
  day: ['numeric', '2-digit'],
};

export const dateFormat = ({ locale = DEFAULT_LOCALE, options = {}, value = new Date(1980, 3, 10) } = {}) => {
  const parseOptions = {};

  Object.keys(options).forEach((key) => {
    if (FORMAT[key] && FORMAT[key].includes(options[key])) parseOptions[key] = options[key];
  });

  return value.toLocaleDateString(locale, parseOptions);
};
