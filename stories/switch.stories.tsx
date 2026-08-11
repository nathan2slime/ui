import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Switch } from '@/components/switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
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
    label: 'Enable moonlight mode',
    labelPlacement: 'end',
    onCheckedChange: fn(),
    size: 'md',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DynamicLabel: Story = {
  args: {
    checkedLabel: 'On',
    label: undefined,
    uncheckedLabel: 'Off',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    defaultChecked: true,
    label: 'Auto-save spells',
  },
};
