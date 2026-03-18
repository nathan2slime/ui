import { describe, expect, test } from '@rstest/core';
import { act, renderHook } from '@testing-library/react';

import { useSystemTheme } from '@/theme/use-system-theme';

type MatchMediaController = {
  listenerCount: () => number;
  restore: VoidFunction;
  setMatches: (matches: boolean) => void;
};

type MatchMediaOptions = {
  supportsEventListener?: boolean;
};

type LegacyMediaQueryListener = (
  this: MediaQueryList,
  event: MediaQueryListEvent,
) => unknown;
type MediaQueryCallback = (event: MediaQueryListEvent) => void;

const mockMatchMedia = (
  initialMatches: boolean,
  options?: MatchMediaOptions,
): MatchMediaController => {
  const originalMatchMedia = window.matchMedia;
  const listeners = new Map<unknown, MediaQueryCallback>();
  const supportsEventListener = options?.supportsEventListener ?? true;

  const mediaQueryList: MediaQueryList = {
    addEventListener: supportsEventListener
      ? (_event: string, listener: EventListenerOrEventListenerObject) => {
          listeners.set(listener, (event) => {
            if (typeof listener === 'function') {
              listener.call(mediaQueryList, event);
              return;
            }

            listener.handleEvent(event);
          });
        }
      : (undefined as unknown as MediaQueryList['addEventListener']),
    addListener: (listener: LegacyMediaQueryListener) => {
      listeners.set(listener, (event) => {
        listener.call(mediaQueryList, event);
      });
    },
    dispatchEvent: () => true,
    matches: initialMatches,
    media: '(prefers-color-scheme: dark)',
    onchange: null,
    removeEventListener: supportsEventListener
      ? (_event: string, listener: EventListenerOrEventListenerObject) => {
          listeners.delete(listener);
        }
      : (undefined as unknown as MediaQueryList['removeEventListener']),
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

  test('uses legacy MediaQueryList listeners when addEventListener is unavailable', async () => {
    const matchMediaController = mockMatchMedia(false, {
      supportsEventListener: false,
    });

    const { result, unmount } = renderHook(() => useSystemTheme());

    expect(result.current).toBe('light');
    expect(matchMediaController.listenerCount()).toBe(1);

    act(() => {
      matchMediaController.setMatches(true);
    });

    expect(result.current).toBe('dark');

    unmount();

    expect(matchMediaController.listenerCount()).toBe(0);

    matchMediaController.restore();
  });

  test('skips subscription when disabled', async () => {
    const matchMediaController = mockMatchMedia(true);

    const { result } = renderHook(() => useSystemTheme(false));

    expect(result.current).toBe('light');
    expect(matchMediaController.listenerCount()).toBe(0);

    matchMediaController.restore();
  });
});
