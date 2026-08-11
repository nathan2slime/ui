import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Button } from '@/components/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    fullWidth: {
      control: 'boolean',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    variant: {
      control: 'inline-radio',
      options: ['solid', 'outline', 'border', 'ghost'],
    },
  },
  args: {
    children: 'Send gift',
    color: 'default',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'solid',
  },
};
