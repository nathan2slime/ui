import type { InputHTMLAttributes, ReactNode } from 'react';

/**
 * Available size presets for the radio indicator.
 */
export type RadioSize = 'sm' | 'md';

/**
 * Semantic colors that tint the radio outline and dot.
 */
export type RadioColor = 'default' | 'success' | 'warning' | 'danger';

/**
 * Props accepted by the Radio component.
 */
export type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'size' | 'type'
> &
  Partial<{
    /**
     * Renders text or custom content alongside the control.
     */
    label: ReactNode;
    /**
     * Controls the dimensions of the radio indicator.
     * @default 'md'
     */
    size: RadioSize;
    /**
     * Applies the semantic color styling to the control.
     * @default 'default'
     */
    color: RadioColor;
  }>;
