'use client';

import {
  type CSSProperties,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type {
  UiBuiltinThemeName,
  UiThemeColorTokens,
  UiThemeContextValue,
  UiThemeDefinition,
  UiThemeName,
  UiThemeProviderProps,
} from '@/types/theme';

type ThemeStyle = CSSProperties & Partial<Record<`--${string}`, string>>;

const lightThemeColors: UiThemeColorTokens = {
  accentError: '#E57373',
  accentErrorActive: '#E57373',
  accentErrorHover: '#E57373',
  accentErrorSubtle: '#ffebee',
  accentSuccess: '#9dbf9e',
  accentSuccessActive: '#7c9d7d',
  accentSuccessHover: '#8cae8d',
  accentSuccessSubtle: '#e8f5e9',
  accentWarning: '#d4af37',
  accentWarningActive: '#b0912d',
  accentWarningHover: '#c2a032',
  accentWarningSubtle: '#fff9e6',
  borderAccentStrong: '#256d91',
  borderAccentSubtle: 'rgba(255, 255, 255, 0.14)',
  borderInteractiveMuted: '#c0cad6',
  borderNeutralMuted: 'rgba(192, 202, 214, 0.32)',
  borderStatusInfoSubtle: 'rgba(71, 180, 235, 0.18)',
  borderStatusSuccessSubtle: 'rgba(157, 191, 158, 0.22)',
  borderStatusWarningSubtle: 'rgba(212, 175, 55, 0.22)',
  borderSubtle: '#c0cad6',
  brandPrimary: '#47b4eb',
  brandPrimaryActive: '#338fbc',
  brandPrimaryHover: '#3da1d4',
  brandPrimaryStrong: '#256d91',
  cardAccentForeground: '#fdfdfd',
  cardBackground: '#fdfdfd',
  cardBorder: '#c0cad6',
  cardBorderHover: '#47b4eb',
  cardForeground: '#2c3e50',
  cardMutedForeground: '#c0cad6',
  cardSubtleBorder: '#c0cad6',
  effectBrandFocus: 'rgba(71, 180, 235, 0.18)',
  effectBrandGlow: 'rgba(71, 180, 235, 0.25)',
  focusRingColor: 'rgba(71, 180, 235, 0.18)',
  foregroundMuted: 'rgba(44, 62, 80, 0.82)',
  foregroundMutedSubtle: 'rgba(44, 62, 80, 0.7)',
  foregroundOnAccentMuted: 'rgba(253, 253, 253, 0.82)',
  inputAdornmentForeground: '#c0cad6',
  inputBackground: '#fdfdfd',
  inputBorder: '#c0cad6',
  inputDisabledBackground: '#f8fafc',
  inputDisabledBorder: '#c0cad6',
  inputDisabledForeground: '#c0cad6',
  inputErrorBackground: '#ffebee',
  inputErrorBorder: '#E57373',
  inputErrorForeground: '#E57373',
  inputFocusBorder: '#47b4eb',
  inputForeground: '#2c3e50',
  inputHelperForeground: '#2c3e50',
  inputMessageForeground: '#47b4eb',
  inputPlaceholder: '#c0cad6',
  inputSuccessBackground: '#e8f5e9',
  inputSuccessBorder: '#9dbf9e',
  inputSuccessForeground: '#9dbf9e',
  inputWarningBackground: '#fff9e6',
  inputWarningBorder: '#d4af37',
  inputWarningForeground: '#d4af37',
  surfaceAccentStrong: '#256d91',
  surfaceBase: '#fdfdfd',
  surfaceInteractiveMuted: '#e2e8f0',
  surfaceMuted: '#e2e8f0',
  surfaceStatusInfoSubtle: 'rgba(71, 180, 235, 0.12)',
  surfaceSubtle: '#f8fafc',
  surfaceTintedAccentHover: 'rgba(71, 180, 235, 0.08)',
  textPrimary: '#2c3e50',
};

const darkThemeColors: UiThemeColorTokens = {
  accentError: '#f28b82',
  accentErrorActive: '#de6f67',
  accentErrorHover: '#e67c73',
  accentErrorSubtle: '#3d2226',
  accentSuccess: '#9cc8a0',
  accentSuccessActive: '#7fb184',
  accentSuccessHover: '#8ebf93',
  accentSuccessSubtle: '#1f3325',
  accentWarning: '#d8b95a',
  accentWarningActive: '#c39f3f',
  accentWarningHover: '#ceab4a',
  accentWarningSubtle: '#3a3117',
  borderAccentStrong: '#6ebce3',
  borderAccentSubtle: 'rgba(253, 253, 253, 0.18)',
  borderInteractiveMuted: '#405066',
  borderNeutralMuted: 'rgba(135, 156, 180, 0.28)',
  borderStatusInfoSubtle: 'rgba(110, 188, 227, 0.28)',
  borderStatusSuccessSubtle: 'rgba(156, 200, 160, 0.3)',
  borderStatusWarningSubtle: 'rgba(216, 185, 90, 0.3)',
  borderSubtle: '#405066',
  brandPrimary: '#6ebce3',
  brandPrimaryActive: '#4f9bc2',
  brandPrimaryHover: '#5dadd5',
  brandPrimaryStrong: '#2d7397',
  cardAccentForeground: '#f4f7fb',
  cardBackground: '#16202b',
  cardBorder: '#405066',
  cardBorderHover: '#6ebce3',
  cardForeground: '#f4f7fb',
  cardMutedForeground: '#93a4b8',
  cardSubtleBorder: '#405066',
  effectBrandFocus: 'rgba(110, 188, 227, 0.26)',
  effectBrandGlow: 'rgba(110, 188, 227, 0.3)',
  focusRingColor: 'rgba(110, 188, 227, 0.26)',
  foregroundMuted: 'rgba(244, 247, 251, 0.82)',
  foregroundMutedSubtle: 'rgba(244, 247, 251, 0.68)',
  foregroundOnAccentMuted: 'rgba(244, 247, 251, 0.9)',
  inputAdornmentForeground: '#93a4b8',
  inputBackground: '#111923',
  inputBorder: '#405066',
  inputDisabledBackground: '#1b2733',
  inputDisabledBorder: '#314153',
  inputDisabledForeground: '#728397',
  inputErrorBackground: '#2f1b20',
  inputErrorBorder: '#f28b82',
  inputErrorForeground: '#f5a39b',
  inputFocusBorder: '#6ebce3',
  inputForeground: '#f4f7fb',
  inputHelperForeground: '#d4dde7',
  inputMessageForeground: '#6ebce3',
  inputPlaceholder: '#728397',
  inputSuccessBackground: '#1f3325',
  inputSuccessBorder: '#9cc8a0',
  inputSuccessForeground: '#b8debc',
  inputWarningBackground: '#3a3117',
  inputWarningBorder: '#d8b95a',
  inputWarningForeground: '#ebd07a',
  surfaceAccentStrong: '#2d7397',
  surfaceBase: '#0f1720',
  surfaceInteractiveMuted: '#314153',
  surfaceMuted: '#233140',
  surfaceStatusInfoSubtle: 'rgba(110, 188, 227, 0.16)',
  surfaceSubtle: '#16202b',
  surfaceTintedAccentHover: 'rgba(110, 188, 227, 0.12)',
  textPrimary: '#f4f7fb',
};

const builtinThemes: Record<UiBuiltinThemeName, UiThemeDefinition> = {
  dark: {
    colors: darkThemeColors,
  },
  light: {
    colors: lightThemeColors,
  },
};

const themeContext = createContext<UiThemeContextValue | null>(null);

const camelToKebabCase = (value: string) => {
  return value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
};

const resolveSystemTheme = (): UiBuiltinThemeName => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const getResolvedThemeName = (
  theme: UiThemeName,
  systemTheme: UiBuiltinThemeName,
) => {
  return theme === 'system' ? systemTheme : theme;
};

const getResolvedThemeDefinition = (
  themeName: string,
  themes: UiThemeProviderProps['themes'],
) => {
  return themes?.[themeName] ?? builtinThemes[themeName as UiBuiltinThemeName];
};

const getThemeStyle = (tokens: UiThemeColorTokens): ThemeStyle => {
  return Object.entries(tokens).reduce<ThemeStyle>((styles, [token, value]) => {
    if (!value) {
      return styles;
    }

    styles[`--colors-${camelToKebabCase(token)}`] = value;

    if (token === 'focusRingColor') {
      styles['--colors-focus-ring-color'] = value;
    }

    return styles;
  }, {});
};

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

  const resolvedTheme = getResolvedThemeName(theme, systemTheme);

  const resolvedTokens = useMemo(() => {
    const resolvedThemeDefinition = getResolvedThemeDefinition(
      resolvedTheme,
      themes,
    );

    return {
      ...lightThemeColors,
      ...resolvedThemeDefinition?.colors,
      ...tokens,
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
        data-ui-theme={resolvedTheme}
        style={themeStyle}
      >
        {children}
      </div>
    </themeContext.Provider>
  );
};

/**
 * Reads the currently resolved library theme from the nearest provider.
 */
export const useUiTheme = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error('useUiTheme must be used within UiThemeProvider.');
  }

  return context;
};
