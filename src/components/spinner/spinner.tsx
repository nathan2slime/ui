import { cx } from 'styled-system/css';

import {
  spinnerIndicatorCircleStyles,
  spinnerRootStyles,
  spinnerSvgStyles,
  spinnerTrackCircleStyles,
} from '@/components/spinner/spinner.styles';
import type { SpinnerProps } from '@/types/spinner';

/**
 * Animated loading indicator powered by Panda tokens.
 *
 * @example
 * ```tsx
 * <Spinner size="md" />
 * ```
 */
export const Spinner = ({
  'aria-label': ariaLabel,
  className,
  size = 'md',
  variant = 'primary',
  ...props
}: SpinnerProps) => {
  const resolvedLabel = ariaLabel ?? 'Loading';

  return (
    <output
      {...props}
      aria-label={resolvedLabel}
      className={cx(spinnerRootStyles({ size }), className)}
      data-size={size}
      data-variant={variant}
    >
      <svg
        aria-hidden="true"
        className={spinnerSvgStyles({ size })}
        viewBox="0 0 50 50"
      >
        <circle className={spinnerTrackCircleStyles()} cx="25" cy="25" r="20" />
        <circle
          className={spinnerIndicatorCircleStyles({ variant })}
          cx="25"
          cy="25"
          r="20"
        />
      </svg>
    </output>
  );
};

Spinner.displayName = 'Spinner';
