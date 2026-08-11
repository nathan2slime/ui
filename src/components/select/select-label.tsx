import { mergeProps } from '@zag-js/react';

import { StyledSelectLabel } from '@/components/select/select.styles';
import { useSelectContext } from '@/components/select/select-context';
import type { SelectLabelProps } from '@/types/select';

/**
 * Renders a label associated with the Zag select trigger and hidden native
 * select.
 *
 * @example
 * ```tsx
 * <Select.Label>Country</Select.Label>
 * ```
 */
export const SelectLabel = ({ children, ...props }: SelectLabelProps) => {
  const { api, color, size } = useSelectContext();
  const labelProps = mergeProps(props, api.getLabelProps());

  return (
    <StyledSelectLabel
      {...labelProps}
      data-color={color}
      data-part="label"
      data-size={size}
    >
      {children}
    </StyledSelectLabel>
  );
};
