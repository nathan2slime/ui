import { useId, useState } from 'react';
import { cx } from 'styled-system/css';

import { TabsContext } from '@/components/tabs/tabs.context';
import { tabsRootStyles } from '@/components/tabs/tabs.styles';
import type { TabsRootProps } from '@/types/tabs';

/**
 * Provides shared state and ids for nested tabs parts.
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="account">
 *   <Tabs.List />
 * </Tabs>
 * ```
 */
export const TabsRoot = ({
  children,
  className,
  defaultValue,
  onValueChange,
  value,
}: TabsRootProps) => {
  const baseId = useId();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const currentValue = value ?? uncontrolledValue;

  const handleValueChange = (nextValue: string) => {
    if (value === undefined) {
      setUncontrolledValue(nextValue);
    }

    onValueChange?.(nextValue);
  };

  return (
    <TabsContext.Provider
      value={{
        baseId,
        onValueChange: handleValueChange,
        value: currentValue,
      }}
    >
      <div className={cx(tabsRootStyles(), className)}>{children}</div>
    </TabsContext.Provider>
  );
};
