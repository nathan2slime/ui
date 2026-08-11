import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import type { Api as ZagTabsApi } from '@zag-js/tabs';
import { createContext, type PropsWithChildren, useContext } from 'react';

import type { TabsColor, TabsOrientation, TabsSize } from '@/types/tabs';

type TabsCompoundApi = ZagTabsApi<ZagPropTypes>;

/** Values shared by every tabs compound part. */
export type TabsContextValue = {
  api: TabsCompoundApi;
  color: TabsColor;
  orientation: TabsOrientation;
  size: TabsSize;
};

const TabsContext = createContext<TabsContextValue | null>(null);

/** Provides the Zag API and visual metadata to compound tabs parts. */
export const TabsContextProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: TabsContextValue }>) => (
  <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
);

/** Reads the nearest tabs root context. */
export const useTabsContext = (): TabsContextValue => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('Tabs compound parts must be rendered inside Tabs.Root.');
  }

  return context;
};
