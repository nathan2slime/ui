import { useId, useMemo } from 'react';
import { cx } from 'styled-system/css';

import { useStepperState } from '@/components/stepper/hooks/use-stepper-state';
import { StepperContext } from '@/components/stepper/stepper.context';
import { stepperRootStyles } from '@/components/stepper/stepper.styles';
import type { StepperRootProps } from '@/types/stepper';

/**
 * Provides shared stepper state, layout options, and accessibility semantics.
 *
 * @example
 * ```tsx
 * <Stepper.Root defaultValue="account">
 *   <Stepper.List />
 * </Stepper.Root>
 * ```
 */
export const StepperRoot = ({
  ariaLabel = 'Progress',
  children,
  className,
  defaultValue,
  onValueChange,
  orientation = 'horizontal',
  size = 'md',
  value,
  variant = 'default',
}: StepperRootProps) => {
  const baseId = useId();
  const { currentValue, setCurrentValue } = useStepperState({
    defaultValue,
    onValueChange,
    value,
  });

  const contextValue = useMemo(
    () => ({
      baseId,
      currentValue,
      onValueChange: setCurrentValue,
      orientation,
      size,
      variant,
    }),
    [baseId, currentValue, orientation, setCurrentValue, size, variant],
  );

  return (
    <StepperContext.Provider value={contextValue}>
      <nav
        aria-label={ariaLabel}
        className={cx(stepperRootStyles(), className)}
      >
        {children}
      </nav>
    </StepperContext.Provider>
  );
};
