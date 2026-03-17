import { cx } from 'styled-system/css';

import { helperTextStyles } from '@/components/helper-text/helper-text.styles';
import type { HelperTextProps } from '@/types/helper-text';

/**
 * Renders reusable helper text for fields and contextual guidance.
 *
 * @example
 * ```tsx
 * <HelperText color="success">Saved successfully.</HelperText>
 * ```
 */
export const HelperText = ({
  children,
  className,
  color = 'default',
  size = 'md',
  ...props
}: HelperTextProps) => {
  return (
    <span
      {...props}
      className={cx(helperTextStyles({ color, size }), className)}
    >
      {children}
    </span>
  );
};
