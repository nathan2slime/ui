import { mergeProps } from '@zag-js/react';
import { type MotionProps, motion } from 'motion/react';
import type { ComponentProps, ComponentType } from 'react';

import { StyledTabsTrigger } from '@/components/tabs/tabs.styles';
import { useTabsContext } from '@/components/tabs/tabs-context';
import type { TabsTriggerProps } from '@/types/tabs';

type MotionTabsTriggerProps = ComponentProps<typeof StyledTabsTrigger> &
  Pick<MotionProps, 'transition' | 'whileHover' | 'whileTap'>;

const MotionTabsTrigger = motion.create(
  StyledTabsTrigger,
) as unknown as ComponentType<MotionTabsTriggerProps>;

const tabsTriggerHoverMotion = { y: -1 } as const;
const tabsTriggerTapMotion = { y: 1 } as const;
const tabsTriggerMotionTransition = {
  duration: 0.14,
  ease: 'easeOut',
} as const;

/** Renders a selectable, optionally disabled tab trigger. */
export const TabsTrigger = ({
  children,
  disabled,
  value,
  ...props
}: TabsTriggerProps) => {
  const { api, color, size } = useTabsContext();
  const triggerProps = mergeProps(
    { disabled, ...props },
    api.getTriggerProps({ value }),
  );

  return (
    <MotionTabsTrigger
      {...triggerProps}
      data-color={color}
      data-part="trigger"
      data-size={size}
      transition={tabsTriggerMotionTransition}
      type="button"
      whileHover={disabled ? undefined : tabsTriggerHoverMotion}
      whileTap={disabled ? undefined : tabsTriggerTapMotion}
    >
      {children}
    </MotionTabsTrigger>
  );
};
