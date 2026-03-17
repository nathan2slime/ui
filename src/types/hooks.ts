import type { ChangeEventHandler, Dispatch, SetStateAction } from 'react';

import type { InputProps } from '@/types/input';
import type { TabsTriggerProps } from '@/types/tabs';
import type { TextareaProps } from '@/types/textarea';
import type { TooltipTriggerProps } from '@/types/tooltip';

/**
 * Dependencies consumed by `useInputChangeHandler`.
 *
 * @example
 * ```ts
 * const params: UseInputChangeHandlerParams = {
 *   onChange: undefined,
 *   setCurrentLength: () => 0,
 * };
 * ```
 */
export type UseInputChangeHandlerParams = {
  /**
   * Optional consumer change handler forwarded after the internal length update.
   */
  onChange: InputProps['onChange'];
  /**
   * State setter used to keep the current character count in sync.
   */
  setCurrentLength: Dispatch<SetStateAction<number>>;
};

/**
 * Return type produced by `useInputChangeHandler`.
 */
export type UseInputChangeHandlerReturn = ChangeEventHandler<HTMLInputElement>;

/**
 * Dependencies consumed by `useTextareaChangeHandler`.
 */
export type UseTextareaChangeHandlerParams = {
  /**
   * Optional consumer change handler forwarded after the internal length update.
   */
  onChange: TextareaProps['onChange'];
  /**
   * State setter used to keep the current character count in sync.
   */
  setCurrentLength: Dispatch<SetStateAction<number>>;
};

/**
 * Return type produced by `useTextareaChangeHandler`.
 */
export type UseTextareaChangeHandlerReturn =
  ChangeEventHandler<HTMLTextAreaElement>;

/**
 * Dependencies consumed by `useTabsTriggerHandlers`.
 */
export type UseTabsTriggerHandlersParams = {
  /**
   * Prevents value changes and roving keyboard behavior when true.
   */
  disabled: boolean;
  /**
   * Consumer click handler merged into the returned trigger handler.
   */
  onClick: TabsTriggerProps['onClick'];
  /**
   * Consumer keyboard handler merged into the returned trigger handler.
   */
  onKeyDown: TabsTriggerProps['onKeyDown'];
  /**
   * Callback used to activate the current tab value.
   */
  onValueChange: (value: string) => void;
  /**
   * Value represented by the current trigger.
   */
  value: string;
};

/**
 * Memoized handlers returned by `useTabsTriggerHandlers`.
 */
export type UseTabsTriggerHandlersReturn = {
  /**
   * Click handler that merges consumer behavior with tab activation.
   */
  handleClick: NonNullable<TabsTriggerProps['onClick']>;
  /**
   * Keyboard handler that supports roving tab navigation.
   */
  handleKeyDown: NonNullable<TabsTriggerProps['onKeyDown']>;
};

/**
 * Dependencies consumed by `useTooltipTriggerHandlers`.
 */
export type UseTooltipTriggerHandlersParams = {
  /**
   * Closes the tooltip.
   */
  close: VoidFunction;
  /**
   * Consumer blur handler merged into the returned handler.
   */
  onBlur: TooltipTriggerProps['onBlur'];
  /**
   * Consumer focus handler merged into the returned handler.
   */
  onFocus: TooltipTriggerProps['onFocus'];
  /**
   * Consumer mouse enter handler merged into the returned handler.
   */
  onMouseEnter: TooltipTriggerProps['onMouseEnter'];
  /**
   * Consumer mouse leave handler merged into the returned handler.
   */
  onMouseLeave: TooltipTriggerProps['onMouseLeave'];
  /**
   * Opens the tooltip.
   */
  open: VoidFunction;
};

/**
 * Memoized handlers returned by `useTooltipTriggerHandlers`.
 */
export type UseTooltipTriggerHandlersReturn = {
  /**
   * Blur handler that closes the tooltip.
   */
  handleBlur: NonNullable<TooltipTriggerProps['onBlur']>;
  /**
   * Focus handler that opens the tooltip.
   */
  handleFocus: NonNullable<TooltipTriggerProps['onFocus']>;
  /**
   * Mouse enter handler that opens the tooltip.
   */
  handleMouseEnter: NonNullable<TooltipTriggerProps['onMouseEnter']>;
  /**
   * Mouse leave handler that closes the tooltip.
   */
  handleMouseLeave: NonNullable<TooltipTriggerProps['onMouseLeave']>;
};
