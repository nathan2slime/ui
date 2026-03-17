import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

/**
 * Supported placement options for the tooltip content.
 *
 * @example
 * ```ts
 * const placement: TooltipPlacement = 'bottom';
 * ```
 */
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

/**
 * Props accepted by the tooltip root container.
 */
export type TooltipRootProps = PropsWithChildren<
  Partial<{
    /**
     * Sets the initial open state for uncontrolled usage.
     * @default false
     */
    defaultOpen: boolean;
    /**
     * Controls the tooltip visibility.
     */
    open: boolean;
    /**
     * Defines the preferred placement of the tooltip content.
     * @default 'top'
     */
    placement: TooltipPlacement;
    /**
     * Called whenever the tooltip visibility changes.
     */
    onOpenChange: (open: boolean) => void;
    /**
     * Merges custom classes into the root wrapper.
     */
    className: string;
  }>
>;

/**
 * Props accepted by the tooltip trigger wrapper.
 */
export type TooltipTriggerProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> &
    Partial<{
      /**
       * Merges custom classes into the trigger element.
       */
      className: string;
    }>
>;

/**
 * Props accepted by the tooltip content element.
 */
export type TooltipContentProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> &
    Partial<{
      /**
       * Controls the distance, in pixels, between the trigger and the tooltip.
       * @default 8
       */
      sideOffset: number;
      /**
       * Merges custom classes into the floating content element.
       */
      className: string;
    }>
>;
