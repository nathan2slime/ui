'use client';

import { useEffect, useState } from 'react';
import { resolveSystemTheme } from '@/theme/theme-helpers';
import type { UiBuiltinThemeName } from '@/types/theme';

/**
 * Tracks the current operating-system color scheme for `system` theme mode.
 *
 * @returns The active built-in theme resolved from the browser preference.
 */
export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState<UiBuiltinThemeName>(() =>
    resolveSystemTheme(),
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return systemTheme;
};
