import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { RadioGroup } from '@/components/radio-group';
import type { RadioGroupItem } from '@/types/radio-group';

const fruitItems: RadioGroupItem[] = [
  { value: 'apple', label: 'Apples' },
  { value: 'orange', label: 'Oranges' },
  { value: 'mango', label: 'Mangoes' },
  { value: 'grape', label: 'Grapes' },
];

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    color: 'default',
    defaultValue: 'apple',
    items: fruitItems,
    label: 'Fruits',
    onValueChange: fn(),
    orientation: 'vertical',
    size: 'md',
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    color: 'success',
    orientation: 'horizontal',
  },
};

export const DisabledItem: Story = {
  args: {
    items: [
      ...fruitItems,
      { value: 'dragonfruit', label: 'Dragonfruit', disabled: true },
    ],
  },
};
