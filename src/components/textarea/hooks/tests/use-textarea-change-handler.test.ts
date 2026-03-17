import { describe, expect, test } from '@rstest/core';
import { act, renderHook } from '@testing-library/react';
import type { ChangeEvent } from 'react';

import { useTextareaChangeHandler } from '@/components/textarea/hooks/use-textarea-change-handler';

describe('useTextareaChangeHandler', () => {
  test('updates the current length and calls onChange', async () => {
    let currentLength = 0;
    let changedValue = '';

    const { result } = renderHook(() =>
      useTextareaChangeHandler({
        onChange: (event) => {
          changedValue = event.currentTarget.value;
        },
        setCurrentLength: (value) => {
          currentLength =
            typeof value === 'function' ? value(currentLength) : value;

          return currentLength;
        },
      }),
    );

    act(() => {
      result.current({
        currentTarget: {
          value: 'Magic journal entry',
        },
      } as unknown as ChangeEvent<HTMLTextAreaElement>);
    });

    expect(currentLength).toBe(19);
    expect(changedValue).toBe('Magic journal entry');
  });

  test('updates the current length when onChange is undefined', async () => {
    let currentLength = 0;

    const { result } = renderHook(() =>
      useTextareaChangeHandler({
        onChange: undefined,
        setCurrentLength: (value) => {
          currentLength =
            typeof value === 'function' ? value(currentLength) : value;

          return currentLength;
        },
      }),
    );

    act(() => {
      result.current({
        currentTarget: {
          value: 'note',
        },
      } as unknown as ChangeEvent<HTMLTextAreaElement>);
    });

    expect(currentLength).toBe(4);
  });
});
