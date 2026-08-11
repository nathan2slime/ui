import type {
  ElementIds as ZagPopoverElementIds,
  IntlTranslations as ZagPopoverIntlTranslations,
  OpenChangeDetails as ZagPopoverOpenChangeDetails,
  Placement as ZagPopoverPlacement,
  PositioningOptions as ZagPopoverPositioningOptions,
  Props as ZagPopoverProps,
  TriggerProps as ZagPopoverTriggerProps,
  TriggerValueChangeDetails as ZagPopoverTriggerValueChangeDetails,
} from '@zag-js/popover';
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';

/** Visual density presets available to the popover. */
export type PopoverSize = 'sm' | 'md' | 'lg';

/** Semantic color treatments available to the popover surface and trigger. */
export type PopoverColor = 'default' | 'success' | 'warning' | 'danger';

/** Element id overrides forwarded to the underlying Zag popover machine. */
export type PopoverElementIds = ZagPopoverElementIds;

/** Localized strings forwarded to the underlying Zag popover machine. */
export type PopoverIntlTranslations = ZagPopoverIntlTranslations;

/** Details emitted when the popover opens or closes. */
export type PopoverOpenChangeDetails = ZagPopoverOpenChangeDetails;

/** Placement values supported by Zag's popper positioning. */
export type PopoverPlacement = ZagPopoverPlacement;

/** Positioning options forwarded to Zag's popper integration. */
export type PopoverPositioningOptions = ZagPopoverPositioningOptions;

/** Props accepted by Zag when deriving trigger behavior. */
export type PopoverTriggerProps = ZagPopoverTriggerProps;

/** Details emitted when the active trigger value changes. */
export type PopoverTriggerValueChangeDetails =
  ZagPopoverTriggerValueChangeDetails;

/**
 * Props accepted by the Zag-backed popover component.
 *
 * @example
 * ```tsx
 * <Popover trigger="Click me" title="Presenters" description="Description">
 *   <button type="button">Action Button</button>
 * </Popover>
 * ```
 */
export type PopoverProps = PropsWithChildren<
  Omit<ZagPopoverProps, 'id'> & {
    /** Visible content rendered inside the trigger button. */
    readonly trigger: ReactNode;
  } & Partial<{
      /** Stable id used by the Zag popover machine. */
      id: string;
      /** Class name applied to the outer root element. */
      className: string;
      /** Inline styles applied to the outer root element. */
      style: CSSProperties;
      /** Class name applied to the trigger button. */
      triggerClassName: string;
      /** Class name applied to the floating positioner element. */
      positionerClassName: string;
      /** Class name applied to the dialog content element. */
      contentClassName: string;
      /** Class name applied to the title element. */
      titleClassName: string;
      /** Class name applied to the description element. */
      descriptionClassName: string;
      /** Class name applied to the body wrapper around `children`. */
      bodyClassName: string;
      /** Class name applied to the footer wrapper. */
      footerClassName: string;
      /** Class name applied to the close trigger button. */
      closeTriggerClassName: string;
      /** Class name applied to the optional arrow container. */
      arrowClassName: string;
      /** Class name applied to the optional arrow tip. */
      arrowTipClassName: string;
      /** Accessible heading rendered at the top of the popover. */
      title: ReactNode;
      /** Supporting text connected through `aria-describedby`. */
      description: ReactNode;
      /** Optional content rendered after the body. */
      footer: ReactNode;
      /** Visible close trigger content. Defaults to a 16px Cancel01Icon. */
      closeLabel: ReactNode;
      /** Renders Zag's arrow parts when enabled. @defaultValue false */
      showArrow: boolean;
      /** Applies a semantic color treatment to the popover. @defaultValue 'default' */
      color: PopoverColor;
      /** Controls trigger and content density. @defaultValue 'md' */
      size: PopoverSize;
    }>
>;
