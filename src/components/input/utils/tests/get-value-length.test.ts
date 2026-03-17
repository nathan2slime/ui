import { describe, expect, test } from '@rstest/core';

import { getValueLength } from '@/components/input/utils/get-value-length';

describe('getValueLength', () => {
  test('returns the length of string values', async () => {
    expect(getValueLength('Grimoire')).toBe(8);
  });

  test('stringifies numeric values', async () => {
    expect(getValueLength(404)).toBe(3);
  });

  test('returns zero for missing values', async () => {
    expect(getValueLength(undefined)).toBe(0);
  });
});
