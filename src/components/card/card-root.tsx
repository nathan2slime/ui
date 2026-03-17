import { useMemo } from 'react';
import { cx } from 'styled-system/css';

import { CardContext } from '@/components/card/card.context';
import { cardRootStyles } from '@/components/card/card.styles';
import type { CardRootProps } from '@/types/card';

/**
 * Provides layout and visual styling for card compound parts.
 *
 * @example
 * ```tsx
 * <Card>
 *   <Card.Content>Content</Card.Content>
 * </Card>
 * ```
 */
export const CardRoot = ({
  children,
  className,
  interactive = false,
  orientation = 'vertical',
  tone = 'default',
}: CardRootProps) => {
  const contextValue = useMemo(
    () => ({
      interactive,
      orientation,
      tone,
    }),
    [interactive, orientation, tone],
  );

  return (
    <CardContext.Provider value={contextValue}>
      <article
        className={cx(
          cardRootStyles({
            interactive,
            orientation,
            tone,
          }),
          className,
        )}
      >
        {children}
      </article>
    </CardContext.Provider>
  );
};
