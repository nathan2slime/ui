import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Button } from '@/components/button';
import { Popover } from '@/components/popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    color: 'default',
    description: 'A short description connected to the popover dialog.',
    onOpenChange: fn(),
    size: 'md',
    title: 'Presenters',
    trigger: 'Click me',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <Button size="sm">Action Button</Button>
    </Popover>
  ),
};

export const WithFooter: Story = {
  args: {
    color: 'success',
    footer: <Button size="sm">Confirm</Button>,
    title: 'Quest reward',
    trigger: 'Open reward',
  },
  render: (args) => (
    <Popover {...args}>
      Choose this reward before leaving the guild hall.
    </Popover>
  ),
};

export const WithArrow: Story = {
  args: {
    showArrow: true,
    title: 'Arrow popover',
    trigger: 'Show arrow',
  },
  render: (args) => (
    <Popover {...args}>The arrow uses Zag's arrow parts.</Popover>
  ),
};
