import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import type { Props as ZagTabsProps } from '@zag-js/tabs';
import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

/** The visual axis used by the tabs list and its keyboard navigation. */
export type TabsOrientation = 'horizontal' | 'vertical';

/** The visual density applied to every tabs part. */
export type TabsSize = 'sm' | 'md' | 'lg';

/** Semantic accent treatments available to the tabs root. */
export type TabsColor = 'default' | 'success' | 'warning' | 'danger';

/**
 * Props for the tabs root. Zag owns selection and focus behavior; `id` is
 * intentionally generated internally so every root remains SSR-safe.
 */
export type TabsRootProps = PropsWithChildren<
  Omit<ZagTabsProps, 'id' | 'orientation'> & {
    /** The accent used by the active tab and indicator. @defaultValue 'default' */
    color?: TabsColor;
    /** The visual density of the tab controls. @defaultValue 'md' */
    size?: TabsSize;
    /** The tab axis. @defaultValue 'horizontal' */
    orientation?: TabsOrientation;
    /** A class name merged onto the root primitive. */
    className?: string;
  }
>;

/** Props accepted by the tabs list part. */
export type TabsListProps = HTMLAttributes<HTMLDivElement>;

/**
 * Props accepted by a trigger. `value` identifies the associated content and
 * `disabled` prevents selection and keyboard focus through Zag.
 */
export type TabsTriggerProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children' | 'disabled' | 'type'
> &
  PropsWithChildren<{
    value: string;
    disabled?: boolean;
  }>;

/** Props accepted by a tab panel. */
export type TabsContentProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'children' | 'id'
> &
  PropsWithChildren<{
    value: string;
  }>;

/** Props accepted by the optional moving active-tab indicator. */
export type TabsIndicatorProps = HTMLAttributes<HTMLDivElement>;

/** The normalized element prop shape used by the tabs compound context. */
export type TabsElementProps = ZagPropTypes;
