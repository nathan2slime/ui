import { createContext, useContext } from 'react';

import type { TooltipPlacement } from '@/types/tooltip';

export type TooltipContextValue = {
  baseId: string;
  close: VoidFunction;
  open: VoidFunction;
  placement: TooltipPlacement;
  setOpen: (open: boolean) => void;
  visible: boolean;
};

export const TooltipContext = createContext<TooltipContextValue | null>(null);

/**
 * Returns the shared tooltip context used by compound parts.
 *
 * @returns The active tooltip context value.
 */
export const useTooltipContext = (): TooltipContextValue => {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error('Tooltip compound parts must be rendered within Tooltip.');
  }

  return context;
};
