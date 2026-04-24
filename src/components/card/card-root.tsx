import { cx } from 'styled-system/css';

import { cardStyles } from '@/components/card/card.styles';
import type { CardProps } from '@/types/card';

/**
 * Renders a simple card surface for arbitrary content.
 *
 * @example
 * ```tsx
 * <Card interactive>
 *   <h3>Ship faster</h3>
 *   <p>Start with accessible primitives and consistent styling tokens.</p>
 * </Card>
 * ```
 */
export const CardRoot = ({
  children,
  className,
  interactive = false,
  tone = 'default',
  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      className={cx(
        cardStyles({
          interactive,
          tone,
        }),
        className,
      )}
    >
      {children}
    </div>
  );
};
