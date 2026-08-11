import type { ButtonColor } from '@/types/button';

/**
 * Describes the semantic color treatments used by the button.
 */
export type UiColorPalette = {
  readonly ghost: {
    readonly foreground: string;
    readonly hoverBackground: string;
  };
  readonly outline: {
    readonly foreground: string;
    readonly border: string;
    readonly hoverBackground: string;
    readonly hoverBorder: string;
  };
  readonly solid: {
    readonly background: string;
    readonly backgroundActive: string;
    readonly backgroundHover: string;
    readonly border: string;
    readonly borderHover: string;
    readonly foreground: string;
  };
};

/**
 * Font stacks used by the library's styled components.
 */
export type UiFontFamilies = {
  /** Rounded display stack used by prominent interactive controls. */
  readonly control: string;
  /** Readable body stack used by labels, tabs, helpers, and popup items. */
  readonly body: string;
};

/**
 * Theme shape consumed by the library's styled-components primitives.
 */
export type UiTheme = {
  /** Shared dark outline token used by tactile controls and popup surfaces. */
  readonly navy?: string;
  /** Shared readable foreground token for interactive content. */
  readonly ink?: string;
  /** Shared warm surface token for elevated controls. */
  readonly paper?: string;
  /** Shared pink accent token for danger treatments. */
  readonly pink?: string;
  /** Shared sky accent token for default treatments. */
  readonly sky?: string;
  /** Shared mint accent token for success treatments. */
  readonly mint?: string;
  /** Shared yellow accent token for warning treatments. */
  readonly yellow?: string;
  /** Font stacks applied by the component styles. */
  readonly fontFamilies: UiFontFamilies;
  readonly colorPalettes: Readonly<Record<ButtonColor, UiColorPalette>>;
};
