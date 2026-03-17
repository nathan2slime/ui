import { cx } from 'styled-system/css';

import { useTooltipTriggerHandlers } from '@/components/tooltip/hooks/use-tooltip-trigger-handlers';
import { useTooltipContext } from '@/components/tooltip/tooltip.context';
import { tooltipTriggerStyles } from '@/components/tooltip/tooltip.styles';
import type { TooltipTriggerProps } from '@/types/tooltip';

/**
 * Wraps the interactive element that opens the tooltip on hover or focus.
 *
 * @example
 * ```tsx
 * <Tooltip.Trigger>Inspect</Tooltip.Trigger>
 * ```
 */
export const TooltipTrigger = ({
  children,
  className,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  tabIndex,
  ...props
}: TooltipTriggerProps) => {
  const { baseId, close, open, visible } = useTooltipContext();
  const { handleBlur, handleFocus, handleMouseEnter, handleMouseLeave } =
    useTooltipTriggerHandlers({
      close,
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      open,
    });

  return (
    <button
      {...props}
      aria-describedby={visible ? `${baseId}-content` : undefined}
      data-state={visible ? 'open' : 'closed'}
      className={cx(tooltipTriggerStyles(), className)}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={tabIndex}
      type="button"
    >
      {children}
    </button>
  );
};
