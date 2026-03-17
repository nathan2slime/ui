import { forwardRef, useId } from 'react';
import { cx } from 'styled-system/css';

import {
  radioControlStyles,
  radioInputStyles,
  radioLabelStyles,
  radioRootStyles,
  radioVisualStyles,
} from '@/components/radio/radio.styles';
import type { RadioProps } from '@/types/radio';

/**
 * Custom-styled radio built on top of the native input element.
 *
 * @example
 * ```tsx
 * <Radio name="plan" label="Growth plan" />
 * ```
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      'aria-describedby': ariaDescribedBy,
      className,
      color = 'default',
      disabled = false,
      id,
      label,
      size = 'md',
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const controlId = id ?? `${generatedId}-radio`;
    const describedBy = [ariaDescribedBy].filter(Boolean).join(' ');

    return (
      <label
        className={cx(radioRootStyles({ disabled }), className)}
        data-color={color}
        data-disabled={disabled ? 'true' : undefined}
        data-size={size}
      >
        <span className={radioControlStyles({ color, size })}>
          <input
            {...rest}
            aria-describedby={describedBy || undefined}
            className={radioInputStyles()}
            disabled={disabled}
            id={controlId}
            ref={ref}
            type="radio"
          />
          <span aria-hidden="true" className={radioVisualStyles({ size })} />
        </span>
        {label ? (
          <span className={radioLabelStyles({ size })}>{label}</span>
        ) : null}
      </label>
    );
  },
);

Radio.displayName = 'Radio';
