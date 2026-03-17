import type { SelectItemProps } from '@/types/select';

/**
 * Renders a native option inside the select control.
 *
 * @example
 * ```tsx
 * <Select.Item value="support">Support</Select.Item>
 * ```
 */
export const SelectItem = ({ children, ...props }: SelectItemProps) => {
  return <option {...props}>{children}</option>;
};
