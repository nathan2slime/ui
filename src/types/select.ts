import type {
  LabelHTMLAttributes,
  OptionHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  SelectHTMLAttributes,
} from 'react';

import type { HelperTextColor } from '@/types/helper-text';
import type { InputColor, InputSize } from '@/types/input';

/**
 * Semantic colors supported by the select component.
 *
 * @remarks
 * This reuses the same semantic states as {@link InputColor}.
 */
export type SelectColor = InputColor;

/**
 * Size presets supported by the select component.
 *
 * @remarks
 * This reuses the same sizing scale as {@link InputSize}.
 */
export type SelectSize = InputSize;

/**
 * Semantic colors supported by the helper text rendered below the select.
 *
 * @remarks
 * This reuses the same helper colors as {@link HelperTextColor}.
 */
export type SelectHelperColor = HelperTextColor;

/**
 * Shared optional props supported across select compound parts.
 */
export type SelectSharedOptionalProps = Partial<{
  /**
   * Shares the helper text semantic color across nested parts.
   * @default 'default'
   */
  helperColor: SelectHelperColor;
  /**
   * Shares the field spacing and typography scale across nested parts.
   * @default 'md'
   */
  size: SelectSize;
  /**
   * Shares the semantic color across nested parts.
   * @default 'default'
   */
  color: SelectColor;
}>;

/**
 * Props accepted by the select root container.
 */
export type SelectRootProps = PropsWithChildren<
  Partial<{
    /**
     * Merges custom classes into the root container.
     */
    className: string;
  }> &
    SelectSharedOptionalProps
>;

/**
 * Props accepted by the select label.
 *
 * @example
 * ```tsx
 * <Select.Label>Spell school</Select.Label>
 * ```
 */
export type SelectLabelProps = PropsWithChildren<
  LabelHTMLAttributes<HTMLLabelElement>
>;

/**
 * Optional props accepted by the native select control.
 */
export type SelectControlOptionalProps = Partial<{
  /**
   * Renders content at the end of the select control.
   */
  endContent: ReactNode;
  /**
   * Renders content at the start of the select control.
   */
  startContent: ReactNode;
}>;

/**
 * Props accepted by the native select control.
 */
export type SelectControlProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> &
  PropsWithChildren &
  SelectControlOptionalProps;

/**
 * Props accepted by the helper text displayed below the select.
 */
export type SelectHelperTextProps = PropsWithChildren<
  Partial<{
    /**
     * Merges custom classes into the helper text element.
     */
    className: string;
    /**
     * Overrides the helper text semantic color.
     */
    color: SelectHelperColor;
  }>
>;

/**
 * Props accepted by the select item wrapper.
 *
 * @example
 * ```tsx
 * <Select.Item value="support">Support</Select.Item>
 * ```
 */
export type SelectItemProps = PropsWithChildren<
  OptionHTMLAttributes<HTMLOptionElement>
>;
