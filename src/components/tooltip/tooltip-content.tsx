import { cx } from 'styled-system/css';

import { useTooltipContext } from '@/components/tooltip/tooltip.context';
import { tooltipContentStyles } from '@/components/tooltip/tooltip.styles';
import type { TooltipContentProps } from '@/types/tooltip';

/**
 * Renders the floating tooltip content when the tooltip is open.
 *
 * @example
 * ```tsx
 * <Tooltip.Content>Helpful context</Tooltip.Content>
 * ```
 */
export const TooltipContent = ({
  children,
  className,
  sideOffset = 8,
  ...props
}: TooltipContentProps) => {
  const { baseId, placement, visible } = useTooltipContext();

  if (!visible) {
    return null;
  }

  return (
    <div
      {...props}
      className={cx(tooltipContentStyles({ placement }), className)}
      data-state={visible ? 'open' : 'closed'}
      id={`${baseId}-content`}
      role="tooltip"
      style={{
        ...props.style,
        ['--tooltip-side-offset' as string]: `${sideOffset}px`,
      }}
    >
      {children}
    </div>
  );
};
