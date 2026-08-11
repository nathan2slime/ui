import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Checkbox } from '@/components/checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    labelPlacement: {
      control: 'inline-radio',
      options: ['start', 'end'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    color: 'default',
    label: 'Accept quest terms',
    labelPlacement: 'end',
    onCheckedChange: fn(),
    size: 'md',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    color: 'success',
    defaultChecked: true,
    label: 'Receive magical updates',
  },
};

export const Indeterminate: Story = {
  args: {
    color: 'warning',
    defaultChecked: 'indeterminate',
    label: 'Some spells selected',
  },
};
