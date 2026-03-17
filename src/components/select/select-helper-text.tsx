import { useEffect } from 'react';

import { HelperText } from '@/components/helper-text';
import { useSelectContext } from '@/components/select/select.context';
import type { SelectHelperTextProps } from '@/types/select';

/**
 * Renders helper text associated with the select control.
 *
 * @example
 * ```tsx
 * <Select.HelperText>Choose a valid option.</Select.HelperText>
 * ```
 */
export const SelectHelperText = ({
  children,
  color,
  ...props
}: SelectHelperTextProps) => {
  const { helperColor, helperTextId, registerHelperText, size } =
    useSelectContext();

  useEffect(() => {
    registerHelperText(true);

    return () => {
      registerHelperText(false);
    };
  }, [registerHelperText]);

  return (
    <HelperText
      {...props}
      id={helperTextId}
      color={color ?? helperColor}
      size={size}
    >
      {children}
    </HelperText>
  );
};
