import { forwardRef, useEffect, useId, useState } from 'react';
import { cx } from 'styled-system/css';

import { HelperText } from '@/components/helper-text';
import { getCharacterLimit } from '@/components/input/utils/get-character-limit';
import { getValueLength } from '@/components/input/utils/get-value-length';
import { Label } from '@/components/label';
import { useTextareaChangeHandler } from '@/components/textarea/hooks/use-textarea-change-handler';
import {
  textareaCountStyles,
  textareaFieldWrapperStyles,
  textareaFooterStyles,
  textareaRootStyles,
  textareaSideContentStyles,
  textareaStyles,
} from '@/components/textarea/textarea.styles';
import type { TextareaProps } from '@/types/textarea';

/**
 * Renders a styled multiline text area with label, helper text, and character counting support.
 *
 * @example
 * ```tsx
 * <Textarea label="Notes" placeholder="Write your notes here..." />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      color = 'default',
      defaultValue,
      disabled = false,
      endContent,
      helperText,
      helperColor = 'default',
      id,
      label,
      max,
      maxLength,
      onChange,
      rows = 4,
      size = 'md',
      startContent,
      value,
      ...props
    },
    ref,
  ) => {
    const baseId = useId();
    const fieldId = id ?? `${baseId}-textarea`;
    const helperTextId = helperText ? `${baseId}-helper-text` : undefined;
    const characterLimit = getCharacterLimit(max, maxLength, 'text');
    const effectiveMaxLength = maxLength ?? characterLimit ?? undefined;
    const [currentLength, setCurrentLength] = useState(() =>
      getValueLength(value ?? defaultValue),
    );
    const handleChange = useTextareaChangeHandler({
      onChange,
      setCurrentLength,
    });

    useEffect(() => {
      if (value === undefined) {
        return;
      }

      setCurrentLength(getValueLength(value));
    }, [value]);

    const describedBy = [props['aria-describedby'], helperTextId]
      .filter(Boolean)
      .join(' ');
    const showFooter = Boolean(helperText) || characterLimit !== null;

    return (
      <div className={textareaRootStyles()}>
        {label ? (
          <Label color={color} htmlFor={fieldId} size={size}>
            {label}
          </Label>
        ) : null}
        <div className={textareaFieldWrapperStyles()}>
          {startContent ? (
            <span
              className={textareaSideContentStyles({
                placement: 'start',
                color,
                size,
              })}
            >
              {startContent}
            </span>
          ) : null}
          <textarea
            {...props}
            aria-describedby={describedBy || undefined}
            className={cx(
              textareaStyles({
                hasEndContent: Boolean(endContent),
                hasStartContent: Boolean(startContent),
                color,
                size,
              }),
              className,
            )}
            defaultValue={defaultValue}
            disabled={disabled}
            id={fieldId}
            maxLength={effectiveMaxLength}
            onChange={handleChange}
            ref={ref}
            rows={rows}
            value={value}
          />
          {endContent ? (
            <span
              className={textareaSideContentStyles({
                placement: 'end',
                color,
                size,
              })}
            >
              {endContent}
            </span>
          ) : null}
        </div>
        {showFooter ? (
          <div className={textareaFooterStyles()}>
            {helperText ? (
              <HelperText color={helperColor} id={helperTextId} size={size}>
                {helperText}
              </HelperText>
            ) : null}
            {characterLimit !== null ? (
              <span className={textareaCountStyles({ size })}>
                {currentLength}/{characterLimit}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
