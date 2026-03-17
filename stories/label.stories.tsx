import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@/components/label';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    htmlFor: {
      control: 'text',
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
    children: 'Spell name',
    htmlFor: 'spell-name',
    size: 'md',
    color: 'default',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    children: 'Spell verified',
    color: 'success',
  },
};

export const ErrorState: Story = {
  args: {
    children: 'Spell required',
    color: 'danger',
  },
};

export const Large: Story = {
  args: {
    children: 'Ancient grimoire title',
    size: 'lg',
  },
};
