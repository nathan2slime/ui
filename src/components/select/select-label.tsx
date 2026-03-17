import { Label } from '@/components/label';
import { useSelectContext } from '@/components/select/select.context';
import type { SelectLabelProps } from '@/types/select';

/**
 * Renders a label connected to the select control inside the same root.
 *
 * @example
 * ```tsx
 * <Select.Label>Spell school</Select.Label>
 * ```
 */
export const SelectLabel = ({ children, ...props }: SelectLabelProps) => {
  const { color, controlId, size } = useSelectContext();

  return (
    <Label {...props} color={color} htmlFor={controlId} size={size}>
      {children}
    </Label>
  );
};
