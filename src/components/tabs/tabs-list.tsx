import { cx } from 'styled-system/css';

import { tabsListStyles } from '@/components/tabs/tabs.styles';
import type { TabsListProps } from '@/types/tabs';

/**
 * Wraps tab triggers with the correct `tablist` semantics.
 *
 * @example
 * ```tsx
 * <Tabs.List>
 *   <Tabs.Trigger value="account">Account</Tabs.Trigger>
 * </Tabs.List>
 * ```
 */
export const TabsList = ({ children, className, ...props }: TabsListProps) => {
  return (
    <div {...props} className={cx(tabsListStyles(), className)} role="tablist">
      {children}
    </div>
  );
};
