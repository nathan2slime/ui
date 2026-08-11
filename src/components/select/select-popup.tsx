import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { Portal } from '@zag-js/react';
import type { Api as ZagSelectApi } from '@zag-js/select';
import {
  MotionConfig,
  type MotionProps,
  motion,
  useReducedMotion,
} from 'motion/react';
import type { ComponentProps, ComponentType, ReactNode } from 'react';

import {
  StyledSelectContent,
  StyledSelectItem,
  StyledSelectItemIndicator,
  StyledSelectItemText,
  StyledSelectList,
  StyledSelectPositioner,
} from '@/components/select/select.styles';

type MotionSelectContentProps = ComponentProps<typeof StyledSelectContent> &
  Pick<MotionProps, 'animate' | 'initial' | 'transition' | 'variants'>;

const MotionSelectContent = motion(
  StyledSelectContent,
) as unknown as ComponentType<MotionSelectContentProps>;

const selectPopupVariants = {
  closed: {
    opacity: 0,
    scale: 0.98,
    y: '-0.3rem',
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
} as const;

type SelectPopupProps<T> = {
  api: ZagSelectApi<ZagPropTypes, T>;
  itemToString: (item: T) => string;
  itemToValue: (item: T) => string;
  items: readonly T[];
  portalled: boolean;
  renderItem?: (item: T) => ReactNode;
};

/**
 * Renders the internally owned Zag listbox and its items.
 *
 * Items intentionally stay private to the hybrid Select API: callers provide
 * the canonical collection and an optional renderer, but never register item
 * children or use a public `Select.Item` component.
 */
export const SelectPopup = <T,>({
  api,
  itemToString,
  itemToValue,
  items,
  portalled,
  renderItem,
}: SelectPopupProps<T>) => {
  const reducedMotion = useReducedMotion();
  const contentProps = api.getContentProps();
  const isOpen = Reflect.get(contentProps, 'data-state') === 'open';

  return (
    <MotionConfig reducedMotion="user">
      <Portal disabled={!portalled} key="select-popup">
        <StyledSelectPositioner
          {...api.getPositionerProps()}
          data-part="positioner"
          key="select-popup-positioner"
        >
          <MotionSelectContent
            {...contentProps}
            animate={isOpen ? 'open' : 'closed'}
            data-part="content"
            initial={false}
            variants={selectPopupVariants}
            transition={
              reducedMotion || !isOpen
                ? { duration: 0 }
                : { duration: 0.16, ease: 'easeOut' }
            }
          >
            <StyledSelectList {...api.getListProps()} data-part="list">
              {items.map((item, index) => {
                const itemProps = api.getItemProps({ item });
                const itemTextProps = api.getItemTextProps({ item });
                const itemIndicatorProps = api.getItemIndicatorProps({ item });
                const value = itemToValue(item);

                return (
                  <StyledSelectItem
                    {...itemProps}
                    data-index={index}
                    data-part="item"
                    key={value}
                  >
                    <StyledSelectItemText
                      {...itemTextProps}
                      data-part="item-text"
                    >
                      {renderItem ? renderItem(item) : itemToString(item)}
                    </StyledSelectItemText>
                    <StyledSelectItemIndicator
                      {...itemIndicatorProps}
                      data-part="item-indicator"
                    />
                  </StyledSelectItem>
                );
              })}
            </StyledSelectList>
          </MotionSelectContent>
        </StyledSelectPositioner>
      </Portal>
    </MotionConfig>
  );
};
