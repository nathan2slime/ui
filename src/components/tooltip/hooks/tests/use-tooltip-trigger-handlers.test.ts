import { describe, expect, test } from '@rstest/core';
import { act, renderHook } from '@testing-library/react';
import type { FocusEvent, MouseEvent } from 'react';

import { useTooltipTriggerHandlers } from '@/components/tooltip/hooks/use-tooltip-trigger-handlers';

describe('useTooltipTriggerHandlers', () => {
  test('merges focus and pointer callbacks with open and close actions', async () => {
    let opened = 0;
    let closed = 0;
    let focused = false;
    let blurred = false;
    let hovered = false;
    let left = false;

    const { result } = renderHook(() =>
      useTooltipTriggerHandlers({
        close: () => {
          closed += 1;
        },
        onBlur: () => {
          blurred = true;
        },
        onFocus: () => {
          focused = true;
        },
        onMouseEnter: () => {
          hovered = true;
        },
        onMouseLeave: () => {
          left = true;
        },
        open: () => {
          opened += 1;
        },
      }),
    );

    act(() => {
      result.current.handleFocus({} as FocusEvent<HTMLButtonElement>);
      result.current.handleBlur({} as FocusEvent<HTMLButtonElement>);
      result.current.handleMouseEnter({} as MouseEvent<HTMLButtonElement>);
      result.current.handleMouseLeave({} as MouseEvent<HTMLButtonElement>);
    });

    expect(opened).toBe(2);
    expect(closed).toBe(2);
    expect(focused).toBe(true);
    expect(blurred).toBe(true);
    expect(hovered).toBe(true);
    expect(left).toBe(true);
  });

  test('still opens and closes when consumer callbacks are undefined', async () => {
    let opened = 0;
    let closed = 0;

    const { result } = renderHook(() =>
      useTooltipTriggerHandlers({
        close: () => {
          closed += 1;
        },
        onBlur: undefined,
        onFocus: undefined,
        onMouseEnter: undefined,
        onMouseLeave: undefined,
        open: () => {
          opened += 1;
        },
      }),
    );

    act(() => {
      result.current.handleFocus({} as FocusEvent<HTMLButtonElement>);
      result.current.handleBlur({} as FocusEvent<HTMLButtonElement>);
      result.current.handleMouseEnter({} as MouseEvent<HTMLButtonElement>);
      result.current.handleMouseLeave({} as MouseEvent<HTMLButtonElement>);
    });

    expect(opened).toBe(2);
    expect(closed).toBe(2);
  });
});
