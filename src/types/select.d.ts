import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

/**
 * The item shape accepted without custom collection mappers.
 *
 * @example
 * ```ts
 * const items: SelectOption[] = [
 *   { label: 'First option', value: 'first' },
 * ];
 * ```
 */
export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

/**
 * Semantic states exposed as neutral data attributes by the select.
 */
export type SelectColor = 'default' | 'success' | 'warning' | 'danger';

/**
 * Semantic states available to the helper text.
 */
export type SelectHelperColor = SelectColor;

/**
 * Structural size names exposed as neutral data attributes by the select.
 */
export type SelectSize = 'sm' | 'md' | 'lg';

/**
 * Describes the scalar value emitted by the select.
 */
export type SelectValue = string | null;

/**
 * Props shared by the select root regardless of the item shape.
 */
export type SelectBaseProps<T> = PropsWithChildren<{
  /** The canonical collection rendered by the select. */
  items: readonly T[];
  /** The currently selected scalar value. */
  value?: SelectValue;
  /** The initial selected scalar value for an uncontrolled select. */
  defaultValue?: SelectValue;
  /** Called with the selected scalar value, or `null` when selection is empty. */
  onValueChange?: (value: SelectValue) => void;
  /** The name submitted by the hidden native select. */
  name?: string;
  /** Associates the hidden native select with a form element. */
  form?: string;
  /** Enables browser autofill on the hidden native select. */
  autoComplete?: string;
  /** Disables the trigger and the hidden native select. */
  disabled?: boolean;
  /** Marks the select as invalid. */
  invalid?: boolean;
  /** Prevents interactive selection while retaining focus semantics. */
  readOnly?: boolean;
  /** Marks the hidden native select as required. */
  required?: boolean;
  /** Controls the popup open state. */
  open?: boolean;
  /** The initial popup open state for an uncontrolled select. */
  defaultOpen?: boolean;
  /** Called when the popup open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether selecting an item closes the popup. @defaultValue true */
  closeOnSelect?: boolean;
  /** Whether keyboard navigation wraps at the collection boundaries. @defaultValue false */
  loopFocus?: boolean;
  /** Whether the popup is rendered through Zag's portal. @defaultValue true */
  portalled?: boolean;
  /** Applies a semantic state to the root and trigger data attributes. @defaultValue 'default' */
  color?: SelectColor;
  /** Applies a semantic state to helper text. @defaultValue 'default' */
  helperColor?: SelectHelperColor;
  /** Applies a structural size data attribute. @defaultValue 'md' */
  size?: SelectSize;
  /** Renders custom content for each popup item. */
  renderItem?: (item: T) => ReactNode;
  /** Overrides the SSR-safe root identifier. */
  id?: string;
  /** Merges a class name into the neutral root primitive. */
  className?: string;
}>;

/**
 * Props accepted for the built-in `{ label, value, disabled? }` item shape.
 */
export type SelectDefaultProps = SelectBaseProps<SelectOption> &
  Partial<{
    /** Converts a built-in item to the visible text used by Zag. */
    itemToString: (item: SelectOption) => string;
    /** Converts a built-in item to its submitted scalar value. */
    itemToValue: (item: SelectOption) => string;
    /** Overrides the disabled state derived from `item.disabled`. */
    isItemDisabled: (item: SelectOption) => boolean;
  }>;

/**
 * Props accepted for custom item shapes. Both collection mappers are required
 * so Zag can derive stable values and typeahead text without inspecting data.
 */
export type SelectCustomProps<T> = SelectBaseProps<T> & {
  /** Converts a custom item to the visible text used by Zag. */
  itemToString: (item: T) => string;
  /** Converts a custom item to its submitted scalar value. */
  itemToValue: (item: T) => string;
  /** Reports whether a custom item cannot be selected. */
  isItemDisabled?: (item: T) => boolean;
};

/**
 * Public root props. Built-in items use optional mappers; custom items require
 * both `itemToString` and `itemToValue`.
 */
export type SelectProps<T = SelectOption> = T extends SelectOption
  ? SelectBaseProps<T> &
      Partial<{
        /** Converts a built-in item to the visible text used by Zag. */
        itemToString: (item: T) => string;
        /** Converts a built-in item to its submitted scalar value. */
        itemToValue: (item: T) => string;
        /** Overrides the disabled state derived from `item.disabled`. */
        isItemDisabled: (item: T) => boolean;
      }>
  : SelectCustomProps<T>;

/**
 * Props accepted by the accessible label compound part.
 */
export type SelectLabelProps = PropsWithChildren<
  LabelHTMLAttributes<HTMLLabelElement>
>;

/**
 * Props accepted by the button trigger compound part.
 *
 * The root owns selection state and the native button type, while standard
 * button attributes and event handlers remain available for composition.
 */
export type SelectControlProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'color' | 'disabled' | 'id' | 'type'
> &
  Partial<{
    /** Content rendered before the selected value. */
    startContent: ReactNode;
    /** Content rendered after the selected value. */
    endContent: ReactNode;
    /** Content shown while no item is selected. */
    placeholder: ReactNode;
  }>;

/**
 * Props accepted by the helper text compound part.
 */
export type SelectHelperTextProps = Omit<
  HTMLAttributes<HTMLParagraphElement>,
  'children' | 'color' | 'id'
> &
  PropsWithChildren<
    Partial<{
      /** Overrides the root helper color data attribute. */
      color: SelectHelperColor;
    }>
  >;
