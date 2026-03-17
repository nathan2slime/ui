import { forwardRef } from 'react';
import { cx } from 'styled-system/css';

import { buttonStyles } from '@/components/button/button.styles';
import type { ButtonProps } from '@/types/button';

/**
 * Renders an accessible action control with Panda-powered size, color, and variant styles.
 *
 * @example
 * ```tsx
 * <Button variant="solid">Save changes</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      color = 'default',
      fullWidth = false,
      size = 'md',
      type = 'button',
      variant = 'solid',
      ...props
    },
    ref,
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cx(
          buttonStyles({ color, fullWidth, size, variant }),
          className,
        )}
        data-size={size}
        data-variant={variant}
        type={type}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
