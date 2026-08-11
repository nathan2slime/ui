import type { PropsWithChildren } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { theme as defaultTheme } from '@/theme/theme';
import type { UiTheme } from '@/types/theme';

/**
 * Props accepted by the library theme provider.
 */
export type ThemeProviderProps = PropsWithChildren<{
  /** Optional application theme override. Defaults to the library `theme`. */
  theme?: UiTheme;
}>;

/**
 * Provides a styled-components theme, using the library default when no
 * explicit theme is supplied.
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider = ({
  children,
  theme: providedTheme,
}: ThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={providedTheme ?? defaultTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
