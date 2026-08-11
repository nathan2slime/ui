import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import type { Api as ZagSelectApi } from '@zag-js/select';

import { StyledSelectHiddenSelect } from '@/components/select/select.styles';

type SelectHiddenSelectProps<T> = {
  api: ZagSelectApi<ZagPropTypes, T>;
  itemToString: (item: T) => string;
  itemToValue: (item: T) => string;
  items: readonly T[];
};

/**
 * Keeps Zag's hidden native select outside the popup portal while deriving
 * options from the same canonical collection used by the listbox.
 */
export const SelectHiddenSelect = <T,>({
  api,
  itemToString,
  itemToValue,
  items,
}: SelectHiddenSelectProps<T>) => {
  const hiddenSelectProps = api.getHiddenSelectProps();
  const { defaultValue: _defaultValue, ...controlledHiddenSelectProps } =
    hiddenSelectProps;

  return (
    <StyledSelectHiddenSelect
      {...controlledHiddenSelectProps}
      data-part="hidden-select"
      value={api.value[0] ?? ''}
    >
      {items.map((item) => {
        const value = itemToValue(item);

        return (
          <option
            disabled={api.collection.getItemDisabled(item)}
            key={value}
            value={value}
          >
            {itemToString(item)}
          </option>
        );
      })}
    </StyledSelectHiddenSelect>
  );
};
