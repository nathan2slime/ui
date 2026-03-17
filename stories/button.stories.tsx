import { Add01Icon } from '@hugeicons/core-free-icons';

import { HugeiconsIcon } from '@hugeicons/react';
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
      options: ['solid', 'outline', 'ghost'],
    },
  },
  args: {
    children: 'Cast Spell',
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

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
  },
};

export const Icon: Story = {
  args: {
    'aria-label': 'Add spell',
    children: <HugeiconsIcon color="currentColor" icon={Add01Icon} size={20} />,
    size: 'icon',
    variant: 'solid',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Begin Journey',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Open Grimoire',
  },
  render: (args) => {
    return (
      <div style={{ width: '320px' }}>
        <Button {...args} />
      </div>
    );
  },
};
