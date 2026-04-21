import { cx } from 'styled-system/css';

import { useStepperItemContext } from '@/components/stepper/stepper.context';
import { stepperTitleStyles } from '@/components/stepper/stepper.styles';
import type { StepperTitleProps } from '@/types/stepper';

/**
 * Renders the primary label for a step item.
 *
 * @example
 * ```tsx
 * <Stepper.Title>Shipping</Stepper.Title>
 * ```
 */
export const StepperTitle = ({
  children,
  className,
  ...props
}: StepperTitleProps) => {
  const { size, state, variant } = useStepperItemContext();

  return (
    <span
      {...props}
      className={cx(
        stepperTitleStyles({
          size,
          state,
          variant,
        }),
        className,
      )}
    >
      {children}
    </span>
  );
};
