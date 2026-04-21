import { useCallback, useState } from 'react';

import type {
  UseStepperStateParams,
  UseStepperStateReturn,
} from '@/types/hooks';

/**
 * Manages the current step value for controlled and uncontrolled usage.
 *
 * @param params Root props related to active step state.
 * @returns The resolved current step value and an updater that respects control mode.
 */
export const useStepperState = ({
  defaultValue,
  onValueChange,
  value,
}: UseStepperStateParams): UseStepperStateReturn => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const currentValue = value ?? uncontrolledValue;

  const setCurrentValue = useCallback(
    (nextValue: string) => {
      if (value === undefined) {
        setUncontrolledValue(nextValue);
      }

      onValueChange?.(nextValue);
    },
    [onValueChange, value],
  );

  return {
    currentValue,
    setCurrentValue,
  };
};
