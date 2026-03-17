'use client';

import { SelectControl } from '@/components/select/select-control';
import { SelectHelperText } from '@/components/select/select-helper-text';
import { SelectItem } from '@/components/select/select-item';
import { SelectLabel } from '@/components/select/select-label';
import { SelectRoot } from '@/components/select/select-root';

export const Select = Object.assign(SelectRoot, {
  Control: SelectControl,
  HelperText: SelectHelperText,
  Item: SelectItem,
  Label: SelectLabel,
});
