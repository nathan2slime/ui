import { cx } from 'styled-system/css';

import { useCardContext } from '@/components/card/card.context';
import { cardFooterStyles } from '@/components/card/card.styles';
import type { CardSectionProps } from '@/types/card';

/**
 * Renders the footer area for metadata and actions.
 *
 * @example
 * ```tsx
 * <Card.Footer>Footer content</Card.Footer>
 * ```
 */
export const CardFooter = ({
  children,
  className,
  ...props
}: CardSectionProps) => {
  const { tone } = useCardContext();

  return (
    <div {...props} className={cx(cardFooterStyles({ tone }), className)}>
      {children}
    </div>
  );
};
