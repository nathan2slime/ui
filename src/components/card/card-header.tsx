import { cx } from 'styled-system/css';

import { useCardContext } from '@/components/card/card.context';
import { cardHeaderStyles } from '@/components/card/card.styles';
import type { CardHeaderProps } from '@/types/card';

/**
 * Wraps the heading area of the card.
 *
 * @example
 * ```tsx
 * <Card.Header>Header content</Card.Header>
 * ```
 */
export const CardHeader = ({
  children,
  className,
  ...props
}: CardHeaderProps) => {
  const { orientation, tone } = useCardContext();

  return (
    <div
      {...props}
      className={cx(cardHeaderStyles({ orientation, tone }), className)}
    >
      {children}
    </div>
  );
};
