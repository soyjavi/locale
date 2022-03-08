import { DEFAULT_LOCALE } from '../locale.definition';
import { isDate } from './isDate';
import { UTC } from './UTC';

const FORMAT = {
  weekday: ['long', 'short', 'narrow'],
  year: ['numeric', '2-digit'],
  month: ['numeric', '2-digit', 'long', 'short', 'narrow'],
  day: ['numeric', '2-digit'],
};

export const dateFormat = (value, { locale = DEFAULT_LOCALE, delimiter = '/', format, ...options } = {}) => {
  if (!isDate(value)) return;

  if (format) {
    const [Y, M, D] = UTC(value).toISOString().substring(0, 10).split('-');
    const mapValue = { Y, M, D };

    const date = format
      .split(delimiter)
      .map((part) => {
        const index = part.substring(0, 1);

        return mapValue[index].substring(mapValue[index].length - part.length);
      })
      .join(delimiter);

    return date;
  } else {
    const parseOptions = {};
    Object.keys(options).forEach((key) => {
      if (FORMAT[key] && FORMAT[key].includes(options[key])) parseOptions[key] = options[key];
    });

    return value.toLocaleDateString(locale, parseOptions);
  }
};
