import { ArrowDown01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { forwardRef } from 'react';
import { cx } from 'styled-system/css';

import { useSelectContext } from '@/components/select/select.context';
import {
  selectControlStyles,
  selectFieldWrapperStyles,
  selectIndicatorStyles,
  selectSideContentStyles,
} from '@/components/select/select.styles';
import type { SelectControlProps } from '@/types/select';

/**
 * Renders the native select control with design-system styling.
 *
 * @example
 * ```tsx
 * <Select.Control defaultValue="support">
 *   <Select.Item value="support">Support</Select.Item>
 * </Select.Control>
 * ```
 */
export const SelectControl = forwardRef<HTMLSelectElement, SelectControlProps>(
  ({ children, className, endContent, startContent, ...props }, ref) => {
    const { color, controlId, helperTextId, size, withHelperText } =
      useSelectContext();

    const describedBy = [
      props['aria-describedby'],
      withHelperText ? helperTextId : null,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={selectFieldWrapperStyles()}>
        {startContent ? (
          <span
            className={selectSideContentStyles({
              placement: 'start',
              color,
              size,
            })}
          >
            {startContent}
          </span>
        ) : null}
        <select
          {...props}
          aria-describedby={describedBy || undefined}
          className={cx(
            selectControlStyles({
              hasEndContent: Boolean(endContent),
              hasStartContent: Boolean(startContent),
              color,
              size,
            }),
            className,
          )}
          id={controlId}
          ref={ref}
        >
          {children}
        </select>
        {endContent ? (
          <span
            className={selectSideContentStyles({
              placement: 'end',
              color,
              size,
            })}
          >
            {endContent}
          </span>
        ) : null}
        <span className={selectIndicatorStyles({ color, size })}>
          <HugeiconsIcon
            aria-hidden="true"
            color="currentColor"
            icon={ArrowDown01Icon}
            size={16}
          />
        </span>
      </div>
    );
  },
);

SelectControl.displayName = 'Select.Control';
