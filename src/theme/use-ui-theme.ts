'use client';

import { useContext } from 'react';

import { themeContext } from '@/theme/theme-context';

/**
 * Reads the currently resolved library theme from the nearest provider.
 *
 * @returns The active theme context for the current subtree.
 * @throws Error When called outside of `UiThemeProvider`.
 */
export const useUiTheme = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error('useUiTheme must be used within UiThemeProvider.');
  }

  return context;
};
