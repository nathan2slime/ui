import { cx } from 'styled-system/css';

import { cardActionStyles } from '@/components/card/card.styles';
import type { CardActionProps } from '@/types/card';

/**
 * Renders an inline action area inside the card header or footer.
 *
 * @example
 * ```tsx
 * <Card.Action>Featured</Card.Action>
 * ```
 */
export const CardAction = ({
  children,
  className,
  ...props
}: CardActionProps) => {
  return (
    <div {...props} className={cx(cardActionStyles(), className)}>
      {children}
    </div>
  );
};
