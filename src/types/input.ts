import type { InputHTMLAttributes, ReactNode } from 'react';

import type { HelperTextColor } from '@/types/helper-text';

/**
 * Semantic colors supported by the input component.
 *
 * @example
 * ```ts
 * const color: InputColor = 'success';
 * ```
 */
export type InputColor = 'default' | 'success' | 'warning' | 'danger';

/**
 * Supported size presets for the input.
 *
 * @example
 * ```ts
 * const size: InputSize = 'lg';
 * ```
 */
export type InputSize = 'sm' | 'md' | 'lg';

/**
 * Additional optional props supported by the input component.
 */
export type InputOptionalProps = Partial<{
  /**
   * Renders content at the end of the input field.
   */
  endContent: ReactNode;
  /**
   * Deprecated alias for `endContent`.
   */
  endAdornment: ReactNode;
  /**
   * Displays supporting text below the input.
   */
  helperText: ReactNode;
  /**
   * Sets the semantic color treatment of the helper text.
   * @default 'default'
   */
  helperColor: HelperTextColor;
  /**
   * Renders content at the start of the input field.
   */
  startContent: ReactNode;
  /**
   * Deprecated alias for `startContent`.
   */
  startAdornment: ReactNode;
  /**
   * Applies the semantic color treatment of the input.
   * @default 'default'
   */
  color: InputColor;
  /**
   * Controls the input spacing and typography scale.
   * @default 'md'
   */
  size: InputSize;
}>;

/**
 * Props accepted by the reusable input component.
 */
export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'size'
> &
  InputOptionalProps;
