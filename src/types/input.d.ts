import type { InputHTMLAttributes, ReactNode } from 'react';

/** Visual density presets available to the input. */
export type InputSize = 'sm' | 'md' | 'lg';

/** Semantic color treatments available to the input accent. */
export type InputColor = 'default' | 'success' | 'warning' | 'danger';

/** Validation or feedback state displayed around the input. */
export type InputStatus = 'default' | 'success' | 'warning' | 'danger';

/** Visual variants available for the input surface. */
export type InputVariant = 'default' | 'border';

/**
 * Props accepted by the themed native input component.
 *
 * @example
 * ```tsx
 * <Input label="Email" placeholder="you@example.com" helperText="We only use this for updates." />
 * ```
 */
export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'size'
> &
  Partial<{
    /** Class name applied to the outer root element. */
    className: string;
    /** Class name applied to the visible label. */
    labelClassName: string;
    /** Class name applied to the native input element. */
    inputClassName: string;
    /** Class name applied to the helper or error text. */
    helperTextClassName: string;
    /** Visible label connected to the input with `htmlFor`. */
    label: ReactNode;
    /** Supporting text connected through `aria-describedby`. */
    helperText: ReactNode;
    /** Error text connected through `aria-describedby`; sets `aria-invalid` when present. */
    errorText: ReactNode;
    /** Applies a semantic accent color to focus and hover states. @defaultValue 'default' */
    color: InputColor;
    /** Controls feedback styling for label, helper text, and border state. @defaultValue 'default' */
    status: InputStatus;
    /** Controls the input height and font size. @defaultValue 'md' */
    size: InputSize;
    /** Defines the visual style used by the input. @defaultValue 'default' */
    variant: InputVariant;
    /** Expands the input root to fill the width of its container. @defaultValue false */
    fullWidth: boolean;
  }>;
