import type { HTMLAttributes, PropsWithChildren } from 'react';

/**
 * Visual typography variants inspired by the design reference.
 *
 * @example
 * ```ts
 * const variant: TypographyVariant = 'heading-3';
 * ```
 */
export type TypographyVariant =
  | 'display'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
  | 'body'
  | 'small'
  | 'caption';

/**
 * Polymorphic tags supported by the typography component.
 *
 * @example
 * ```ts
 * const element: TypographyElement = 'h2';
 * ```
 */
export type TypographyElement =
  | 'span'
  | 'p'
  | 'strong'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

/**
 * Props accepted by the typography component.
 */
export type TypographyProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> &
    Partial<{
      /**
       * Overrides the semantic HTML element rendered by the component.
       */
      as: TypographyElement;
      /**
       * Merges custom classes into the rendered element.
       */
      className: string;
      /**
       * Selects the visual typography scale applied to the content.
       * @default 'body'
       */
      variant: TypographyVariant;
    }>
>;
