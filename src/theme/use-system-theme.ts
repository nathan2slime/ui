'use client';

import { useEffect, useState } from 'react';
import { resolveSystemTheme } from '@/theme/theme-helpers';
import type { UiBuiltinThemeName } from '@/types/theme';

type LegacyMediaQueryListener = (
  this: MediaQueryList,
  event: MediaQueryListEvent,
) => unknown;

/**
 * Tracks the current operating-system color scheme for `system` theme mode.
 *
 * @param enabled Enables system theme tracking and media query subscriptions.
 * @returns The active built-in theme resolved from the browser preference.
 */
export const useSystemTheme = (enabled = true) => {
  const [systemTheme, setSystemTheme] = useState<UiBuiltinThemeName>(() =>
    enabled ? resolveSystemTheme() : 'light',
  );

  useEffect(() => {
    if (!enabled) {
      setSystemTheme('light');
      return;
    }

    if (
      typeof window === 'undefined' ||
      typeof window.matchMedia !== 'function'
    ) {
      setSystemTheme('light');
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    handleChange();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }

    const legacyListener: LegacyMediaQueryListener = () => {
      handleChange();
    };

    mediaQuery.addListener(legacyListener);

    return () => {
      mediaQuery.removeListener(legacyListener);
    };
  }, [enabled]);

  return systemTheme;
};
