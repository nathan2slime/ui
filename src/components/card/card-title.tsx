import { createElement } from 'react';
import { cx } from 'styled-system/css';

import { useCardContext } from '@/components/card/card.context';
import { cardTitleStyles } from '@/components/card/card.styles';
import type { CardTitleProps } from '@/types/card';

/**
 * Renders the main heading of the card.
 *
 * @example
 * ```tsx
 * <Card.Title as="h3">Journey of Reflection</Card.Title>
 * ```
 */
export const CardTitle = ({
  as = 'h3',
  children,
  className,
  ...props
}: CardTitleProps) => {
  const { orientation, tone } = useCardContext();

  return createElement(
    as,
    {
      ...props,
      className: cx(cardTitleStyles({ orientation, tone }), className),
    },
    children,
  );
};
