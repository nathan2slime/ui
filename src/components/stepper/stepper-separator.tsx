import { cx } from 'styled-system/css';

import { useStepperItemContext } from '@/components/stepper/stepper.context';
import { stepperSeparatorStyles } from '@/components/stepper/stepper.styles';
import type { StepperSeparatorProps } from '@/types/stepper';

/**
 * Renders the connector line from the current step to the next one.
 *
 * @example
 * ```tsx
 * <Stepper.Separator />
 * ```
 */
export const StepperSeparator = ({
  className,
  ...props
}: StepperSeparatorProps) => {
  const { orientation, size, state, variant } = useStepperItemContext();

  return (
    <span
      {...props}
      aria-hidden="true"
      className={cx(
        stepperSeparatorStyles({
          orientation,
          size,
          state,
          variant,
        }),
        className,
      )}
      data-part="separator"
    />
  );
};
