import type { CSSProperties } from 'react';
import { builtinThemes, lightThemeColors } from '@/theme/theme-definitions';
import type {
  UiBuiltinThemeName,
  UiThemeColorTokens,
  UiThemeName,
  UiThemeProviderProps,
} from '@/types/theme';

type ThemeStyle = CSSProperties & Partial<Record<`--${string}`, string>>;
type DerivedThemeColorTokens = Record<string, string>;

export type { ThemeStyle };

const camelToKebabCase = (value: string) => {
  return value.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`);
};

export const resolveSystemTheme = (): UiBuiltinThemeName => {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const getResolvedThemeName = (
  theme: UiThemeName,
  systemTheme: UiBuiltinThemeName,
) => {
  return theme === 'system' ? systemTheme : theme;
};

export const getResolvedThemeDefinition = (
  themeName: string,
  themes: UiThemeProviderProps['themes'],
) => {
  return themes?.[themeName] ?? builtinThemes[themeName as UiBuiltinThemeName];
};

export const getThemeStyle = (tokens: UiThemeColorTokens): ThemeStyle => {
  return Object.entries(tokens).reduce<ThemeStyle>((styles, [token, value]) => {
    if (!value) {
      return styles;
    }

    styles[`--colors-${camelToKebabCase(token)}`] = value;

    return styles;
  }, {});
};

export const getDerivedThemeTokens = (
  tokens: UiThemeColorTokens,
): DerivedThemeColorTokens => {
  const surfaceBase = tokens.surfaceBase ?? lightThemeColors.surfaceBase ?? '';
  const surfaceSubtle =
    tokens.surfaceSubtle ?? lightThemeColors.surfaceSubtle ?? '';
  const brandPrimary =
    tokens.brandPrimary ?? lightThemeColors.brandPrimary ?? '';
  const brandPrimaryHover =
    tokens.brandPrimaryHover ?? lightThemeColors.brandPrimaryHover ?? '';
  const brandPrimaryActive =
    tokens.brandPrimaryActive ?? lightThemeColors.brandPrimaryActive ?? '';
  const accentSuccess =
    tokens.accentSuccess ?? lightThemeColors.accentSuccess ?? '';
  const accentSuccessHover =
    tokens.accentSuccessHover ?? lightThemeColors.accentSuccessHover ?? '';
  const accentSuccessActive =
    tokens.accentSuccessActive ?? lightThemeColors.accentSuccessActive ?? '';
  const accentSuccessSubtle =
    tokens.accentSuccessSubtle ?? lightThemeColors.accentSuccessSubtle ?? '';
  const accentWarning =
    tokens.accentWarning ?? lightThemeColors.accentWarning ?? '';
  const accentWarningHover =
    tokens.accentWarningHover ?? lightThemeColors.accentWarningHover ?? '';
  const accentWarningActive =
    tokens.accentWarningActive ?? lightThemeColors.accentWarningActive ?? '';
  const accentWarningSubtle =
    tokens.accentWarningSubtle ?? lightThemeColors.accentWarningSubtle ?? '';
  const accentError = tokens.accentError ?? lightThemeColors.accentError ?? '';
  const accentErrorHover =
    tokens.accentErrorHover ?? lightThemeColors.accentErrorHover ?? '';
  const accentErrorActive =
    tokens.accentErrorActive ?? lightThemeColors.accentErrorActive ?? '';
  const accentErrorSubtle =
    tokens.accentErrorSubtle ?? lightThemeColors.accentErrorSubtle ?? '';
  const borderSubtle =
    tokens.borderSubtle ?? lightThemeColors.borderSubtle ?? '';
  const textPrimary = tokens.textPrimary ?? lightThemeColors.textPrimary ?? '';

  return {
    actionGhostPrimaryBackgroundHover: surfaceSubtle,
    actionGhostPrimaryBorder: 'transparent',
    actionGhostPrimaryForeground: brandPrimary,
    actionGhostSuccessBackgroundHover: accentSuccessSubtle,
    actionGhostSuccessBorder: 'transparent',
    actionGhostSuccessForeground: accentSuccess,
    actionGhostWarningBackgroundHover: accentWarningSubtle,
    actionGhostWarningBorder: 'transparent',
    actionGhostWarningForeground: accentWarning,
    actionGhostErrorBackgroundHover: accentErrorSubtle,
    actionGhostErrorBorder: 'transparent',
    actionGhostErrorForeground: accentError,
    actionOutlinePrimaryBackground: surfaceBase,
    actionOutlinePrimaryBackgroundHover: surfaceSubtle,
    actionOutlinePrimaryBorder: borderSubtle,
    actionOutlinePrimaryBorderHover: brandPrimary,
    actionOutlinePrimaryForeground: brandPrimary,
    actionOutlineSuccessBackground: surfaceBase,
    actionOutlineSuccessBackgroundHover: accentSuccessSubtle,
    actionOutlineSuccessBorder: accentSuccess,
    actionOutlineSuccessBorderHover: accentSuccessHover,
    actionOutlineSuccessForeground: accentSuccess,
    actionOutlineWarningBackground: surfaceBase,
    actionOutlineWarningBackgroundHover: accentWarningSubtle,
    actionOutlineWarningBorder: accentWarning,
    actionOutlineWarningBorderHover: accentWarningHover,
    actionOutlineWarningForeground: accentWarning,
    actionOutlineErrorBackground: surfaceBase,
    actionOutlineErrorBackgroundHover: accentErrorSubtle,
    actionOutlineErrorBorder: accentError,
    actionOutlineErrorBorderHover: accentErrorHover,
    actionOutlineErrorForeground: accentError,
    actionIconPrimaryBackground: surfaceBase,
    actionIconPrimaryBackgroundHover: surfaceSubtle,
    actionIconPrimaryBorder: borderSubtle,
    actionIconPrimaryBorderHover: brandPrimary,
    actionIconPrimaryForeground: brandPrimary,
    actionIconSuccessBackground: surfaceBase,
    actionIconSuccessBackgroundHover: accentSuccessSubtle,
    actionIconSuccessBorder: accentSuccess,
    actionIconSuccessBorderHover: accentSuccessHover,
    actionIconSuccessForeground: accentSuccess,
    actionIconWarningBackground: surfaceBase,
    actionIconWarningBackgroundHover: accentWarningSubtle,
    actionIconWarningBorder: accentWarning,
    actionIconWarningBorderHover: accentWarningHover,
    actionIconWarningForeground: accentWarning,
    actionIconErrorBackground: surfaceBase,
    actionIconErrorBackgroundHover: accentErrorSubtle,
    actionIconErrorBorder: accentError,
    actionIconErrorBorderHover: accentErrorHover,
    actionIconErrorForeground: accentError,
    actionSolidPrimaryBackground: brandPrimary,
    actionSolidPrimaryBackgroundHover: brandPrimaryHover,
    actionSolidPrimaryBackgroundActive: brandPrimaryActive,
    actionSolidPrimaryBorder: brandPrimary,
    actionSolidPrimaryBorderHover: brandPrimaryHover,
    actionSolidPrimaryForeground: surfaceBase,
    actionSolidSuccessBackground: accentSuccess,
    actionSolidSuccessBackgroundHover: accentSuccessHover,
    actionSolidSuccessBackgroundActive: accentSuccessActive,
    actionSolidSuccessBorder: accentSuccess,
    actionSolidSuccessBorderHover: accentSuccessHover,
    actionSolidSuccessForeground: textPrimary,
    actionSolidWarningBackground: accentWarning,
    actionSolidWarningBackgroundHover: accentWarningHover,
    actionSolidWarningBackgroundActive: accentWarningActive,
    actionSolidWarningBorder: accentWarning,
    actionSolidWarningBorderHover: accentWarningHover,
    actionSolidWarningForeground: textPrimary,
    actionSolidErrorBackground: accentError,
    actionSolidErrorBackgroundHover: accentErrorHover,
    actionSolidErrorBackgroundActive: accentErrorActive,
    actionSolidErrorBorder: accentError,
    actionSolidErrorBorderHover: accentErrorHover,
    actionSolidErrorForeground: surfaceBase,
  };
};
