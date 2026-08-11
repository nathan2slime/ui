import { connect, machine } from '@zag-js/checkbox';
import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { normalizeProps, useMachine } from '@zag-js/react';
import {
  forwardRef,
  type Ref,
  useCallback,
  useEffect,
  useId,
  useRef,
} from 'react';

import {
  StyledCheckboxControl,
  StyledCheckboxIndicator,
  StyledCheckboxLabel,
  StyledCheckboxRoot,
} from '@/components/checkbox/checkbox.styles';
import type { CheckboxProps } from '@/types/checkbox';

const setForwardedRef = <T,>(ref: Ref<T>, value: T | null) => {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref) {
    ref.current = value;
  }
};

/**
 * Renders an accessible Zag-backed checkbox with a hidden checkbox input.
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" defaultChecked />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checkedLabel = 'checked',
      children,
      className,
      color = 'default',
      id,
      indeterminateLabel = 'indeterminate',
      label,
      labelPlacement = 'end',
      size = 'md',
      uncheckedLabel = 'unchecked',
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const service = useMachine(machine, {
      ...props,
      id: id ?? `checkbox-${generatedId}`,
    });
    const api = connect<ZagPropTypes>(service, normalizeProps);
    const setInputRef = useCallback(
      (element: HTMLInputElement | null) => {
        inputRef.current = element;
        setForwardedRef(ref, element);
      },
      [ref],
    );

    useEffect(() => {
      if (!inputRef.current) return;

      inputRef.current.indeterminate = api.indeterminate;
    }, [api.indeterminate]);

    const fallbackLabel = api.indeterminate
      ? indeterminateLabel
      : api.checked
        ? checkedLabel
        : uncheckedLabel;
    const labelContent = label ?? children ?? `Input is ${fallbackLabel}`;

    return (
      <StyledCheckboxRoot
        {...api.getRootProps()}
        className={className}
        data-color={color}
        data-label-placement={labelPlacement}
        data-part="root"
        data-size={size}
      >
        <StyledCheckboxLabel {...api.getLabelProps()} data-part="label">
          {labelContent}
        </StyledCheckboxLabel>
        <StyledCheckboxControl
          {...api.getControlProps()}
          data-color={color}
          data-part="control"
          data-size={size}
        >
          <StyledCheckboxIndicator
            {...api.getIndicatorProps()}
            data-part="indicator"
          />
        </StyledCheckboxControl>
        <input {...api.getHiddenInputProps()} ref={setInputRef} />
      </StyledCheckboxRoot>
    );
  },
);

Checkbox.displayName = 'Checkbox';
