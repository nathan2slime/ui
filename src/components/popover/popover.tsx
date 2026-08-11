import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { connect, machine } from '@zag-js/popover';
import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { normalizeProps, Portal, useMachine } from '@zag-js/react';
import {
  MotionConfig,
  type MotionProps,
  motion,
  useReducedMotion,
} from 'motion/react';
import type { ComponentProps, ComponentType } from 'react';
import { Fragment, forwardRef, useId } from 'react';

import {
  StyledPopoverArrow,
  StyledPopoverArrowTip,
  StyledPopoverBody,
  StyledPopoverCloseTrigger,
  StyledPopoverContent,
  StyledPopoverDescription,
  StyledPopoverFooter,
  StyledPopoverHeader,
  StyledPopoverPositioner,
  StyledPopoverRoot,
  StyledPopoverTitle,
  StyledPopoverTrigger,
} from '@/components/popover/popover.styles';
import type { PopoverProps } from '@/types/popover';

type MotionPopoverContentProps = ComponentProps<typeof StyledPopoverContent> &
  Pick<MotionProps, 'animate' | 'initial' | 'transition' | 'variants'>;

const MotionPopoverContent = motion.create(
  StyledPopoverContent,
) as unknown as ComponentType<MotionPopoverContentProps>;

const popoverContentMotionVariants = {
  closed: {
    opacity: 0,
    scale: 0.98,
    y: '0.2rem',
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
} as const;

const popoverContentMotionTransition = {
  duration: 0.16,
  ease: 'easeOut',
} as const;

const popoverContentReducedMotionTransition = { duration: 0 } as const;

/**
 * Renders a Zag-backed popover with a trigger, dialog content, and close trigger.
 *
 * @example
 * ```tsx
 * <Popover trigger="Click me" title="Presenters" description="Description">
 *   <button type="button">Action Button</button>
 * </Popover>
 * ```
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      arrowClassName,
      arrowTipClassName,
      bodyClassName,
      children,
      className,
      closeLabel = (
        <HugeiconsIcon aria-hidden="true" icon={Cancel01Icon} size={16} />
      ),
      closeTriggerClassName,
      color = 'default',
      contentClassName,
      description,
      descriptionClassName,
      footer,
      footerClassName,
      id,
      positionerClassName,
      showArrow = false,
      size = 'md',
      style,
      title,
      titleClassName,
      translations,
      trigger,
      triggerClassName,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const service = useMachine(machine, {
      ...props,
      id: id ?? `popover-${generatedId}`,
      translations: {
        closeTriggerLabel: 'Close popover',
        ...translations,
      },
    });
    const api = connect<ZagPropTypes>(service, normalizeProps);
    const Wrapper = api.portalled ? Portal : Fragment;
    const reducedMotion = useReducedMotion();
    const contentProps = api.getContentProps();
    const isOpen = Reflect.get(contentProps, 'data-state') === 'open';

    return (
      <MotionConfig reducedMotion="user">
        <StyledPopoverRoot
          ref={ref}
          className={className}
          data-color={color}
          data-part="root"
          data-size={size}
          style={style}
        >
          <StyledPopoverTrigger
            {...api.getTriggerProps()}
            className={triggerClassName}
            data-part="trigger"
          >
            {trigger}
          </StyledPopoverTrigger>
          <Wrapper>
            <StyledPopoverPositioner
              {...api.getPositionerProps()}
              className={positionerClassName}
              data-color={color}
              data-part="positioner"
              data-size={size}
            >
              <MotionPopoverContent
                {...contentProps}
                animate={isOpen ? 'open' : 'closed'}
                className={contentClassName}
                data-color={color}
                data-part="content"
                data-size={size}
                initial={false}
                transition={
                  reducedMotion || !isOpen
                    ? popoverContentReducedMotionTransition
                    : popoverContentMotionTransition
                }
                variants={popoverContentMotionVariants}
              >
                {showArrow ? (
                  <StyledPopoverArrow
                    {...api.getArrowProps()}
                    className={arrowClassName}
                    data-part="arrow"
                  >
                    <StyledPopoverArrowTip
                      {...api.getArrowTipProps()}
                      className={arrowTipClassName}
                      data-part="arrow-tip"
                    />
                  </StyledPopoverArrow>
                ) : null}
                <StyledPopoverHeader data-part="header">
                  {title ? (
                    <StyledPopoverTitle
                      {...api.getTitleProps()}
                      className={titleClassName}
                      data-part="title"
                    >
                      {title}
                    </StyledPopoverTitle>
                  ) : null}
                  <StyledPopoverCloseTrigger
                    {...api.getCloseTriggerProps()}
                    className={closeTriggerClassName}
                    data-part="close-trigger"
                  >
                    {closeLabel}
                  </StyledPopoverCloseTrigger>
                </StyledPopoverHeader>
                {description ? (
                  <StyledPopoverDescription
                    {...api.getDescriptionProps()}
                    className={descriptionClassName}
                    data-part="description"
                  >
                    {description}
                  </StyledPopoverDescription>
                ) : null}
                {children ? (
                  <StyledPopoverBody className={bodyClassName} data-part="body">
                    {children}
                  </StyledPopoverBody>
                ) : null}
                {footer ? (
                  <StyledPopoverFooter
                    className={footerClassName}
                    data-part="footer"
                  >
                    {footer}
                  </StyledPopoverFooter>
                ) : null}
              </MotionPopoverContent>
            </StyledPopoverPositioner>
          </Wrapper>
        </StyledPopoverRoot>
      </MotionConfig>
    );
  },
);

Popover.displayName = 'Popover';
