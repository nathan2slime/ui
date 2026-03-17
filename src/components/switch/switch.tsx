import { type ChangeEvent, forwardRef, type ReactNode, useId } from 'react';
import { cx } from 'styled-system/css';

import {
  switchControlStyles,
  switchInputStyles,
  switchLabelStyles,
  switchRootStyles,
  switchTrackStyles,
} from '@/components/switch/switch.styles';
import type { SwitchProps } from '@/types/switch';

/**
 * Accessible switch component built on top of a native checkbox.
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" />
 * ```
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      'aria-describedby': ariaDescribedBy,
      className,
      color = 'default',
      disabled = false,
      id,
      label,
      labelPlacement = 'end',
      onChange,
      onCheckedChange,
      size = 'md',
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const controlId = id ?? `${generatedId}-switch`;
    const describedBy = [ariaDescribedBy].filter(Boolean).join(' ');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      onCheckedChange?.(event.currentTarget.checked, event);
    };

    const textContent: ReactNode = label ? (
      <span className={switchLabelStyles({ size })}>{label}</span>
    ) : null;

    return (
      <label
        className={cx(
          switchRootStyles({ disabled, labelPlacement, size }),
          className,
        )}
        data-disabled={disabled ? 'true' : undefined}
        data-color={color}
        data-label-placement={labelPlacement}
        data-size={size}
      >
        {labelPlacement === 'start' ? textContent : null}
        <span className={switchControlStyles({ color, size })}>
          <input
            {...rest}
            aria-describedby={describedBy || undefined}
            className={switchInputStyles()}
            disabled={disabled}
            id={controlId}
            onChange={handleChange}
            ref={ref}
            type="checkbox"
          />
          <span aria-hidden="true" className={switchTrackStyles({ size })} />
        </span>
        {labelPlacement === 'end' ? textContent : null}
      </label>
    );
  },
);

Switch.displayName = 'Switch';
