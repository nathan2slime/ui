import { describe, expect, test } from '@rstest/core';

import { getCharacterLimit } from '@/components/input/utils/get-character-limit';

describe('getCharacterLimit', () => {
  test('prefers maxLength when available', async () => {
    expect(getCharacterLimit(40, 20, 'text')).toBe(20);
  });

  test('uses max for text-like inputs', async () => {
    expect(getCharacterLimit(40, undefined, 'text')).toBe(40);
  });

  test('parses string max values', async () => {
    expect(getCharacterLimit('32', undefined, 'search')).toBe(32);
  });

  test('ignores max for non text-like inputs', async () => {
    expect(getCharacterLimit(99, undefined, 'number')).toBeNull();
  });
});
