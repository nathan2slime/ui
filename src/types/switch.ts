import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';

/**
 * Available size presets for the switch control.
 */
export type SwitchSize = 'sm' | 'md' | 'lg';

/**
 * Semantic colors used to tint the switch.
 */
export type SwitchColor = 'default' | 'success' | 'warning' | 'danger';

/**
 * Positions supported for the label relative to the control.
 */
export type SwitchLabelPlacement = 'start' | 'end';

/**
 * Shape of the callback triggered whenever the checked state changes.
 */
export type SwitchChangeHandler = (
  checked: boolean,
  event: ChangeEvent<HTMLInputElement>,
) => void;

/**
 * Props accepted by the Switch component.
 */
export type SwitchProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'size' | 'type'
> &
  Partial<{
    /**
     * Renders text or custom content next to the switch.
     */
    label: ReactNode;
    /**
     * Controls whether the label is rendered before or after the switch.
     * @default 'end'
     */
    labelPlacement: SwitchLabelPlacement;
    /**
     * Receives the latest checked state whenever the switch changes.
     */
    onCheckedChange: SwitchChangeHandler;
    /**
     * Adjusts the dimensions of the track and thumb.
     * @default 'md'
     */
    size: SwitchSize;
    /**
     * Applies the semantic color styling to the switch.
     * @default 'default'
     */
    color: SwitchColor;
  }>;
