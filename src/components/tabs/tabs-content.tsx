import { cx } from 'styled-system/css';

import { useTabsContext } from '@/components/tabs/tabs.context';
import type { TabsContentProps } from '@/types/tabs';

/**
 * Renders the panel associated with a matching trigger value.
 *
 * @example
 * ```tsx
 * <Tabs.Content value="account">Account settings</Tabs.Content>
 * ```
 */
export const TabsContent = ({
  children,
  className,
  forceMount = false,
  value,
  ...props
}: TabsContentProps) => {
  const { baseId, value: selectedValue } = useTabsContext();
  const isActive = selectedValue === value;

  if (!isActive && !forceMount) {
    return null;
  }

  return (
    <div
      {...props}
      aria-labelledby={`${baseId}-trigger-${value}`}
      className={cx(className)}
      data-state={isActive ? 'active' : 'inactive'}
      hidden={!isActive}
      id={`${baseId}-content-${value}`}
      role="tabpanel"
    >
      {children}
    </div>
  );
};
