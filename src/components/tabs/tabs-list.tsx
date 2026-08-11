import { mergeProps } from '@zag-js/react';

import { StyledTabsList } from '@/components/tabs/tabs.styles';
import { useTabsContext } from '@/components/tabs/tabs-context';
import type { TabsListProps } from '@/types/tabs';

/** Renders the keyboard-navigable tab list. */
export const TabsList = (props: TabsListProps) => {
  const { api, orientation } = useTabsContext();

  return (
    <StyledTabsList
      {...mergeProps(props, api.getListProps())}
      data-orientation={orientation}
      data-part="list"
    />
  );
};
