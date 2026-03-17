import type { InputProps } from '@/types/input';

const textLikeInputTypes = new Set([
  'email',
  'password',
  'search',
  'tel',
  'text',
  'url',
]);

/**
 * Resolves the character limit shown by the input counter.
 *
 * @param max Numeric max attribute forwarded to the native input.
 * @param maxLength Native maxLength attribute value.
 * @param type Input type used to determine whether character counting applies.
 * @returns The resolved character limit when the input supports text counting.
 */
export const getCharacterLimit = (
  max: InputProps['max'],
  maxLength: InputProps['maxLength'],
  type: string,
): number | null => {
  if (
    typeof maxLength === 'number' &&
    Number.isFinite(maxLength) &&
    maxLength >= 0
  ) {
    return maxLength;
  }

  if (!textLikeInputTypes.has(type)) {
    return null;
  }

  if (typeof max === 'number' && Number.isFinite(max) && max >= 0) {
    return Math.trunc(max);
  }

  if (typeof max === 'string') {
    const parsedMax = Number.parseInt(max, 10);

    if (Number.isFinite(parsedMax) && parsedMax >= 0) {
      return parsedMax;
    }
  }

  return null;
};
