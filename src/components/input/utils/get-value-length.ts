import type { InputProps } from '@/types/input';

/**
 * Calculates the amount of characters represented by the input value.
 *
 * @param value Current or initial input value.
 * @returns The character count used by the helper counter.
 */
export const getValueLength = (
  value: InputProps['value'] | InputProps['defaultValue'],
): number => {
  if (typeof value === 'string') {
    return value.length;
  }

  if (typeof value === 'number') {
    return String(value).length;
  }

  return 0;
};
