import type { Meta, StoryObj } from '@storybook/react';

import { HelperText } from '@/components/helper-text';

const meta = {
  title: 'Components/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
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
    children: 'Choose a safe route for the next quest.',
    size: 'md',
    color: 'default',
  },
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Message: Story = {
  args: {
    children: 'Selection saved successfully.',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'This choice may lock advanced spells.',
    color: 'warning',
  },
};

export const Large: Story = {
  args: {
    children: 'The journey continues with a longer explanation for the field.',
    size: 'lg',
  },
};
