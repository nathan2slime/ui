import { useCallback } from 'react';

import type {
  UseStepperItemHandlersParams,
  UseStepperItemHandlersReturn,
} from '@/types/hooks';
import type { StepperItemProps } from '@/types/stepper';

/**
 * Creates stable click and keyboard handlers for an individual step item.
 *
 * @param params Step interaction dependencies.
 * @returns Memoized handlers that merge consumer callbacks with stepper behavior.
 */
export const useStepperItemHandlers = ({
  disabled,
  onClick,
  onKeyDown,
  onValueChange,
  orientation,
  value,
}: UseStepperItemHandlersParams): UseStepperItemHandlersReturn => {
  const handleClick = useCallback<NonNullable<StepperItemProps['onClick']>>(
    (event) => {
      onClick?.(event);

      if (!event.defaultPrevented && !disabled) {
        onValueChange(value);
      }
    },
    [disabled, onClick, onValueChange, value],
  );

  const handleKeyDown = useCallback<NonNullable<StepperItemProps['onKeyDown']>>(
    (event) => {
      onKeyDown?.(event);

      if (event.defaultPrevented) {
        return;
      }

      const trigger = event.currentTarget;
      const list = trigger.closest<HTMLElement>('[data-stepper-list="true"]');

      if (!list) {
        return;
      }

      const triggers = Array.from(
        list.querySelectorAll<HTMLButtonElement>(
          '[data-stepper-trigger="true"]:not(:disabled)',
        ),
      );
      const currentIndex = triggers.indexOf(trigger);

      if (currentIndex === -1) {
        return;
      }

      const focusTrigger = (index: number) => {
        const nextTrigger = triggers[index];

        nextTrigger?.focus();
        nextTrigger?.click();
      };

      const previousKey = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
      const nextKey = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';

      if (event.key === nextKey) {
        event.preventDefault();
        focusTrigger((currentIndex + 1) % triggers.length);
      }

      if (event.key === previousKey) {
        event.preventDefault();
        focusTrigger((currentIndex - 1 + triggers.length) % triggers.length);
      }

      if (event.key === 'Home') {
        event.preventDefault();
        focusTrigger(0);
      }

      if (event.key === 'End') {
        event.preventDefault();
        focusTrigger(triggers.length - 1);
      }
    },
    [onKeyDown, orientation],
  );

  return {
    handleClick,
    handleKeyDown,
  };
};
