import { connect, machine } from '@zag-js/radio-group';
import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { normalizeProps, useMachine } from '@zag-js/react';
import { forwardRef, useId } from 'react';

import {
  StyledRadioGroupItem,
  StyledRadioGroupItemControl,
  StyledRadioGroupItems,
  StyledRadioGroupItemText,
  StyledRadioGroupLabel,
  StyledRadioGroupRoot,
} from '@/components/radio-group/radio-group.styles';
import type { RadioGroupItem, RadioGroupProps } from '@/types/radio-group';

const getItemProps = (item: RadioGroupItem) => ({
  disabled: item.disabled,
  invalid: item.invalid,
  value: item.value,
});

/**
 * Renders a Zag-backed radio group from a typed item collection.
 *
 * @example
 * ```tsx
 * <RadioGroup label="Fruits" items={[{ value: 'apple', label: 'Apples' }]} />
 * ```
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      className,
      color = 'default',
      id,
      itemClassName,
      itemControlClassName,
      items,
      itemTextClassName,
      label,
      labelClassName,
      orientation = 'vertical',
      size = 'md',
      style,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const service = useMachine(machine, {
      ...props,
      id: id ?? `radio-group-${generatedId}`,
      orientation,
    });
    const api = connect<ZagPropTypes>(service, normalizeProps);
    const rootProps = api.getRootProps();

    return (
      <StyledRadioGroupRoot
        {...rootProps}
        ref={ref}
        className={className}
        data-color={color}
        data-part="root"
        data-size={size}
        style={{ ...rootProps.style, ...style }}
      >
        <StyledRadioGroupLabel
          {...api.getLabelProps()}
          className={labelClassName}
          data-part="label"
        >
          {label}
        </StyledRadioGroupLabel>
        <StyledRadioGroupItems data-orientation={orientation} data-part="items">
          {items.map((item) => {
            const itemProps = getItemProps(item);

            return (
              <StyledRadioGroupItem
                {...api.getItemProps(itemProps)}
                className={itemClassName}
                data-part="item"
                key={item.value}
              >
                <StyledRadioGroupItemText
                  {...api.getItemTextProps(itemProps)}
                  className={itemTextClassName}
                  data-part="item-text"
                >
                  {item.label}
                </StyledRadioGroupItemText>
                <input {...api.getItemHiddenInputProps(itemProps)} />
                <StyledRadioGroupItemControl
                  {...api.getItemControlProps(itemProps)}
                  className={itemControlClassName}
                  data-part="item-control"
                />
              </StyledRadioGroupItem>
            );
          })}
        </StyledRadioGroupItems>
      </StyledRadioGroupRoot>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
