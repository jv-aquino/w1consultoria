export { mergeClasses } from './mergeClasses'

export { phoneMask, cnpjMask, cpfMask, cepMask, dateMask } from './masks'

export const removeNumbers = (str: string): string => {
  return str.replace(/\d/g, '');
};