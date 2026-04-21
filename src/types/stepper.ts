import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  OlHTMLAttributes,
  PropsWithChildren,
} from 'react';

/**
 * Supported list orientations for the stepper layout.
 *
 * @example
 * ```ts
 * const orientation: StepperOrientation = 'vertical';
 * ```
 */
export type StepperOrientation = 'horizontal' | 'vertical';

/**
 * Density presets shared across stepper parts.
 *
 * @example
 * ```ts
 * const variant: StepperVariant = 'compact';
 * ```
 */
export type StepperVariant = 'default' | 'compact';

/**
 * Size presets supported by the stepper indicator and text.
 */
export type StepperSize = 'sm' | 'md';

/**
 * Explicit status overrides accepted by individual steps.
 *
 * @remarks
 * Steps without an explicit status stay inactive until they become current, and
 * previous steps are marked as completed automatically.
 */
export type StepperItemStatus = 'completed' | 'error';

/**
 * Computed visual states applied internally across stepper parts.
 */
export type StepperItemState =
  | 'active'
  | 'completed'
  | 'disabled'
  | 'error'
  | 'inactive';

/**
 * Shared optional props supported across the stepper root and nested parts.
 */
export type StepperSharedOptionalProps = Partial<{
  /**
   * Controls the orientation used by the list and keyboard navigation.
   * @default 'horizontal'
   */
  orientation: StepperOrientation;
  /**
   * Controls the spacing and sizing scale used by nested parts.
   * @default 'md'
   */
  size: StepperSize;
  /**
   * Applies a denser or more spacious treatment to nested parts.
   * @default 'default'
   */
  variant: StepperVariant;
}>;

/**
 * Props accepted by the stepper root container.
 */
export type StepperRootProps = PropsWithChildren<
  Partial<{
    /**
     * Accessible label announced for the navigation landmark.
     * @default 'Progress'
     */
    ariaLabel: string;
    /**
     * Merges custom classes into the root container.
     */
    className: string;
    /**
     * Sets the initial active step value for uncontrolled usage.
     */
    defaultValue: string;
    /**
     * Called whenever the active step changes.
     */
    onValueChange: (value: string) => void;
    /**
     * Controls the active step value.
     */
    value: string;
  }> &
    StepperSharedOptionalProps
>;

/**
 * Props accepted by the ordered list that wraps step items.
 *
 * @example
 * ```tsx
 * <Stepper.List />
 * ```
 */
export type StepperListProps = PropsWithChildren<
  OlHTMLAttributes<HTMLOListElement>
>;

/**
 * Props accepted by an individual step item.
 *
 * @example
 * ```tsx
 * <Stepper.Item value="payment">...</Stepper.Item>
 * ```
 */
export type StepperItemProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Unique value used to identify and activate the step.
     */
    value: string;
  } & Partial<{
      /**
       * Overrides the visual state when the step is not the current one.
       */
      status: StepperItemStatus;
    }>
>;

/**
 * Props accepted by the step indicator.
 */
export type StepperIndicatorProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement>
>;

/**
 * Props accepted by the step title.
 */
export type StepperTitleProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement>
>;

/**
 * Props accepted by the step description.
 */
export type StepperDescriptionProps = PropsWithChildren<
  HTMLAttributes<HTMLParagraphElement>
>;

/**
 * Props accepted by the connector rendered after a step item.
 *
 * @remarks
 * Render this inside `Stepper.Item` so it can inherit the state and orientation
 * of the current step.
 */
export type StepperSeparatorProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement>
>;
