import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '@/components/select';
import type { SelectOption } from '@/types/select';

const options: SelectOption[] = [
  { label: 'Starlight', value: 'starlight' },
  { label: 'Moon garden', value: 'moon-garden' },
  { label: 'Unavailable spell', value: 'unavailable', disabled: true },
];

const defaultArgs = {
  items: options,
  itemToString: (item: SelectOption) => item.label,
  itemToValue: (item: SelectOption) => item.value,
};

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: defaultArgs,
} satisfies Meta<typeof Select<SelectOption>>;

export default meta;
type Story = StoryObj<{
  items?: readonly SelectOption[];
  itemToString?: (item: SelectOption) => string;
  itemToValue?: (item: SelectOption) => string;
}>;

export const Default: Story = {
  args: defaultArgs,
  render: () => (
    <div style={{ width: '320px' }}>
      <Select items={options} defaultValue="starlight">
        <Select.Label>Favorite spell</Select.Label>
        <Select.Control placeholder="Choose a spell" />
        <Select.HelperText>
          Pick a spell for your next little adventure.
        </Select.HelperText>
      </Select>
    </div>
  ),
};
