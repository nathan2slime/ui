import { createContext, useContext } from 'react';

import type {
  StepperItemState,
  StepperOrientation,
  StepperSize,
  StepperVariant,
} from '@/types/stepper';

export type StepperContextValue = {
  baseId: string;
  currentValue: string | undefined;
  onValueChange: (value: string) => void;
  orientation: StepperOrientation;
  size: StepperSize;
  variant: StepperVariant;
};

export type StepperItemContextValue = {
  orientation: StepperOrientation;
  size: StepperSize;
  state: StepperItemState;
  stepCount: number;
  stepIndex: number;
  variant: StepperVariant;
};

export const StepperContext = createContext<StepperContextValue | null>(null);

export const StepperItemContext = createContext<StepperItemContextValue | null>(
  null,
);

/**
 * Returns the shared stepper context used by compound parts.
 *
 * @returns The active stepper context value.
 */
export const useStepperContext = (): StepperContextValue => {
  const context = useContext(StepperContext);

  if (!context) {
    throw new Error('Stepper compound parts must be rendered within Stepper.');
  }

  return context;
};

/**
 * Returns the shared step item context used by nested parts.
 *
 * @returns The current step item context value.
 */
export const useStepperItemContext = (): StepperItemContextValue => {
  const context = useContext(StepperItemContext);

  if (!context) {
    throw new Error(
      'Stepper compound parts must be rendered within Stepper.Item.',
    );
  }

  return context;
};
