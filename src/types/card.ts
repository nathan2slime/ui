import type { HTMLAttributes, PropsWithChildren } from 'react';

/**
 * Supported card visual tones.
 *
 * @example
 * ```ts
 * const tone: CardTone = 'accent';
 * ```
 */
export type CardTone = 'default' | 'accent';

/**
 * Props accepted by the card surface.
 *
 * @example
 * ```tsx
 * <Card interactive tone="accent">Featured content</Card>
 * ```
 */
export type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> &
    Partial<{
      /**
       * Enables hover and cursor affordances for actionable cards.
       * @default false
       */
      interactive: boolean;
      /**
       * Applies the visual tone used by the card surface.
       * @default 'default'
       */
      tone: CardTone;
    }>
>;
