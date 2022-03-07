export const isDate = (value) => value !== undefined && typeof value === 'object' && value.getDate !== undefined;
