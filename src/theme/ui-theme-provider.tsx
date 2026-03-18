'use client';

import { useMemo } from 'react';
import { themeContext } from '@/theme/theme-context';
import { lightThemeColors } from '@/theme/theme-definitions';
import {
  getDerivedThemeTokens,
  getResolvedThemeDefinition,
  getResolvedThemeName,
  getThemeStyle,
  type ThemeStyle,
} from '@/theme/theme-helpers';
import { useSystemTheme } from '@/theme/use-system-theme';
import type { UiThemeContextValue, UiThemeProviderProps } from '@/types/theme';

/**
 * Applies library theme variables to a local subtree and supports built-in,
 * system, and custom named themes.
 *
 * @example
 * ```tsx
 * <UiThemeProvider theme="dark">
 *   <Button>Inspect</Button>
 * </UiThemeProvider>
 * ```
 */
export const UiThemeProvider = ({
  children,
  className,
  style,
  theme = 'light',
  themes,
  tokens,
}: UiThemeProviderProps) => {
  const systemTheme = useSystemTheme(theme === 'system');
  const resolvedTheme = getResolvedThemeName(theme, systemTheme);

  const resolvedTokens = useMemo(() => {
    const resolvedThemeDefinition = getResolvedThemeDefinition(
      resolvedTheme,
      themes,
    );

    const themeTokens = {
      ...lightThemeColors,
      ...resolvedThemeDefinition?.colors,
      ...tokens,
    };

    return {
      ...themeTokens,
      ...getDerivedThemeTokens(themeTokens),
    };
  }, [resolvedTheme, themes, tokens]);

  const contextValue = useMemo<UiThemeContextValue>(() => {
    return {
      resolvedTheme,
      theme,
      tokens: resolvedTokens,
    };
  }, [resolvedTheme, resolvedTokens, theme]);

  const themeStyle = useMemo<ThemeStyle>(() => {
    return {
      colorScheme: resolvedTheme === 'dark' ? 'dark' : 'light',
      display: 'contents',
      ...getThemeStyle(resolvedTokens),
      ...style,
    };
  }, [resolvedTheme, resolvedTokens, style]);

  return (
    <themeContext.Provider value={contextValue}>
      <div
        className={className}
        data-color-mode={resolvedTheme === 'dark' ? 'dark' : 'light'}
        data-ui-theme={resolvedTheme}
        style={themeStyle}
      >
        {children}
      </div>
    </themeContext.Provider>
  );
};
