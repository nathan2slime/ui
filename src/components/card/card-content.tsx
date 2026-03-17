import { cx } from 'styled-system/css';

import { useCardContext } from '@/components/card/card.context';
import { cardContentStyles } from '@/components/card/card.styles';
import type { CardContentProps } from '@/types/card';

/**
 * Wraps the main content area of the card.
 *
 * @example
 * ```tsx
 * <Card.Content>Card body content</Card.Content>
 * ```
 */
export const CardContent = ({
  children,
  className,
  ...props
}: CardContentProps) => {
  const { orientation, tone } = useCardContext();

  return (
    <div
      {...props}
      className={cx(cardContentStyles({ orientation, tone }), className)}
    >
      {children}
    </div>
  );
};
