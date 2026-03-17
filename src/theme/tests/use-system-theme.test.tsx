import { describe, expect, test } from '@rstest/core';
import { act, renderHook } from '@testing-library/react';

import { useSystemTheme } from '@/theme/use-system-theme';

type MatchMediaController = {
  listenerCount: () => number;
  restore: VoidFunction;
  setMatches: (matches: boolean) => void;
};

type LegacyMediaQueryListener = (
  this: MediaQueryList,
  event: MediaQueryListEvent,
) => unknown;
type MediaQueryCallback = (event: MediaQueryListEvent) => void;

const mockMatchMedia = (initialMatches: boolean): MatchMediaController => {
  const originalMatchMedia = window.matchMedia;
  const listeners = new Map<unknown, MediaQueryCallback>();

  const mediaQueryList: MediaQueryList = {
    addEventListener: (
      _event: string,
      listener: EventListenerOrEventListenerObject,
    ) => {
      listeners.set(listener, (event) => {
        if (typeof listener === 'function') {
          listener.call(mediaQueryList, event);
          return;
        }

        listener.handleEvent(event);
      });
    },
    addListener: (listener: LegacyMediaQueryListener) => {
      listeners.set(listener, (event) => {
        listener.call(mediaQueryList, event);
      });
    },
    dispatchEvent: () => true,
    matches: initialMatches,
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    removeEventListener: (
      _event: string,
      listener: EventListenerOrEventListenerObject,
    ) => {
      listeners.delete(listener);
    },
    removeListener: (listener: LegacyMediaQueryListener) => {
      listeners.delete(listener);
    },
  };

  window.matchMedia = () => mediaQueryList;

  return {
    listenerCount: () => listeners.size,
    restore: () => {
      window.matchMedia = originalMatchMedia;
      listeners.clear();
    },
    setMatches: (matches) => {
      Object.defineProperty(mediaQueryList, 'matches', {
        configurable: true,
        value: matches,
      });

      const event = {
        matches,
        media: mediaQueryList.media,
      } as MediaQueryListEvent;

      listeners.forEach((listener) => {
        listener(event);
      });
    },
  };
};

describe('useSystemTheme', () => {
  test('reads the current system preference and updates on changes', async () => {
    const matchMediaController = mockMatchMedia(false);

    const { result } = renderHook(() => useSystemTheme());

    expect(result.current).toBe('light');

    act(() => {
      matchMediaController.setMatches(true);
    });

    expect(result.current).toBe('dark');

    matchMediaController.restore();
  });

  test('cleans up the media query listener on unmount', async () => {
    const matchMediaController = mockMatchMedia(true);

    const { unmount } = renderHook(() => useSystemTheme());

    expect(matchMediaController.listenerCount()).toBe(1);

    unmount();

    expect(matchMediaController.listenerCount()).toBe(0);

    matchMediaController.restore();
  });
});
