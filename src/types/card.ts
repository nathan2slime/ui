import type { HTMLAttributes, PropsWithChildren } from 'react';

/**
 * Supported card layouts.
 *
 * @example
 * ```ts
 * const orientation: CardOrientation = 'horizontal';
 * ```
 */
export type CardOrientation = 'vertical' | 'horizontal';

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
 * Shared optional props supported across card parts.
 */
export type CardSharedOptionalProps = Partial<{
  /**
   * Enables hover and cursor affordances for actionable cards.
   * @default false
   */
  interactive: boolean;
  /**
   * Controls whether the card content is arranged vertically or horizontally.
   * @default 'vertical'
   */
  orientation: CardOrientation;
  /**
   * Applies the visual tone used by the card surface.
   * @default 'default'
   */
  tone: CardTone;
}>;

/**
 * Props accepted by the card root container.
 */
export type CardRootProps = PropsWithChildren<
  Partial<{
    /**
     * Merges custom classes into the root element.
     */
    className: string;
  }> &
    CardSharedOptionalProps
>;

/**
 * Props accepted by generic card sections.
 */
export type CardSectionProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> &
    Partial<{
      /**
       * Merges custom classes into the section element.
       */
      className: string;
    }>
>;

/**
 * Props accepted by the card header.
 *
 * @example
 * ```tsx
 * <Card.Header>...</Card.Header>
 * ```
 */
export type CardHeaderProps = CardSectionProps;

/**
 * Props accepted by the card action area.
 *
 * @example
 * ```tsx
 * <Card.Action>Open</Card.Action>
 * ```
 */
export type CardActionProps = CardSectionProps;

/**
 * Props accepted by the card content section.
 *
 * @example
 * ```tsx
 * <Card.Content>...</Card.Content>
 * ```
 */
export type CardContentProps = CardSectionProps;

/**
 * Props accepted by the card title.
 */
export type CardTitleProps = PropsWithChildren<
  HTMLAttributes<HTMLHeadingElement> &
    Partial<{
      /**
       * Selects the semantic heading element rendered by the title.
       * @default 'h3'
       */
      as: 'h2' | 'h3' | 'h4';
      /**
       * Merges custom classes into the title element.
       */
      className: string;
    }>
>;

/**
 * Props accepted by the card description.
 */
export type CardDescriptionProps = PropsWithChildren<
  HTMLAttributes<HTMLParagraphElement> &
    Partial<{
      /**
       * Merges custom classes into the description element.
       */
      className: string;
    }>
>;
