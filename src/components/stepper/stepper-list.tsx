import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cx } from 'styled-system/css';

import { useStepperContext } from '@/components/stepper/stepper.context';
import { stepperListStyles } from '@/components/stepper/stepper.styles';
import { StepperItem } from '@/components/stepper/stepper-item';
import type { StepperItemProps, StepperListProps } from '@/types/stepper';

type StepperItemInternalProps = {
  activeIndex?: number;
  selectedValue?: string;
  stepCount?: number;
  stepIndex?: number;
};

const isStepperItemElement = (
  child: ReactNode,
): child is ReactElement<StepperItemProps & StepperItemInternalProps> => {
  return isValidElement(child) && child.type === StepperItem;
};

/**
 * Renders the ordered list that coordinates item order and roving focus behavior.
 *
 * @example
 * ```tsx
 * <Stepper.List>
 *   <Stepper.Item value="account">...</Stepper.Item>
 * </Stepper.List>
 * ```
 */
export const StepperList = ({
  children,
  className,
  ...props
}: StepperListProps) => {
  const { currentValue, orientation } = useStepperContext();
  const childArray = Children.toArray(children);
  const items = childArray.filter(isStepperItemElement);
  const firstEnabledValue = items.find((item) => !item.props.disabled)?.props
    .value;
  const selectedValue = currentValue ?? firstEnabledValue;
  const activeIndex =
    selectedValue === undefined
      ? -1
      : items.findIndex((item) => item.props.value === selectedValue);
  let itemIndex = -1;

  return (
    <ol
      {...props}
      className={cx(stepperListStyles({ orientation }), className)}
      data-orientation={orientation}
      data-stepper-list="true"
    >
      {childArray.map((child) => {
        if (!isStepperItemElement(child)) {
          return child;
        }

        itemIndex += 1;

        return cloneElement(child, {
          activeIndex,
          selectedValue,
          stepCount: items.length,
          stepIndex: itemIndex,
        });
      })}
    </ol>
  );
};
