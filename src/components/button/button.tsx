import { forwardRef } from 'react';

import { StyledButton } from '@/components/button/button.styles';
import type { ButtonProps } from '@/types/button';

/**
 * Renders an accessible action control with styled-components-powered size, color, and variant styles.
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
      <StyledButton
        {...props}
        ref={ref}
        className={className}
        $color={color}
        $fullWidth={fullWidth}
        $size={size}
        $variant={variant}
        data-size={size}
        data-variant={variant}
        type={type}
      >
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
