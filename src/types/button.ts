import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

/**
 * Visual variants available for the button surface.
 *
 * @example
 * ```ts
 * const variant: ButtonVariant = 'solid';
 * ```
 */
export type ButtonVariant = 'solid' | 'outline' | 'ghost';

/**
 * Semantic color variants available for action components.
 *
 * @example
 * ```ts
 * const color: ButtonColor = 'default';
 * ```
 */
export type ButtonColor = 'default' | 'success' | 'warning' | 'danger';

/**
 * Supported size presets for the button.
 *
 * @example
 * ```ts
 * const size: ButtonSize = 'icon';
 * ```
 */
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

/**
 * Props accepted by the reusable button component.
 */
export type ButtonProps = PropsWithChildren<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'color'> &
    Partial<{
      /**
       * Applies a semantic color treatment to the button.
       * @default 'default'
       */
      color: ButtonColor;
      /**
       * Expands the button to fill the width of its container.
       * @default false
       */
      fullWidth: boolean;
      /**
       * Controls the button height and internal spacing.
       * @default 'md'
       */
      size: ButtonSize;
      /**
       * Defines the visual style used by the button.
       * @default 'solid'
       */
      variant: ButtonVariant;
    }>
>;
