import { describe, expect, test } from '@rstest/core';
import { renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';

import { UiThemeProvider } from '@/theme/ui-theme-provider';
import { useUiTheme } from '@/theme/use-ui-theme';

type WrapperProps = PropsWithChildren<{
  theme?: 'light' | 'dark';
}>;

const ThemeWrapper = ({ children, theme = 'dark' }: WrapperProps) => {
  return <UiThemeProvider theme={theme}>{children}</UiThemeProvider>;
};

describe('useUiTheme', () => {
  test('throws when used outside the theme provider', async () => {
    expect(() => renderHook(() => useUiTheme())).toThrow(
      'useUiTheme must be used within UiThemeProvider.',
    );
  });

  test('returns the nearest provider context', async () => {
    const { result } = renderHook(() => useUiTheme(), {
      wrapper: ThemeWrapper,
    });

    expect(result.current.theme).toBe('dark');
    expect(result.current.resolvedTheme).toBe('dark');
    expect(result.current.tokens.brandPrimary).toBe('#6ebce3');
  });
});
