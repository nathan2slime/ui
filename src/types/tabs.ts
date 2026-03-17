import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';

/**
 * Props accepted by the tabs root container.
 */
export type TabsRootProps = PropsWithChildren<
  Partial<{
    /**
     * Merges custom classes into the root container.
     */
    className: string;
    /**
     * Sets the initial active tab for uncontrolled usage.
     */
    defaultValue: string;
    /**
     * Called whenever the active tab value changes.
     */
    onValueChange: (value: string) => void;
    /**
     * Controls the active tab value.
     */
    value: string;
  }>
>;

/**
 * Props accepted by the tabs list wrapper.
 *
 * @example
 * ```tsx
 * <Tabs.List />
 * ```
 */
export type TabsListProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> &
    Partial<{
      /**
       * Merges custom classes into the tab list element.
       */
      className: string;
    }>
>;

/**
 * Props accepted by a single tabs trigger.
 *
 * @example
 * ```tsx
 * <Tabs.Trigger value="account">Account</Tabs.Trigger>
 * ```
 */
export type TabsTriggerProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Associates the trigger with its matching content panel.
     */
    value: string;
  } & Partial<{
      /**
       * Merges custom classes into the trigger element.
       */
      className: string;
    }>
>;

/**
 * Props accepted by a single tabs content panel.
 *
 * @example
 * ```tsx
 * <Tabs.Content value="account">Account settings</Tabs.Content>
 * ```
 */
export type TabsContentProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    /**
     * Associates the panel with its matching trigger.
     */
    value: string;
  } & Partial<{
      /**
       * Merges custom classes into the content panel.
       */
      className: string;
      /**
       * Keeps the panel mounted even when it is inactive.
       * @default false
       */
      forceMount: boolean;
    }>
>;
