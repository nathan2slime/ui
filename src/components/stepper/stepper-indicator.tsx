import { Alert02Icon, CheckmarkCircle02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { cx } from 'styled-system/css';

import { useStepperItemContext } from '@/components/stepper/stepper.context';
import { stepperIndicatorStyles } from '@/components/stepper/stepper.styles';
import type { StepperIndicatorProps } from '@/types/stepper';

const getIndicatorIconSize = (size: 'sm' | 'md') => {
  return size === 'sm' ? 14 : 16;
};

/**
 * Renders the numeric or status indicator for the current step.
 *
 * @example
 * ```tsx
 * <Stepper.Indicator />
 * ```
 */
export const StepperIndicator = ({
  children,
  className,
  ...props
}: StepperIndicatorProps) => {
  const { size, state, stepIndex, variant } = useStepperItemContext();
  const iconSize = getIndicatorIconSize(size);

  const defaultContent =
    state === 'completed' ? (
      <HugeiconsIcon
        aria-hidden="true"
        color="currentColor"
        icon={CheckmarkCircle02Icon}
        size={iconSize}
      />
    ) : state === 'error' ? (
      <HugeiconsIcon
        aria-hidden="true"
        color="currentColor"
        icon={Alert02Icon}
        size={iconSize}
      />
    ) : (
      stepIndex + 1
    );

  return (
    <span
      {...props}
      aria-hidden="true"
      className={cx(
        stepperIndicatorStyles({
          size,
          state,
          variant,
        }),
        className,
      )}
    >
      {children ?? defaultContent}
    </span>
  );
};
