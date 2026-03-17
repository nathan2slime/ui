import { describe, expect, test } from '@rstest/core';
import { builtinThemes } from '@/theme/theme-definitions';
import {
  getDerivedThemeTokens,
  getResolvedThemeDefinition,
  getResolvedThemeName,
  getThemeStyle,
  resolveSystemTheme,
} from '@/theme/theme-helpers';

type MatchMediaStub = (query: string) => MediaQueryList;

const withMockedMatchMedia = (
  matchMedia: MatchMediaStub,
  callback: VoidFunction,
) => {
  const originalMatchMedia = window.matchMedia;
  window.matchMedia = matchMedia;

  try {
    callback();
  } finally {
    window.matchMedia = originalMatchMedia;
  }
};

describe('theme-helpers', () => {
  test('resolves the active built-in theme from the browser preference', async () => {
    withMockedMatchMedia(
      () => ({
        addEventListener: () => {},
        addListener: () => {},
        dispatchEvent: () => true,
        matches: true,
        media: '(prefers-color-scheme: dark)',
        onchange: null,
        removeEventListener: () => {},
        removeListener: () => {},
      }),
      () => {
        expect(resolveSystemTheme()).toBe('dark');
      },
    );
  });

  test('returns the explicit theme unless the system mode is selected', async () => {
    expect(getResolvedThemeName('system', 'dark')).toBe('dark');
    expect(getResolvedThemeName('sunrise', 'light')).toBe('sunrise');
  });

  test('prefers custom theme definitions and falls back to built-in ones', async () => {
    const customTheme = {
      colors: {
        brandPrimary: '#f28c28',
      },
    };

    expect(
      getResolvedThemeDefinition('sunrise', {
        sunrise: customTheme,
      }),
    ).toBe(customTheme);
    expect(getResolvedThemeDefinition('dark', undefined)).toBe(
      builtinThemes.dark,
    );
  });

  test('maps token names to CSS variables and skips empty token values', async () => {
    expect(
      getThemeStyle({
        brandPrimary: '#47b4eb',
        focusRingColor: 'rgba(71, 180, 235, 0.18)',
        inputForeground: '',
      }),
    ).toEqual({
      '--colors-brand-primary': '#47b4eb',
      '--colors-focus-ring-color': 'rgba(71, 180, 235, 0.18)',
    });
  });

  test('derives semantic action tokens from overrides and light theme fallbacks', async () => {
    expect(
      getDerivedThemeTokens({
        brandPrimary: '#f28c28',
        brandPrimaryActive: '#d86f0f',
        brandPrimaryHover: '#e97f19',
      }),
    ).toMatchObject({
      actionGhostPrimaryForeground: '#f28c28',
      actionOutlinePrimaryBackground: '#fdfdfd',
      actionOutlinePrimaryBorder: '#c0cad6',
      actionSolidPrimaryBackground: '#f28c28',
      actionSolidPrimaryBackgroundActive: '#d86f0f',
      actionSolidPrimaryBackgroundHover: '#e97f19',
      actionSolidSuccessBackground: '#9dbf9e',
      actionSolidWarningForeground: '#2c3e50',
    });
  });
});
