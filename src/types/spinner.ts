import type { HTMLAttributes } from 'react';

/**
 * Available spinner sizes mapped to rem-based dimensions.
 */
export type SpinnerSize = 'sm' | 'md' | 'lg';

/**
 * Visual variants that control the indicator stroke color.
 */
export type SpinnerVariant = 'primary' | 'neutral' | 'contrast';

/**
 * Props accepted by the Spinner component.
 */
export type SpinnerProps = HTMLAttributes<HTMLOutputElement> &
  Partial<{
    /**
     * Controls the overall diameter of the spinner.
     * @default 'md'
     */
    size: SpinnerSize;
    /**
     * Defines the semantic color applied to the indicator.
     * @default 'primary'
     */
    variant: SpinnerVariant;
  }>;
