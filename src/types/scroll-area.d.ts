import type {
  ElementIds as ZagScrollAreaElementIds,
  Props as ZagScrollAreaProps,
  ScrollToDetails as ZagScrollAreaScrollToDetails,
  ScrollToEdge as ZagScrollAreaScrollToEdge,
  ScrollToEdgeDetails as ZagScrollAreaScrollToEdgeDetails,
} from '@zag-js/scroll-area';
import type { CSSProperties, PropsWithChildren } from 'react';

/** Scrollbar orientations rendered by the scroll area. */
export type ScrollAreaOrientation = 'vertical' | 'horizontal' | 'both';

/** Visual thickness presets for the scrollbars. */
export type ScrollAreaSize = 'sm' | 'md' | 'lg';

/** Element id overrides forwarded to the underlying Zag scroll area machine. */
export type ScrollAreaElementIds = ZagScrollAreaElementIds;

/** Coordinates accepted by the imperative Zag `scrollTo` helper. */
export type ScrollAreaScrollToDetails = ZagScrollAreaScrollToDetails;

/** Edge names accepted by the imperative Zag `scrollToEdge` helper. */
export type ScrollAreaScrollToEdge = ZagScrollAreaScrollToEdge;

/** Details accepted by the imperative Zag `scrollToEdge` helper. */
export type ScrollAreaScrollToEdgeDetails = ZagScrollAreaScrollToEdgeDetails;

/**
 * Props accepted by the Zag-backed scroll area component.
 *
 * @example
 * ```tsx
 * <ScrollArea>
 *   <p>Scrollable content</p>
 * </ScrollArea>
 * ```
 */
export type ScrollAreaProps = PropsWithChildren<
  Omit<ZagScrollAreaProps, 'id'> &
    Partial<{
      /** Stable id used by the Zag scroll area machine. */
      id: string;
      /** Class name applied to the root element. */
      className: string;
      /** Inline styles applied to the root element and merged with Zag layout styles. */
      style: CSSProperties;
      /** Class name applied to the viewport element. */
      viewportClassName: string;
      /** Class name applied to the content element. */
      contentClassName: string;
      /** Class name applied to every rendered scrollbar. */
      scrollbarClassName: string;
      /** Class name applied to every rendered scrollbar thumb. */
      thumbClassName: string;
      /** Which scrollbars to render. @defaultValue 'vertical' */
      orientation: ScrollAreaOrientation;
      /** Controls scrollbar thickness. @defaultValue 'md' */
      size: ScrollAreaSize;
    }>
>;
