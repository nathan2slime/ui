import type { HTMLAttributes, PropsWithChildren } from 'react';

/**
 * Visual color schemes supported by the badge component.
 *
 * @example
 * ```ts
 * const color: BadgeColor = 'warning';
 * ```
 */
export type BadgeColor = 'default' | 'success' | 'warning' | 'neutral';

/**
 * Visual presentation variants supported by the badge component.
 *
 * @example
 * ```ts
 * const variant: BadgeVariant = 'outline';
 * ```
 */
export type BadgeVariant = 'soft' | 'solid' | 'outline';

/**
 * Available badge sizes.
 *
 * @example
 * ```ts
 * const size: BadgeSize = 'sm';
 * ```
 */
export type BadgeSize = 'sm' | 'md';

/**
 * Props accepted by the badge component.
 */
export type BadgeProps = PropsWithChildren<
  Omit<HTMLAttributes<HTMLSpanElement>, 'color'> &
    Partial<{
      /**
       * Selects the semantic color palette applied to the badge.
       * @default 'default'
       */
      color: BadgeColor;
      /**
       * Controls the spacing and typography scale.
       * @default 'md'
       */
      size: BadgeSize;
      /**
       * Defines the surface treatment used by the badge.
       * @default 'soft'
       */
      variant: BadgeVariant;
    }>
>;
