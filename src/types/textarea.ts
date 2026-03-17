import type { ReactNode, TextareaHTMLAttributes } from 'react';

import type { HelperTextColor } from '@/types/helper-text';
import type { InputColor, InputSize } from '@/types/input';

/**
 * Additional optional props supported by the textarea component.
 */
export type TextareaOptionalProps = Partial<{
  /**
   * Renders content at the end of the textarea field.
   */
  endContent: ReactNode;
  /**
   * Displays supporting text below the textarea.
   */
  helperText: ReactNode;
  /**
   * Sets the semantic color treatment of the helper text.
   * @default 'default'
   */
  helperColor: HelperTextColor;
  /**
   * Renders a label above the textarea.
   */
  label: ReactNode;
  /**
   * Defines the character limit used by the built-in counter.
   */
  max: number;
  /**
   * Controls the textarea spacing and typography scale.
   * @default 'md'
   */
  size: InputSize;
  /**
   * Renders content at the start of the textarea field.
   */
  startContent: ReactNode;
  /**
   * Applies the semantic color treatment of the textarea.
   * @default 'default'
   */
  color: InputColor;
}>;

/**
 * Props accepted by the reusable textarea component.
 */
export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'color' | 'size'
> &
  TextareaOptionalProps;
