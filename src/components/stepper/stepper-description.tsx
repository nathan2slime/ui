import { cx } from 'styled-system/css';

import { useStepperItemContext } from '@/components/stepper/stepper.context';
import { stepperDescriptionStyles } from '@/components/stepper/stepper.styles';
import type { StepperDescriptionProps } from '@/types/stepper';

/**
 * Renders supporting copy below the step title.
 *
 * @example
 * ```tsx
 * <Stepper.Description>Confirm your delivery details.</Stepper.Description>
 * ```
 */
export const StepperDescription = ({
  children,
  className,
  ...props
}: StepperDescriptionProps) => {
  const { size, state, variant } = useStepperItemContext();

  return (
    <p
      {...props}
      className={cx(
        stepperDescriptionStyles({
          size,
          state,
          variant,
        }),
        className,
      )}
    >
      {children}
    </p>
  );
};
