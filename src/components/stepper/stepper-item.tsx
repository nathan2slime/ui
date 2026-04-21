import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useMemo,
} from 'react';
import { cx } from 'styled-system/css';

import { useStepperItemHandlers } from '@/components/stepper/hooks/use-stepper-item-handlers';
import {
  StepperItemContext,
  useStepperContext,
} from '@/components/stepper/stepper.context';
import {
  stepperItemButtonStyles,
  stepperItemWrapperStyles,
  stepperSrOnlyStyles,
} from '@/components/stepper/stepper.styles';
import { StepperSeparator } from '@/components/stepper/stepper-separator';
import type {
  StepperItemProps,
  StepperItemState,
  StepperItemStatus,
  StepperSeparatorProps,
} from '@/types/stepper';

type StepperItemInternalProps = {
  activeIndex?: number;
  selectedValue?: string;
  stepCount?: number;
  stepIndex?: number;
};

type StepperStateParams = {
  activeIndex: number;
  disabled: boolean;
  isCurrent: boolean;
  status: StepperItemStatus | undefined;
  stepIndex: number;
};

const isStepperSeparatorElement = (
  child: ReactNode,
): child is ReactElement<StepperSeparatorProps> => {
  return isValidElement(child) && child.type === StepperSeparator;
};

const getStepperItemState = ({
  activeIndex,
  disabled,
  isCurrent,
  status,
  stepIndex,
}: StepperStateParams): StepperItemState => {
  if (disabled) {
    return 'disabled';
  }

  if (status === 'error') {
    return 'error';
  }

  if (isCurrent) {
    return 'active';
  }

  if (
    status === 'completed' ||
    (activeIndex !== -1 && stepIndex < activeIndex)
  ) {
    return 'completed';
  }

  return 'inactive';
};

const getStepperAnnouncement = ({
  isCurrent,
  state,
  stepCount,
  stepIndex,
}: {
  isCurrent: boolean;
  state: StepperItemState;
  stepCount: number;
  stepIndex: number;
}) => {
  const fragments = [`Step ${stepIndex + 1} of ${stepCount}.`];

  if (isCurrent) {
    fragments.push('Current step.');
  }

  if (state === 'completed') {
    fragments.push('Completed step.');
  }

  if (state === 'disabled') {
    fragments.push('Disabled step.');
  }

  if (state === 'error') {
    fragments.push('Error state.');
  }

  if (state === 'inactive') {
    fragments.push('Pending step.');
  }

  return fragments.join(' ');
};

/**
 * Renders an individual step button with state, keyboard support, and shared styling.
 *
 * @example
 * ```tsx
 * <Stepper.Item value="payment">
 *   <Stepper.Indicator />
 *   <Stepper.Title>Payment</Stepper.Title>
 * </Stepper.Item>
 * ```
 */
export const StepperItem = (props: StepperItemProps) => {
  const {
    activeIndex = -1,
    children,
    className,
    disabled = false,
    onClick,
    onKeyDown,
    selectedValue,
    status,
    stepCount = 0,
    stepIndex = 0,
    value,
    ...buttonProps
  } = props as StepperItemProps & StepperItemInternalProps;
  const { baseId, currentValue, onValueChange, orientation, size, variant } =
    useStepperContext();
  const resolvedValue = selectedValue ?? currentValue;
  const isCurrent = resolvedValue === value;
  const state = getStepperItemState({
    activeIndex,
    disabled,
    isCurrent,
    status,
    stepIndex,
  });
  const statusId = `${baseId}-step-${value}-status`;
  const describedBy = [buttonProps['aria-describedby'], statusId]
    .filter(Boolean)
    .join(' ');
  const childArray = Children.toArray(children);
  const separatorChild = childArray.find(isStepperSeparatorElement);
  const contentChildren = childArray.filter(
    (child) => !isStepperSeparatorElement(child),
  );
  const { handleClick, handleKeyDown } = useStepperItemHandlers({
    disabled,
    onClick,
    onKeyDown,
    onValueChange,
    orientation,
    value,
  });
  const contextValue = useMemo(
    () => ({
      orientation,
      size,
      state,
      stepCount,
      stepIndex,
      variant,
    }),
    [orientation, size, state, stepCount, stepIndex, variant],
  );

  return (
    <li
      className={stepperItemWrapperStyles({ orientation })}
      data-last={stepIndex === stepCount - 1}
    >
      <StepperItemContext.Provider value={contextValue}>
        <button
          {...buttonProps}
          aria-current={isCurrent ? 'step' : undefined}
          aria-describedby={describedBy || undefined}
          aria-disabled={disabled || undefined}
          className={cx(
            stepperItemButtonStyles({
              size,
              state,
              variant,
            }),
            className,
          )}
          data-orientation={orientation}
          data-state={state}
          data-stepper-trigger="true"
          data-variant={variant}
          disabled={disabled}
          id={buttonProps.id ?? `${baseId}-step-${value}`}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={
            isCurrent ||
            (resolvedValue === undefined && stepIndex === 0 && !disabled)
              ? 0
              : -1
          }
          type="button"
        >
          {contentChildren}
          <span className={stepperSrOnlyStyles()} id={statusId}>
            {getStepperAnnouncement({
              isCurrent,
              state,
              stepCount,
              stepIndex,
            })}
          </span>
        </button>
        {separatorChild}
      </StepperItemContext.Provider>
    </li>
  );
};
