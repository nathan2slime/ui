import type { HTMLAttributes, PropsWithChildren } from 'react';

import type { InputSize } from '@/types/input';

/**
 * Semantic colors supported by the shared helper text component.
 *
 * @example
 * ```ts
 * const color: HelperTextColor = 'danger';
 * ```
 */
export type HelperTextColor = 'default' | 'success' | 'warning' | 'danger';

/**
 * Props accepted by the shared helper text component.
 */
export type HelperTextProps = PropsWithChildren<
  Omit<HTMLAttributes<HTMLSpanElement>, 'color'> &
    Partial<{
      /**
       * Aligns the helper text scale with the related field.
       * @default 'md'
       */
      size: InputSize;
      /**
       * Applies the semantic color used by the helper text.
       * @default 'default'
       */
      color: HelperTextColor;
    }>
>;
