import { cx } from 'styled-system/css';

import { useTabsTriggerHandlers } from '@/components/tabs/hooks/use-tabs-trigger-handlers';
import { useTabsContext } from '@/components/tabs/tabs.context';
import { tabsTriggerStyles } from '@/components/tabs/tabs.styles';
import type { TabsTriggerProps } from '@/types/tabs';

/**
 * Activates a matching tabs content panel.
 *
 * @example
 * ```tsx
 * <Tabs.Trigger value="account">Account</Tabs.Trigger>
 * ```
 */
export const TabsTrigger = ({
  children,
  className,
  disabled,
  onClick,
  onKeyDown,
  value,
  ...props
}: TabsTriggerProps) => {
  const { baseId, onValueChange, value: selectedValue } = useTabsContext();
  const isActive = selectedValue === value;
  const triggerId = `${baseId}-trigger-${value}`;
  const contentId = `${baseId}-content-${value}`;
  const { handleClick, handleKeyDown } = useTabsTriggerHandlers({
    disabled: Boolean(disabled),
    onClick,
    onKeyDown,
    onValueChange,
    value,
  });

  return (
    <button
      {...props}
      aria-controls={contentId}
      aria-selected={isActive}
      className={cx(tabsTriggerStyles({ active: isActive }), className)}
      data-state={isActive ? 'active' : 'inactive'}
      disabled={disabled}
      id={triggerId}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="tab"
      tabIndex={isActive ? 0 : -1}
      type="button"
    >
      {children}
    </button>
  );
};
