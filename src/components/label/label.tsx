import { cx } from 'styled-system/css';

import { labelStyles } from '@/components/label/label.styles';
import type { LabelProps } from '@/types/label';

/**
 * Renders a reusable label for form fields and grouped controls.
 *
 * @example
 * ```tsx
 * <Label htmlFor="spell-name">Spell name</Label>
 * ```
 */
export const Label = ({
  children,
  className,
  color = 'default',
  htmlFor,
  size = 'md',
  ...props
}: LabelProps) => {
  return (
    <label
      {...props}
      className={cx(labelStyles({ color, size }), className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};
