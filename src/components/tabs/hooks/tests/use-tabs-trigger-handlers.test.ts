import { describe, expect, test } from '@rstest/core';
import { act, renderHook } from '@testing-library/react';
import type { KeyboardEvent, MouseEvent } from 'react';

import { useTabsTriggerHandlers } from '@/components/tabs/hooks/use-tabs-trigger-handlers';

describe('useTabsTriggerHandlers', () => {
  test('calls onValueChange on click when enabled', async () => {
    let clicked = false;
    let nextValue = '';

    const { result } = renderHook(() =>
      useTabsTriggerHandlers({
        disabled: false,
        onClick: () => {
          clicked = true;
        },
        onKeyDown: undefined,
        onValueChange: (value) => {
          nextValue = value;
        },
        value: 'account',
      }),
    );

    act(() => {
      result.current.handleClick({
        defaultPrevented: false,
      } as unknown as MouseEvent<HTMLButtonElement>);
    });

    expect(clicked).toBe(true);
    expect(nextValue).toBe('account');
  });

  test('does not call onValueChange when disabled', async () => {
    let nextValue = '';

    const { result } = renderHook(() =>
      useTabsTriggerHandlers({
        disabled: true,
        onClick: undefined,
        onKeyDown: undefined,
        onValueChange: (value) => {
          nextValue = value;
        },
        value: 'account',
      }),
    );

    act(() => {
      result.current.handleClick({
        defaultPrevented: false,
      } as unknown as MouseEvent<HTMLButtonElement>);
    });

    expect(nextValue).toBe('');
  });

  test('does not call onValueChange when onClick prevents default', async () => {
    let nextValue = '';

    const { result } = renderHook(() =>
      useTabsTriggerHandlers({
        disabled: false,
        onClick: (event) => {
          event.preventDefault();
        },
        onKeyDown: undefined,
        onValueChange: (value) => {
          nextValue = value;
        },
        value: 'account',
      }),
    );

    let prevented = false;

    const eventMock: {
      defaultPrevented: boolean;
      preventDefault: VoidFunction;
    } = {
      defaultPrevented: false,
      preventDefault() {
        prevented = true;
        eventMock.defaultPrevented = true;
      },
    };

    act(() => {
      result.current.handleClick(
        eventMock as unknown as MouseEvent<HTMLButtonElement>,
      );
    });

    expect(prevented).toBe(true);
    expect(nextValue).toBe('');
  });

  test('focuses and clicks the next trigger on ArrowRight', async () => {
    const list = document.createElement('div');
    const firstTrigger = document.createElement('button');
    const secondTrigger = document.createElement('button');
    let focusedSecondTrigger = false;
    let clickedSecondTrigger = false;

    firstTrigger.setAttribute('role', 'tab');
    secondTrigger.setAttribute('role', 'tab');
    firstTrigger.type = 'button';
    secondTrigger.type = 'button';

    secondTrigger.focus = () => {
      focusedSecondTrigger = true;
    };
    secondTrigger.click = () => {
      clickedSecondTrigger = true;
    };

    list.append(firstTrigger, secondTrigger);
    document.body.append(list);

    const { result } = renderHook(() =>
      useTabsTriggerHandlers({
        disabled: false,
        onClick: undefined,
        onKeyDown: undefined,
        onValueChange: () => {},
        value: 'account',
      }),
    );

    let prevented = false;

    act(() => {
      result.current.handleKeyDown({
        currentTarget: firstTrigger,
        defaultPrevented: false,
        key: 'ArrowRight',
        preventDefault: () => {
          prevented = true;
        },
      } as unknown as KeyboardEvent<HTMLButtonElement>);
    });

    expect(prevented).toBe(true);
    expect(focusedSecondTrigger).toBe(true);
    expect(clickedSecondTrigger).toBe(true);

    list.remove();
  });

  test('focuses the previous trigger on ArrowLeft', async () => {
    const list = document.createElement('div');
    const firstTrigger = document.createElement('button');
    const secondTrigger = document.createElement('button');
    let focusedFirstTrigger = false;
    let clickedFirstTrigger = false;

    firstTrigger.setAttribute('role', 'tab');
    secondTrigger.setAttribute('role', 'tab');
    firstTrigger.type = 'button';
    secondTrigger.type = 'button';

    firstTrigger.focus = () => {
      focusedFirstTrigger = true;
    };
    firstTrigger.click = () => {
      clickedFirstTrigger = true;
    };

    list.append(firstTrigger, secondTrigger);
    document.body.append(list);

    const { result } = renderHook(() =>
      useTabsTriggerHandlers({
        disabled: false,
        onClick: undefined,
        onKeyDown: undefined,
        onValueChange: () => {},
        value: 'password',
      }),
    );

    act(() => {
      result.current.handleKeyDown({
        currentTarget: secondTrigger,
        defaultPrevented: false,
        key: 'ArrowLeft',
        preventDefault: () => {},
      } as unknown as KeyboardEvent<HTMLButtonElement>);
    });

    expect(focusedFirstTrigger).toBe(true);
    expect(clickedFirstTrigger).toBe(true);

    list.remove();
  });

  test('focuses the first trigger on Home and last trigger on End', async () => {
    const list = document.createElement('div');
    const firstTrigger = document.createElement('button');
    const middleTrigger = document.createElement('button');
    const lastTrigger = document.createElement('button');
    let focusedFirstTrigger = false;
    let clickedFirstTrigger = false;
    let focusedLastTrigger = false;
    let clickedLastTrigger = false;

    firstTrigger.setAttribute('role', 'tab');
    middleTrigger.setAttribute('role', 'tab');
    lastTrigger.setAttribute('role', 'tab');
    firstTrigger.type = 'button';
    middleTrigger.type = 'button';
    lastTrigger.type = 'button';

    firstTrigger.focus = () => {
      focusedFirstTrigger = true;
    };
    firstTrigger.click = () => {
      clickedFirstTrigger = true;
    };
    lastTrigger.focus = () => {
      focusedLastTrigger = true;
    };
    lastTrigger.click = () => {
      clickedLastTrigger = true;
    };

    list.append(firstTrigger, middleTrigger, lastTrigger);
    document.body.append(list);

    const { result } = renderHook(() =>
      useTabsTriggerHandlers({
        disabled: false,
        onClick: undefined,
        onKeyDown: undefined,
        onValueChange: () => {},
        value: 'password',
      }),
    );

    act(() => {
      result.current.handleKeyDown({
        currentTarget: middleTrigger,
        defaultPrevented: false,
        key: 'Home',
        preventDefault: () => {},
      } as unknown as KeyboardEvent<HTMLButtonElement>);
    });

    act(() => {
      result.current.handleKeyDown({
        currentTarget: middleTrigger,
        defaultPrevented: false,
        key: 'End',
        preventDefault: () => {},
      } as unknown as KeyboardEvent<HTMLButtonElement>);
    });

    expect(focusedFirstTrigger).toBe(true);
    expect(clickedFirstTrigger).toBe(true);
    expect(focusedLastTrigger).toBe(true);
    expect(clickedLastTrigger).toBe(true);

    list.remove();
  });
});
