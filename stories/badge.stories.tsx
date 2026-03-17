import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/components/badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['default', 'success', 'warning', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    variant: {
      control: 'select',
      options: ['soft', 'solid', 'outline'],
    },
  },
  args: {
    children: 'Featured',
    color: 'default',
    size: 'md',
    variant: 'soft',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SolidWarning: Story = {
  args: {
    children: 'Artifact',
    color: 'warning',
    variant: 'solid',
  },
};

export const OutlineSuccess: Story = {
  args: {
    children: 'Available',
    color: 'success',
    variant: 'outline',
  },
};

export const Scale: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <Badge size="sm">Small</Badge>
        <Badge size="md" variant="solid">
          Medium
        </Badge>
        <Badge color="neutral" variant="outline">
          Archive
        </Badge>
      </div>
    );
  },
};
