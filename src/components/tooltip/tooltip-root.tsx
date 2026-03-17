import { useCallback, useId, useMemo, useState } from 'react';
import { cx } from 'styled-system/css';

import { TooltipContext } from '@/components/tooltip/tooltip.context';
import { tooltipRootStyles } from '@/components/tooltip/tooltip.styles';
import type { TooltipRootProps } from '@/types/tooltip';

/**
 * Provides shared open state and ids for nested tooltip parts.
 *
 * @example
 * ```tsx
 * <Tooltip>
 *   <Tooltip.Trigger>Hover me</Tooltip.Trigger>
 *   <Tooltip.Content>Helpful context</Tooltip.Content>
 * </Tooltip>
 * ```
 */
export const TooltipRoot = ({
  children,
  className,
  defaultOpen = false,
  onOpenChange,
  open,
  placement = 'top',
}: TooltipRootProps) => {
  const baseId = useId();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const visible = open ?? uncontrolledOpen;

  const setVisible = useCallback(
    (nextOpen: boolean) => {
      if (open === undefined) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [onOpenChange, open],
  );

  const contextValue = useMemo(
    () => ({
      baseId,
      close: () => setVisible(false),
      open: () => setVisible(true),
      placement,
      setOpen: setVisible,
      visible,
    }),
    [baseId, placement, setVisible, visible],
  );

  return (
    <TooltipContext.Provider value={contextValue}>
      <span className={cx(tooltipRootStyles(), className)}>{children}</span>
    </TooltipContext.Provider>
  );
};
