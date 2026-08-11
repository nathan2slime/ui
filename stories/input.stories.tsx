import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Input } from '@/components/input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    fullWidth: {
      control: 'boolean',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    status: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    variant: {
      control: 'inline-radio',
      options: ['default', 'border'],
    },
  },
  args: {
    helperText: 'Choose the name shown in your cute profile.',
    label: 'Nickname',
    onChange: fn(),
    placeholder: 'Akasa',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'default',
    size: 'md',
    variant: 'default',
  },
};

export const Border: Story = {
  args: {
    color: 'default',
    label: 'Search',
    placeholder: 'Find a spell',
    variant: 'border',
  },
};

export const WithError: Story = {
  args: {
    color: 'danger',
    errorText: 'Nickname is required before continuing.',
    label: 'Nickname',
    placeholder: 'Akasa',
  },
};
