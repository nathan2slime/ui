import type { UiTheme } from '@/types/theme';

/**
 * The default immutable theme used by the library components.
 *
 * Consumers can pass a compatible theme to `ThemeProvider` when an application
 * needs to override the default tokens.
 */
export const theme: UiTheme = {
  navy: '#17204d',
  ink: '#243064',
  paper: '#fffaf5',
  pink: '#ff8dce',
  sky: '#73d7ff',
  mint: '#83e39b',
  yellow: '#ffd75e',
  fontFamilies: {
    control: "'Baloo 2', 'Trebuchet MS', ui-rounded, sans-serif",
    body: "'Nunito Sans', ui-sans-serif, sans-serif",
  },
  colorPalettes: {
    default: {
      ghost: { foreground: '#243064', hoverBackground: '#e7f7ff' },
      outline: {
        foreground: '#243064',
        border: '#243064',
        hoverBackground: '#e7f7ff',
        hoverBorder: '#17204d',
      },
      solid: {
        background: '#73d7ff',
        backgroundActive: '#42b9e9',
        backgroundHover: '#a5e9ff',
        border: '#243064',
        borderHover: '#17204d',
        foreground: '#17204d',
      },
    },
    success: {
      ghost: { foreground: '#1d6848', hoverBackground: '#e8ffed' },
      outline: {
        foreground: '#1d6848',
        border: '#1d6848',
        hoverBackground: '#e8ffed',
        hoverBorder: '#155037',
      },
      solid: {
        background: '#83e39b',
        backgroundActive: '#5acb78',
        backgroundHover: '#b4f5c1',
        border: '#1d6848',
        borderHover: '#155037',
        foreground: '#173e32',
      },
    },
    warning: {
      ghost: { foreground: '#76510b', hoverBackground: '#fff4c7' },
      outline: {
        foreground: '#76510b',
        border: '#76510b',
        hoverBackground: '#fff4c7',
        hoverBorder: '#523606',
      },
      solid: {
        background: '#ffd75e',
        backgroundActive: '#f0b936',
        backgroundHover: '#ffe990',
        border: '#76510b',
        borderHover: '#523606',
        foreground: '#3d2b07',
      },
    },
    danger: {
      ghost: { foreground: '#a52c70', hoverBackground: '#ffe8f7' },
      outline: {
        foreground: '#a52c70',
        border: '#a52c70',
        hoverBackground: '#ffe8f7',
        hoverBorder: '#7c1f54',
      },
      solid: {
        background: '#ff8dce',
        backgroundActive: '#eb62b0',
        backgroundHover: '#ffb6e2',
        border: '#a52c70',
        borderHover: '#7c1f54',
        foreground: '#57183d',
      },
    },
  },
};
