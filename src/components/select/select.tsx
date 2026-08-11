'use client';

import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { mergeProps, normalizeProps, useMachine } from '@zag-js/react';
import type {
  OpenChangeDetails,
  Machine as SelectMachine,
  ValueChangeDetails,
  Props as ZagSelectProps,
} from '@zag-js/select';
import {
  connect,
  collection as createCollection,
  machine,
} from '@zag-js/select';
import {
  Children,
  Fragment,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useId,
  useMemo,
} from 'react';
import { StyledSelectRoot } from '@/components/select/select.styles';
import { SelectContextProvider } from '@/components/select/select-context';
import { SelectControl } from '@/components/select/select-control';
import { SelectHelperText } from '@/components/select/select-helper-text';
import { SelectHiddenSelect } from '@/components/select/select-hidden-select';
import { SelectLabel } from '@/components/select/select-label';
import { SelectPopup } from '@/components/select/select-popup';
import {
  isSelectOption,
  toSelectValueArray,
} from '@/components/select/select-utils';
import type { SelectProps } from '@/types/select';

const hasHelperText = (children: ReactNode): boolean => {
  let result = false;

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    if (child.type === SelectHelperText) {
      result = true;
      return;
    }
    if (child.type !== Fragment) return;

    const fragment = child as ReactElement<{ children?: ReactNode }>;
    result ||= hasHelperText(fragment.props.children);
  });

  return result;
};

/**
 * Renders the hybrid Zag-backed select root.
 *
 * `items` is the canonical collection. The popup is rendered internally and
 * the public compound parts only compose field markup around that state.
 *
 * @example
 * ```tsx
 * <Select items={[{ label: 'Brazil', value: 'br' }]}>
 *   <Select.Label>Country</Select.Label>
 *   <Select.Control placeholder="Choose a country" />
 * </Select>
 * ```
 */
export const SelectRoot = <T,>(props: SelectProps<T>): ReactElement => {
  const {
    autoComplete,
    children,
    className,
    closeOnSelect,
    color = 'default',
    defaultOpen,
    defaultValue,
    disabled,
    form,
    helperColor = 'default',
    id,
    invalid,
    isItemDisabled,
    itemToString,
    itemToValue,
    items,
    loopFocus,
    name,
    onOpenChange,
    onValueChange,
    open,
    portalled = true,
    readOnly,
    renderItem,
    required,
    size = 'md',
    value,
  } = props;
  const generatedId = useId();
  const rootId = id ?? `select-${generatedId}`;
  const resolvedItemToString = useMemo(
    () =>
      itemToString ??
      ((item: T) => (isSelectOption(item) ? item.label : String(item))),
    [itemToString],
  );
  const resolvedItemToValue = useMemo(
    () =>
      itemToValue ??
      ((item: T) => (isSelectOption(item) ? item.value : String(item))),
    [itemToValue],
  );
  const resolvedIsItemDisabled = useMemo(
    () =>
      isItemDisabled ??
      ((item: T) => (isSelectOption(item) ? item.disabled === true : false)),
    [isItemDisabled],
  );
  const selectCollection = useMemo(() => {
    return createCollection({
      isItemDisabled: resolvedIsItemDisabled,
      itemToString: resolvedItemToString,
      itemToValue: resolvedItemToValue,
      items,
    });
  }, [
    items,
    resolvedIsItemDisabled,
    resolvedItemToString,
    resolvedItemToValue,
  ]);

  const service = useMachine(
    machine as SelectMachine<T>,
    {
      id: rootId,
      collection: selectCollection,
      autoComplete,
      closeOnSelect,
      defaultOpen,
      defaultValue: toSelectValueArray(defaultValue),
      disabled,
      form,
      invalid,
      loopFocus,
      name,
      onOpenChange: onOpenChange
        ? (details: OpenChangeDetails) => onOpenChange(details.open)
        : undefined,
      onValueChange: onValueChange
        ? (details: ValueChangeDetails<T>) =>
            onValueChange(details.value[0] ?? null)
        : undefined,
      open,
      readOnly,
      required,
      value: value === undefined ? undefined : toSelectValueArray(value),
    } as Partial<ZagSelectProps<T>>,
  );
  const api = connect<ZagPropTypes, T>(service, normalizeProps);
  const rootProps = mergeProps({ className }, api.getRootProps());
  const contextValue = {
    api,
    color,
    hasHelperText: hasHelperText(children),
    helperColor,
    helperTextId: `${rootId}-helper-text`,
    size,
  };

  return (
    <SelectContextProvider value={contextValue}>
      <StyledSelectRoot
        {...rootProps}
        data-color={color}
        data-helper-color={helperColor}
        data-part="root"
        data-size={size}
      >
        {Children.toArray(children)}
        <SelectHiddenSelect
          api={api}
          itemToString={resolvedItemToString}
          itemToValue={resolvedItemToValue}
          items={items}
          key="hidden-select"
        />
        <SelectPopup
          api={api}
          itemToString={resolvedItemToString}
          itemToValue={resolvedItemToValue}
          items={items}
          portalled={portalled}
          renderItem={renderItem}
          key="popup"
        />
      </StyledSelectRoot>
    </SelectContextProvider>
  );
};

/**
 * Public hybrid Select component with internally managed popup items.
 *
 * Compound parts are available as `Select.Label`, `Select.Control`, and
 * `Select.HelperText`; item registration remains owned by the root collection.
 */
export const Select = Object.assign(SelectRoot, {
  Control: SelectControl,
  HelperText: SelectHelperText,
  Label: SelectLabel,
});
