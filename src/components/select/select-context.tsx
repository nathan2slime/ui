import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import type { Api as ZagSelectApi } from '@zag-js/select';
import { createContext, type PropsWithChildren, useContext } from 'react';

import type {
  SelectColor,
  SelectHelperColor,
  SelectSize,
} from '@/types/select';

type SelectCompoundApi = Pick<
  ZagSelectApi<ZagPropTypes, unknown>,
  | 'getControlProps'
  | 'getIndicatorProps'
  | 'getLabelProps'
  | 'getTriggerProps'
  | 'getValueTextProps'
> &
  Pick<ZagSelectApi<ZagPropTypes, unknown>, 'empty' | 'valueAsString'>;

/**
 * Values shared by the three public select compound parts.
 */
export type SelectContextValue = {
  api: SelectCompoundApi;
  helperTextId: string;
  hasHelperText: boolean;
  color: SelectColor;
  helperColor: SelectHelperColor;
  size: SelectSize;
};

const SelectContext = createContext<SelectContextValue | null>(null);

/**
 * Provides Zag state and field metadata to the select compound parts.
 *
 * @param props Context value and compound children.
 * @returns The provider element.
 */
export const SelectContextProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: SelectContextValue }>) => {
  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};

/**
 * Reads the nearest select compound context.
 *
 * @returns The active select context.
 * @throws When a compound part is rendered outside a `Select` root.
 */
export const useSelectContext = (): SelectContextValue => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('Select compound parts must be rendered inside Select.');
  }

  return context;
};
