'use client';

import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { normalizeProps, useMachine } from '@zag-js/react';
import { connect, machine } from '@zag-js/tabs';
import { MotionConfig } from 'motion/react';
import { Children, useId } from 'react';

import { StyledTabsRoot } from '@/components/tabs/tabs.styles';
import { TabsContent } from '@/components/tabs/tabs-content';
import { TabsContextProvider } from '@/components/tabs/tabs-context';
import { TabsIndicator } from '@/components/tabs/tabs-indicator';
import { TabsList } from '@/components/tabs/tabs-list';
import { TabsTrigger } from '@/components/tabs/tabs-trigger';
import type { TabsRootProps } from '@/types/tabs';

/**
 * Renders the Zag-backed tabs root and its compound parts.
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="overview">
 *   <Tabs.List><Tabs.Trigger value="overview">Overview</Tabs.Trigger></Tabs.List>
 *   <Tabs.Content value="overview">Summary</Tabs.Content>
 * </Tabs.Root>
 * ```
 */
export const TabsRoot = ({
  children,
  className,
  color = 'default',
  orientation = 'horizontal',
  size = 'md',
  ...props
}: TabsRootProps) => {
  const generatedId = useId();
  const service = useMachine(machine, {
    ...props,
    id: `tabs-${generatedId}`,
    orientation,
  });
  const api = connect<ZagPropTypes>(service, normalizeProps);

  return (
    <TabsContextProvider value={{ api, color, orientation, size }}>
      <MotionConfig reducedMotion="user">
        <StyledTabsRoot
          {...api.getRootProps()}
          className={className}
          data-color={color}
          data-orientation={orientation}
          data-part="root"
          data-size={size}
        >
          {Children.toArray(children)}
        </StyledTabsRoot>
      </MotionConfig>
    </TabsContextProvider>
  );
};

/** Public compound Tabs API. */
export const Tabs = Object.assign(TabsRoot, {
  Content: TabsContent,
  Indicator: TabsIndicator,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
});
