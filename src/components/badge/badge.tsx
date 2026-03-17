import { cx } from 'styled-system/css';

import { badgeStyles } from '@/components/badge/badge.styles';
import type { BadgeProps } from '@/types/badge';

/**
 * Displays short status labels and metadata with compact visual emphasis.
 *
 * @example
 * ```tsx
 * <Badge variant="soft" color="default">Featured</Badge>
 * ```
 */
export const Badge = ({
  children,
  className,
  color = 'default',
  size = 'md',
  variant = 'soft',
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cx(badgeStyles({ color, size, variant }), className)}
      data-variant={variant}
      {...props}
    >
      {children}
    </span>
  );
};
