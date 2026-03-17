import { useCallback } from 'react';

import type {
  UseInputChangeHandlerParams,
  UseInputChangeHandlerReturn,
} from '@/types/hooks';

/**
 * Creates a stable change handler that keeps the character count in sync.
 *
 * @param params Input change dependencies.
 * @returns Memoized change handler for the input element.
 */
export const useInputChangeHandler = ({
  onChange,
  setCurrentLength,
}: UseInputChangeHandlerParams): UseInputChangeHandlerReturn => {
  return useCallback(
    (event) => {
      setCurrentLength(event.currentTarget.value.length);
      onChange?.(event);
    },
    [onChange, setCurrentLength],
  );
};
