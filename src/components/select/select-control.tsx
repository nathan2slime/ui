import { mergeProps } from '@zag-js/react';

import {
  StyledSelectControl,
  StyledSelectDecorator,
  StyledSelectIndicator,
  StyledSelectTrigger,
  StyledSelectValue,
} from '@/components/select/select.styles';
import { useSelectContext } from '@/components/select/select-context';
import type { SelectControlProps } from '@/types/select';

/**
 * Renders the button trigger backed by Zag's control and trigger getters.
 *
 * @example
 * ```tsx
 * <Select.Control placeholder="Choose a country" />
 * ```
 */
export const SelectControl = ({
  endContent,
  placeholder = 'Select an option',
  startContent,
  ...props
}: SelectControlProps) => {
  const { api, color, hasHelperText, helperTextId, size } = useSelectContext();
  const triggerProps = mergeProps(props, api.getTriggerProps());
  const describedBy = [
    props['aria-describedby'],
    hasHelperText ? helperTextId : undefined,
  ]
    .filter((value): value is string => Boolean(value))
    .join(' ');

  return (
    <StyledSelectControl {...api.getControlProps()} data-select-part="control">
      <StyledSelectTrigger
        {...triggerProps}
        aria-describedby={describedBy || undefined}
        data-color={color}
        data-select-part="trigger"
        data-size={size}
        type="button"
      >
        {startContent !== undefined && (
          <StyledSelectDecorator aria-hidden="true" data-part="start-content">
            {startContent}
          </StyledSelectDecorator>
        )}
        <StyledSelectValue {...api.getValueTextProps()} data-part="value-text">
          {api.empty ? placeholder : api.valueAsString}
        </StyledSelectValue>
        {endContent ? (
          <StyledSelectDecorator aria-hidden="true" data-part="end-content">
            {endContent}
          </StyledSelectDecorator>
        ) : (
          <StyledSelectIndicator
            {...api.getIndicatorProps()}
            data-part="indicator"
          />
        )}
      </StyledSelectTrigger>
    </StyledSelectControl>
  );
};
