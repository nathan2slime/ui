import { StyledSelectHelperText } from '@/components/select/select.styles';
import { useSelectContext } from '@/components/select/select-context';
import type { SelectHelperTextProps } from '@/types/select';

/**
 * Renders helper text referenced by the select trigger through
 * `aria-describedby`.
 *
 * @example
 * ```tsx
 * <Select.HelperText>Choose one option.</Select.HelperText>
 * ```
 */
export const SelectHelperText = ({
  children,
  color,
  ...props
}: SelectHelperTextProps) => {
  const { helperColor, helperTextId, size } = useSelectContext();
  const helperProps = {
    ...props,
    id: helperTextId,
  };

  return (
    <StyledSelectHelperText
      {...helperProps}
      data-color={color ?? helperColor}
      data-part="helper-text"
      data-size={size}
      id={helperTextId}
    >
      {children}
    </StyledSelectHelperText>
  );
};
