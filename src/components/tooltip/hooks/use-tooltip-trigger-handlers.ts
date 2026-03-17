import { useCallback } from 'react';

import type {
  UseTooltipTriggerHandlersParams,
  UseTooltipTriggerHandlersReturn,
} from '@/types/hooks';
import type { TooltipTriggerProps } from '@/types/tooltip';

/**
 * Creates stable merged handlers for the tooltip trigger wrapper.
 *
 * @param params Trigger interaction dependencies.
 * @returns Memoized handlers that merge user callbacks with tooltip behavior.
 */
export const useTooltipTriggerHandlers = ({
  close,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  open,
}: UseTooltipTriggerHandlersParams): UseTooltipTriggerHandlersReturn => {
  const handleBlur = useCallback<NonNullable<TooltipTriggerProps['onBlur']>>(
    (event) => {
      onBlur?.(event);
      close();
    },
    [close, onBlur],
  );

  const handleFocus = useCallback<NonNullable<TooltipTriggerProps['onFocus']>>(
    (event) => {
      onFocus?.(event);
      open();
    },
    [onFocus, open],
  );

  const handleMouseEnter = useCallback<
    NonNullable<TooltipTriggerProps['onMouseEnter']>
  >(
    (event) => {
      onMouseEnter?.(event);
      open();
    },
    [onMouseEnter, open],
  );

  const handleMouseLeave = useCallback<
    NonNullable<TooltipTriggerProps['onMouseLeave']>
  >(
    (event) => {
      onMouseLeave?.(event);
      close();
    },
    [close, onMouseLeave],
  );

  return {
    handleBlur,
    handleFocus,
    handleMouseEnter,
    handleMouseLeave,
  };
};
