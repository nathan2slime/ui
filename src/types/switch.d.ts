import type {
  CheckedChangeDetails as ZagSwitchCheckedChangeDetails,
  ElementIds as ZagSwitchElementIds,
  Props as ZagSwitchProps,
} from '@zag-js/switch';
import type { PropsWithChildren, ReactNode } from 'react';

/** Visual density presets available to the switch. */
export type SwitchSize = 'sm' | 'md' | 'lg';

/** Semantic color treatments available to the checked switch state. */
export type SwitchColor = 'default' | 'success' | 'warning' | 'danger';

/** Position of the visible label relative to the switch control. */
export type SwitchLabelPlacement = 'start' | 'end';

/** Details emitted when the checked state changes. */
export type SwitchCheckedChangeDetails = ZagSwitchCheckedChangeDetails;

/** Element id overrides forwarded to the underlying Zag switch machine. */
export type SwitchElementIds = ZagSwitchElementIds;

/**
 * Props accepted by the Zag-backed switch component.
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" defaultChecked />
 * ```
 */
export type SwitchProps = PropsWithChildren<
  Omit<ZagSwitchProps, 'id' | 'label'> &
    Partial<{
      /** Stable id used by the Zag switch machine. */
      id: string;
      /** Class name applied to the root label element. */
      className: string;
      /** Applies a semantic color treatment to the checked state. @defaultValue 'default' */
      color: SwitchColor;
      /** Controls the switch dimensions and spacing. @defaultValue 'md' */
      size: SwitchSize;
      /** Visible label content. Falls back to `children`, then checked/unchecked text. */
      label: ReactNode;
      /** Text rendered when checked and no explicit label is provided. @defaultValue 'On' */
      checkedLabel: ReactNode;
      /** Text rendered when unchecked and no explicit label is provided. @defaultValue 'Off' */
      uncheckedLabel: ReactNode;
      /** Places the label before or after the switch control. @defaultValue 'end' */
      labelPlacement: SwitchLabelPlacement;
    }>
>;
