import { describe, expect, test } from '@rstest/core';
import { act, render, screen } from '@testing-library/react';
import type { PropsWithChildren } from 'react';

import { Button } from '@/components/button';
import { UiThemeProvider, useUiTheme } from '@/theme';

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
    addListener: (listener: LegacyMediaQueryListener) => {
      listeners.set(listener, (event) => {
        listener.call(mediaQueryList, event);
      });
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

const ThemeConsumer = ({ children }: PropsWithChildren) => {
  const theme = useUiTheme();

  return (
    <output data-resolved-theme={theme.resolvedTheme} data-theme={theme.theme}>
      {children}
    </output>
  );
};

describe('UiThemeProvider', () => {
  test('scopes Panda semantic color tokens for descendant components', async () => {
    render(
      <UiThemeProvider theme="dark">
        <Button>Dark action</Button>
      </UiThemeProvider>,
    );

    const button = screen.getByRole('button', { name: 'Dark action' });
    const themeScope = button.parentElement;

    expect(themeScope).toHaveAttribute('data-color-mode', 'dark');
    expect(themeScope).toHaveAttribute('data-ui-theme', 'dark');
    expect(themeScope).toHaveStyle({
      '--colors-brand-primary': '#6ebce3',
      '--colors-action-solid-primary-background': '#6ebce3',
      '--colors-action-outline-primary-border': '#405066',
    });
  });

  test('resolves system theme, merges named themes, and exposes context values', async () => {
    const matchMediaController = mockMatchMedia(false);

    render(
      <UiThemeProvider
        theme="system"
        themes={{
          sunrise: {
            colors: {
              brandPrimary: '#f28c28',
            },
          },
        }}
      >
        <ThemeConsumer>Theme context</ThemeConsumer>
      </UiThemeProvider>,
    );

    const themeScope = screen.getByText('Theme context').parentElement;
    const themeOutput = screen.getByText('Theme context');

    expect(themeScope).toHaveAttribute('data-color-mode', 'light');
    expect(themeScope).toHaveAttribute('data-ui-theme', 'light');
    expect(themeOutput).toHaveAttribute('data-theme', 'system');
    expect(themeOutput).toHaveAttribute('data-resolved-theme', 'light');

    matchMediaController.restore();
  });

  test('applies custom theme tokens and wrapper props', async () => {
    const matchMediaController = mockMatchMedia(true);

    render(
      <UiThemeProvider
        className="theme-shell"
        style={{ isolation: 'isolate' }}
        theme="sunrise"
        themes={{
          sunrise: {
            colors: {
              brandPrimary: '#f28c28',
              brandPrimaryActive: '#d86f0f',
              brandPrimaryHover: '#e97f19',
              surfaceBase: '#fff7ed',
              surfaceSubtle: '#ffedd5',
              borderSubtle: '#fdba74',
              textPrimary: '#7c2d12',
            },
          },
        }}
        tokens={{
          accentSuccess: '#4d7c0f',
          accentSuccessActive: '#3f6212',
          accentSuccessHover: '#65a30d',
          accentSuccessSubtle: '#ecfccb',
        }}
      >
        <Button>Sunrise action</Button>
      </UiThemeProvider>,
    );

    const button = screen.getByRole('button', { name: 'Sunrise action' });
    const themeScope = button.parentElement;

    expect(themeScope).toHaveClass('theme-shell');
    expect(themeScope).toHaveAttribute('data-color-mode', 'light');
    expect(themeScope).toHaveAttribute('data-ui-theme', 'sunrise');
    expect(themeScope).toHaveStyle({
      '--colors-brand-primary': '#f28c28',
      '--colors-accent-success': '#4d7c0f',
      '--colors-action-solid-success-background': '#4d7c0f',
      isolation: 'isolate',
    });

    expect(matchMediaController.listenerCount()).toBe(0);

    matchMediaController.restore();
  });

  test('updates the resolved theme when the system preference changes', async () => {
    const matchMediaController = mockMatchMedia(false);

    render(
      <UiThemeProvider theme="system">
        <ThemeConsumer>System theme</ThemeConsumer>
      </UiThemeProvider>,
    );

    const themeOutput = screen.getByText('System theme');

    expect(themeOutput).toHaveAttribute('data-resolved-theme', 'light');

    act(() => {
      matchMediaController.setMatches(true);
    });

    expect(themeOutput).toHaveAttribute('data-resolved-theme', 'dark');

    matchMediaController.restore();
  });
});
