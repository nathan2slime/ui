import type {
  CheckedChangeDetails as ZagCheckboxCheckedChangeDetails,
  CheckedState as ZagCheckboxCheckedState,
  ElementIds as ZagCheckboxElementIds,
  Props as ZagCheckboxProps,
} from '@zag-js/checkbox';
import type { PropsWithChildren, ReactNode } from 'react';

/** Visual density presets available to the checkbox. */
export type CheckboxSize = 'sm' | 'md' | 'lg';

/** Semantic color treatments available to the checked checkbox state. */
export type CheckboxColor = 'default' | 'success' | 'warning' | 'danger';

/** Position of the visible label relative to the checkbox control. */
export type CheckboxLabelPlacement = 'start' | 'end';

/** Checked state supported by Zag, including the indeterminate state. */
export type CheckboxCheckedState = ZagCheckboxCheckedState;

/** Details emitted when the checked state changes. */
export type CheckboxCheckedChangeDetails = ZagCheckboxCheckedChangeDetails;

/** Element id overrides forwarded to the underlying Zag checkbox machine. */
export type CheckboxElementIds = ZagCheckboxElementIds;

/**
 * Props accepted by the Zag-backed checkbox component.
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" defaultChecked />
 * ```
 */
export type CheckboxProps = PropsWithChildren<
  Omit<ZagCheckboxProps, 'id' | 'label'> &
    Partial<{
      /** Stable id used by the Zag checkbox machine. */
      id: string;
      /** Class name applied to the root label element. */
      className: string;
      /** Applies a semantic color treatment to the checked state. @defaultValue 'default' */
      color: CheckboxColor;
      /** Controls the checkbox dimensions and spacing. @defaultValue 'md' */
      size: CheckboxSize;
      /** Visible label content. Falls back to `children`, then checked-state text. */
      label: ReactNode;
      /** Text rendered when checked and no explicit label is provided. @defaultValue 'checked' */
      checkedLabel: ReactNode;
      /** Text rendered when unchecked and no explicit label is provided. @defaultValue 'unchecked' */
      uncheckedLabel: ReactNode;
      /** Text rendered when indeterminate and no explicit label is provided. @defaultValue 'indeterminate' */
      indeterminateLabel: ReactNode;
      /** Places the label before or after the checkbox control. @defaultValue 'end' */
      labelPlacement: CheckboxLabelPlacement;
    }>
>;
