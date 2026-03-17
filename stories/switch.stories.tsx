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
    label: {
      control: 'text',
    },
    labelPlacement: {
      control: 'inline-radio',
      options: ['start', 'end'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
  },
  args: {
    label: 'Enable alerts',
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
};

export const LabelAtStart: Story = {
  args: {
    labelPlacement: 'start',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    defaultChecked: true,
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    defaultChecked: true,
  },
};

export const ErrorState: Story = {
  args: {
    color: 'danger',
    defaultChecked: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
