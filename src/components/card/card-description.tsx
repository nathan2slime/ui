import { cx } from 'styled-system/css';

import { useCardContext } from '@/components/card/card.context';
import { cardDescriptionStyles } from '@/components/card/card.styles';
import type { CardDescriptionProps } from '@/types/card';

/**
 * Renders supporting copy inside the card body.
 *
 * @example
 * ```tsx
 * <Card.Description>Supporting details for the card.</Card.Description>
 * ```
 */
export const CardDescription = ({
  children,
  className,
  ...props
}: CardDescriptionProps) => {
  const { orientation, tone } = useCardContext();

  return (
    <p
      {...props}
      className={cx(cardDescriptionStyles({ orientation, tone }), className)}
    >
      {children}
    </p>
  );
};
