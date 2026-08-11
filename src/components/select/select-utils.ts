import type { SelectOption, SelectValue } from '@/types/select';

/** Narrows an unknown item to the built-in select item shape. */
export const isSelectOption = (item: unknown): item is SelectOption => {
  if (item && typeof item === 'object') {
    return 'label' in item && 'value' in item;
  }

  return false;
};

/** Converts a public scalar selection into the array shape expected by Zag. */
export const toSelectValueArray = (
  value: SelectValue | undefined,
): string[] | undefined => {
  return value ? [value] : undefined;
};
