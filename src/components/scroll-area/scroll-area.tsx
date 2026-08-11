import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { normalizeProps, useMachine } from '@zag-js/react';
import { connect, machine } from '@zag-js/scroll-area';
import { forwardRef, useId } from 'react';

import {
  StyledScrollAreaContent,
  StyledScrollAreaCorner,
  StyledScrollAreaRoot,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaViewport,
} from '@/components/scroll-area/scroll-area.styles';
import type {
  ScrollAreaOrientation,
  ScrollAreaProps,
} from '@/types/scroll-area';

const hasVerticalScrollbar = (orientation: ScrollAreaOrientation) =>
  orientation === 'vertical' || orientation === 'both';

const hasHorizontalScrollbar = (orientation: ScrollAreaOrientation) =>
  orientation === 'horizontal' || orientation === 'both';

/**
 * Renders a Zag-backed scroll area with custom scrollbars.
 *
 * @example
 * ```tsx
 * <ScrollArea>
 *   <p>Scrollable content</p>
 * </ScrollArea>
 * ```
 */
export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      children,
      className,
      contentClassName,
      id,
      orientation = 'vertical',
      scrollbarClassName,
      size = 'md',
      style,
      thumbClassName,
      viewportClassName,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const service = useMachine(machine, {
      ...props,
      id: id ?? `scroll-area-${generatedId}`,
    });
    const api = connect<ZagPropTypes>(service, normalizeProps);
    const rootProps = api.getRootProps();

    return (
      <StyledScrollAreaRoot
        {...rootProps}
        ref={ref}
        className={className}
        data-orientation={orientation}
        data-part="root"
        data-size={size}
        style={{ ...rootProps.style, ...style }}
      >
        <StyledScrollAreaViewport
          {...api.getViewportProps()}
          className={viewportClassName}
          data-part="viewport"
        >
          <StyledScrollAreaContent
            {...api.getContentProps()}
            className={contentClassName}
            data-part="content"
          >
            {children}
          </StyledScrollAreaContent>
        </StyledScrollAreaViewport>
        {hasVerticalScrollbar(orientation) ? (
          <StyledScrollAreaScrollbar
            {...api.getScrollbarProps({ orientation: 'vertical' })}
            className={scrollbarClassName}
            data-part="scrollbar"
          >
            <StyledScrollAreaThumb
              {...api.getThumbProps({ orientation: 'vertical' })}
              className={thumbClassName}
              data-part="thumb"
            />
          </StyledScrollAreaScrollbar>
        ) : null}
        {hasHorizontalScrollbar(orientation) ? (
          <StyledScrollAreaScrollbar
            {...api.getScrollbarProps({ orientation: 'horizontal' })}
            className={scrollbarClassName}
            data-part="scrollbar"
          >
            <StyledScrollAreaThumb
              {...api.getThumbProps({ orientation: 'horizontal' })}
              className={thumbClassName}
              data-part="thumb"
            />
          </StyledScrollAreaScrollbar>
        ) : null}
        {orientation === 'both' ? (
          <StyledScrollAreaCorner
            {...api.getCornerProps()}
            data-part="corner"
          />
        ) : null}
      </StyledScrollAreaRoot>
    );
  },
);

ScrollArea.displayName = 'ScrollArea';
