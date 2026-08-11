import type {
  ElementIds as ZagRadioGroupElementIds,
  ItemProps as ZagRadioGroupItemProps,
  ItemState as ZagRadioGroupItemState,
  Props as ZagRadioGroupProps,
  ValueChangeDetails as ZagRadioGroupValueChangeDetails,
} from '@zag-js/radio-group';
import type { CSSProperties, ReactNode } from 'react';

/** Visual density presets available to the radio group. */
export type RadioGroupSize = 'sm' | 'md' | 'lg';

/** Semantic color treatments available to checked radio items. */
export type RadioGroupColor = 'default' | 'success' | 'warning' | 'danger';

/** Item model rendered by the RadioGroup. */
export type RadioGroupItem = {
  /** Stable scalar value submitted by the hidden radio input. */
  readonly value: string;
  /** Visible content rendered for this radio option. */
  readonly label: ReactNode;
  /** Prevents this option from being selected or focused. */
  readonly disabled?: boolean;
  /** Marks this option as invalid. */
  readonly invalid?: boolean;
};

/** Item props forwarded to Zag item helpers. */
export type RadioGroupItemProps = ZagRadioGroupItemProps;

/** State returned by Zag for a radio item. */
export type RadioGroupItemState = ZagRadioGroupItemState;

/** Element id overrides forwarded to the underlying Zag radio group machine. */
export type RadioGroupElementIds = ZagRadioGroupElementIds;

/** Details emitted when the selected value changes. */
export type RadioGroupValueChangeDetails = ZagRadioGroupValueChangeDetails;

/**
 * Props accepted by the Zag-backed radio group component.
 *
 * @example
 * ```tsx
 * <RadioGroup
 *   label="Fruits"
 *   items={[{ value: 'apple', label: 'Apples' }]}
 * />
 * ```
 */
export type RadioGroupProps = Omit<ZagRadioGroupProps, 'id'> & {
  /** Stable id used by the Zag radio group machine. */
  readonly id?: string;
  /** Accessible and visible label for the radio group. */
  readonly label: ReactNode;
  /** Options rendered by the radio group. */
  readonly items: readonly RadioGroupItem[];
  /** Class name applied to the root radiogroup element. */
  readonly className?: string;
  /** Inline styles applied to the root and merged with Zag layout styles. */
  readonly style?: CSSProperties;
  /** Class name applied to the visible group label. */
  readonly labelClassName?: string;
  /** Class name applied to each item root. */
  readonly itemClassName?: string;
  /** Class name applied to each item text element. */
  readonly itemTextClassName?: string;
  /** Class name applied to each item control element. */
  readonly itemControlClassName?: string;
  /** Applies a semantic color treatment to the checked state. @defaultValue 'default' */
  readonly color?: RadioGroupColor;
  /** Controls item dimensions and text size. @defaultValue 'md' */
  readonly size?: RadioGroupSize;
};
