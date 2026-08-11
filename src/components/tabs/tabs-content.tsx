import { mergeProps } from '@zag-js/react';
import { type MotionProps, motion } from 'motion/react';
import type { ComponentProps, ComponentType } from 'react';

import { StyledTabsContent } from '@/components/tabs/tabs.styles';
import { useTabsContext } from '@/components/tabs/tabs-context';
import type { TabsContentProps } from '@/types/tabs';

type MotionTabsContentProps = ComponentProps<typeof StyledTabsContent> &
  Pick<MotionProps, 'animate' | 'initial' | 'transition' | 'variants'>;

const MotionTabsContent = motion.create(
  StyledTabsContent,
) as unknown as ComponentType<MotionTabsContentProps>;

const tabsContentMotionVariants = {
  hidden: {
    opacity: 0,
    y: '0.25rem',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
} as const;

const tabsContentMotionTransition = {
  duration: 0.18,
  ease: 'easeOut',
} as const;

/** Renders the accessible panel associated with one trigger value. */
export const TabsContent = ({
  children,
  value,
  ...props
}: TabsContentProps) => {
  const { api } = useTabsContext();
  const contentProps = mergeProps(props, api.getContentProps({ value }));
  const isSelected = Reflect.get(contentProps, 'hidden') !== true;

  return (
    <MotionTabsContent
      {...contentProps}
      animate={isSelected ? 'visible' : 'hidden'}
      data-part="content"
      initial={false}
      transition={tabsContentMotionTransition}
      variants={tabsContentMotionVariants}
    >
      {children}
    </MotionTabsContent>
  );
};
