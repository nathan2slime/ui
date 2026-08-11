import { forwardRef, useId } from 'react';

import {
  StyledInputControl,
  StyledInputHelperText,
  StyledInputLabel,
  StyledInputRoot,
} from '@/components/input/input.styles';
import type { InputProps } from '@/types/input';

const joinDescriptionIds = (ids: readonly (string | undefined)[]) => {
  const descriptionIds = ids.filter(
    (id): id is string => typeof id === 'string' && id.length > 0,
  );

  return descriptionIds.length > 0 ? descriptionIds.join(' ') : undefined;
};

/**
 * Renders a themed native input with optional label, helper text, and error text.
 *
 * @example
 * ```tsx
 * <Input label="Email" placeholder="you@example.com" />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      className,
      color = 'default',
      disabled,
      errorText,
      fullWidth = false,
      helperText,
      helperTextClassName,
      id,
      inputClassName,
      label,
      labelClassName,
      size = 'md',
      status = 'default',
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? `input-${generatedId}`;
    const helperTextId = helperText ? `${inputId}-helper` : undefined;
    const errorTextId = errorText ? `${inputId}-error` : undefined;
    const messageId = errorTextId ?? helperTextId;
    const describedBy = joinDescriptionIds([ariaDescribedBy, messageId]);
    const currentStatus = errorText ? 'danger' : status;
    const invalid = errorText ? true : ariaInvalid;

    return (
      <StyledInputRoot
        className={className}
        data-color={color}
        data-disabled={disabled ? 'true' : undefined}
        data-full-width={fullWidth ? 'true' : 'false'}
        data-part="root"
        data-size={size}
        data-status={currentStatus}
        data-variant={variant}
      >
        {label ? (
          <StyledInputLabel
            className={labelClassName}
            data-part="label"
            data-status={currentStatus}
            htmlFor={inputId}
          >
            {label}
          </StyledInputLabel>
        ) : null}
        <StyledInputControl
          {...props}
          aria-describedby={describedBy}
          aria-invalid={invalid}
          className={inputClassName}
          data-part="input"
          data-size={size}
          data-status={currentStatus}
          data-variant={variant}
          disabled={disabled}
          id={inputId}
          ref={ref}
        />
        {errorText || helperText ? (
          <StyledInputHelperText
            className={helperTextClassName}
            data-part="helper-text"
            data-status={currentStatus}
            id={messageId}
          >
            {errorText ?? helperText}
          </StyledInputHelperText>
        ) : null}
      </StyledInputRoot>
    );
  },
);

Input.displayName = 'Input';
