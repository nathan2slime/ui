import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { normalizeProps, useMachine } from '@zag-js/react';
import { connect, machine } from '@zag-js/switch';
import { forwardRef, useId } from 'react';

import {
  StyledSwitchControl,
  StyledSwitchLabel,
  StyledSwitchRoot,
  StyledSwitchThumb,
} from '@/components/switch/switch.styles';
import type { SwitchProps } from '@/types/switch';

/**
 * Renders an accessible Zag-backed switch with a hidden checkbox input.
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" defaultChecked />
 * ```
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      children,
      checkedLabel = 'On',
      className,
      color = 'default',
      id,
      label,
      labelPlacement = 'end',
      size = 'md',
      uncheckedLabel = 'Off',
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const service = useMachine(machine, {
      ...props,
      id: id ?? `switch-${generatedId}`,
    });
    const api = connect<ZagPropTypes>(service, normalizeProps);
    const labelContent =
      label ?? children ?? (api.checked ? checkedLabel : uncheckedLabel);

    return (
      <StyledSwitchRoot
        {...api.getRootProps()}
        className={className}
        data-color={color}
        data-label-placement={labelPlacement}
        data-part="root"
        data-size={size}
      >
        <input {...api.getHiddenInputProps()} ref={ref} />
        <StyledSwitchControl
          {...api.getControlProps()}
          data-color={color}
          data-part="control"
          data-size={size}
        >
          <StyledSwitchThumb {...api.getThumbProps()} data-part="thumb" />
        </StyledSwitchControl>
        <StyledSwitchLabel {...api.getLabelProps()} data-part="label">
          {labelContent}
        </StyledSwitchLabel>
      </StyledSwitchRoot>
    );
  },
);

Switch.displayName = 'Switch';
