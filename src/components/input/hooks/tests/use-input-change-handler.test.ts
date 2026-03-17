import { describe, expect, test } from '@rstest/core';
import { act, renderHook } from '@testing-library/react';
import type { ChangeEvent } from 'react';

import { useInputChangeHandler } from '@/components/input/hooks/use-input-change-handler';

describe('useInputChangeHandler', () => {
  test('updates the current length and calls onChange', async () => {
    let currentLength = 0;
    let changedValue = '';

    const { result } = renderHook(() =>
      useInputChangeHandler({
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
          value: 'grimmoire',
        },
      } as unknown as ChangeEvent<HTMLInputElement>);
    });

    expect(currentLength).toBe(9);
    expect(changedValue).toBe('grimmoire');
  });

  test('updates the current length when onChange is undefined', async () => {
    let currentLength = 0;

    const { result } = renderHook(() =>
      useInputChangeHandler({
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
          value: 'spell',
        },
      } as unknown as ChangeEvent<HTMLInputElement>);
    });

    expect(currentLength).toBe(5);
  });
});
