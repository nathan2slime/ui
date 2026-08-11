import { afterEach, describe, expect, test } from '@rstest/core';
import { cleanup, render, screen } from '@testing-library/react';
import styled from 'styled-components';

import { ThemeProvider, theme } from '@/theme';
import type { UiTheme } from '@/types/theme';

const ThemedConsumer = styled.div.attrs<{ 'data-theme-navy'?: string }>(
  ({ ...props }) => ({
    'data-theme-navy': (props as unknown as { theme: UiTheme }).theme.navy,
  }),
)``;

afterEach(() => cleanup());

describe('ThemeProvider', () => {
  test('provides the library theme by default and preserves the uiTheme alias', () => {
    render(
      <ThemeProvider>
        <ThemedConsumer data-testid="themed-consumer" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('themed-consumer')).toHaveAttribute(
      'data-theme-navy',
      theme.navy,
    );
  });

  test('provides an explicit theme override', () => {
    const customTheme: UiTheme = {
      ...theme,
      navy: '#101010',
    };

    render(
      <ThemeProvider theme={customTheme}>
        <ThemedConsumer data-testid="themed-consumer" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('themed-consumer')).toHaveAttribute(
      'data-theme-navy',
      customTheme.navy,
    );
  });
});
