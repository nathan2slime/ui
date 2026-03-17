import { forwardRef, useEffect, useId, useState } from 'react';
import { cx } from 'styled-system/css';

import { HelperText } from '@/components/helper-text';
import { useInputChangeHandler } from '@/components/input/hooks/use-input-change-handler';
import {
  inputAdornmentStyles,
  inputCountStyles,
  inputFieldWrapperStyles,
  inputFooterStyles,
  inputHelperListStyles,
  inputRootStyles,
  inputStyles,
} from '@/components/input/input.styles';
import { getCharacterLimit } from '@/components/input/utils/get-character-limit';
import { getValueLength } from '@/components/input/utils/get-value-length';
import type { InputProps } from '@/types/input';

/**
 * Renders a styled text input with support for side content, semantic colors, and helper text.
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter spell name..." />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      defaultValue,
      disabled = false,
      endContent,
      endAdornment,
      color = 'default',
      helperText,
      helperColor = 'default',
      id,
      max,
      maxLength,
      onChange,
      size = 'md',
      startContent,
      startAdornment,
      type = 'text',
      value,
      ...props
    },
    ref,
  ) => {
    const helperBaseId = useId();
    const resolvedStartContent = startContent ?? startAdornment;
    const resolvedEndContent = endContent ?? endAdornment;
    const characterLimit = getCharacterLimit(max, maxLength, type);
    const effectiveMaxLength = maxLength ?? characterLimit ?? undefined;
    const [currentLength, setCurrentLength] = useState(() =>
      getValueLength(value ?? defaultValue),
    );

    useEffect(() => {
      if (value === undefined) {
        return;
      }

      setCurrentLength(getValueLength(value));
    }, [value]);

    const helperTextId = helperText ? `${helperBaseId}-helper-text` : undefined;
    const describedBy = [props['aria-describedby'], helperTextId]
      .filter(Boolean)
      .join(' ');
    const showFooter = Boolean(helperText) || characterLimit !== null;
    const handleChange = useInputChangeHandler({
      onChange,
      setCurrentLength,
    });

    return (
      <div className={inputRootStyles({ size })}>
        <div className={inputFieldWrapperStyles()}>
          {resolvedStartContent ? (
            <span
              className={inputAdornmentStyles({
                placement: 'start',
                color,
                size,
              })}
            >
              {resolvedStartContent}
            </span>
          ) : null}
          <input
            {...props}
            aria-describedby={describedBy || undefined}
            defaultValue={defaultValue}
            id={id}
            max={max}
            maxLength={effectiveMaxLength}
            ref={ref}
            className={cx(
              inputStyles({
                hasEndAdornment: Boolean(resolvedEndContent),
                hasStartAdornment: Boolean(resolvedStartContent),
                color,
                size,
              }),
              className,
            )}
            disabled={disabled}
            onChange={handleChange}
            type={type}
            value={value}
          />
          {resolvedEndContent ? (
            <span
              className={inputAdornmentStyles({
                placement: 'end',
                color,
                size,
              })}
            >
              {resolvedEndContent}
            </span>
          ) : null}
        </div>
        {showFooter ? (
          <div className={inputFooterStyles()}>
            {helperText ? (
              <div className={inputHelperListStyles()}>
                <HelperText id={helperTextId} color={helperColor} size={size}>
                  {helperText}
                </HelperText>
              </div>
            ) : null}
            {characterLimit !== null ? (
              <span className={inputCountStyles({ size })}>
                {currentLength}/{characterLimit}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';
