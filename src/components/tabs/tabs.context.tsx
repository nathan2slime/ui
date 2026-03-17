import { createContext, useContext } from 'react';

export type TabsContextValue = {
  baseId: string;
  onValueChange: (value: string) => void;
  value: string | undefined;
};

export const TabsContext = createContext<TabsContextValue | null>(null);

/**
 * Returns the shared tabs context used by compound parts.
 *
 * @returns The active tabs context value.
 */
export const useTabsContext = (): TabsContextValue => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('Tabs compound parts must be rendered within Tabs.');
  }

  return context;
};
