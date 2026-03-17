import { useCallback } from 'react';

import type {
  UseTextareaChangeHandlerParams,
  UseTextareaChangeHandlerReturn,
} from '@/types/hooks';

/**
 * Creates a stable change handler that keeps the textarea character count in sync.
 *
 * @param params Textarea change dependencies.
 * @returns Memoized change handler for the textarea element.
 */
export const useTextareaChangeHandler = ({
  onChange,
  setCurrentLength,
}: UseTextareaChangeHandlerParams): UseTextareaChangeHandlerReturn => {
  return useCallback(
    (event) => {
      setCurrentLength(event.currentTarget.value.length);
      onChange?.(event);
    },
    [onChange, setCurrentLength],
  );
};
