import { useCallback } from 'react';

import type {
  UseTabsTriggerHandlersParams,
  UseTabsTriggerHandlersReturn,
} from '@/types/hooks';
import type { TabsTriggerProps } from '@/types/tabs';

/**
 * Creates stable event handlers for a tabs trigger.
 *
 * @param params Trigger behavior dependencies.
 * @returns Memoized click and keyboard handlers for the trigger button.
 */
export const useTabsTriggerHandlers = ({
  disabled,
  onClick,
  onKeyDown,
  onValueChange,
  value,
}: UseTabsTriggerHandlersParams): UseTabsTriggerHandlersReturn => {
  const handleClick = useCallback<NonNullable<TabsTriggerProps['onClick']>>(
    (event) => {
      onClick?.(event);

      if (!event.defaultPrevented && !disabled) {
        onValueChange(value);
      }
    },
    [disabled, onClick, onValueChange, value],
  );

  const handleKeyDown = useCallback<NonNullable<TabsTriggerProps['onKeyDown']>>(
    (event) => {
      onKeyDown?.(event);

      if (event.defaultPrevented) {
        return;
      }

      const trigger = event.currentTarget;
      const list = trigger.parentElement;

      if (!list) {
        return;
      }

      const triggers = Array.from(
        list.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)'),
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

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        focusTrigger((currentIndex + 1) % triggers.length);
      }

      if (event.key === 'ArrowLeft') {
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
    [onKeyDown],
  );

  return {
    handleClick,
    handleKeyDown,
  };
};
