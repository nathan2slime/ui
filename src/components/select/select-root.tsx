import { useId, useMemo, useState } from 'react';
import { cx } from 'styled-system/css';

import { SelectContext } from '@/components/select/select.context';
import { selectRootStyles } from '@/components/select/select.styles';
import type { SelectRootProps } from '@/types/select';

/**
 * Provides shared state, ids, and semantic colors for select compound parts.
 *
 * @example
 * ```tsx
 * <Select>
 *   <Select.Label>Spell school</Select.Label>
 *   <Select.Control />
 * </Select>
 * ```
 */
export const SelectRoot = ({
  children,
  className,
  color = 'default',
  helperColor = 'default',
  size = 'md',
}: SelectRootProps) => {
  const baseId = useId();
  const [withHelperText, setWithHelperText] = useState(false);

  const contextValue = useMemo(
    () => ({
      controlId: `${baseId}-control`,
      helperTextId: `${baseId}-helper-text`,
      color,
      helperColor,
      registerHelperText: setWithHelperText,
      size,
      withHelperText,
    }),
    [baseId, color, helperColor, size, withHelperText],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <div className={cx(selectRootStyles(), className)}>{children}</div>
    </SelectContext.Provider>
  );
};
