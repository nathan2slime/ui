import { createContext, useContext } from 'react';

import type {
  SelectColor,
  SelectHelperColor,
  SelectSize,
} from '@/types/select';

export type SelectContextValue = {
  controlId: string;
  helperTextId: string;
  helperColor: SelectHelperColor;
  registerHelperText: (present: boolean) => void;
  color: SelectColor;
  size: SelectSize;
  withHelperText: boolean;
};

export const SelectContext = createContext<SelectContextValue | null>(null);

/**
 * Returns the shared select context used by compound parts.
 *
 * @returns The active select context value.
 */
export const useSelectContext = (): SelectContextValue => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('Select compound parts must be rendered within Select.');
  }

  return context;
};
