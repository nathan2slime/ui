import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '@/components/spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'neutral', 'contrast'],
    },
    'aria-label': {
      control: 'text',
    },
  },
  args: {
    size: 'md',
    variant: 'primary',
    'aria-label': 'Loading',
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
  },
};

export const Contrast: Story = {
  args: {
    variant: 'contrast',
  },
  render: (args) => {
    return (
      <div
        style={{
          background: '#020617',
          padding: '24px',
          borderRadius: '16px',
          display: 'inline-flex',
        }}
      >
        <Spinner {...args} />
      </div>
    );
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    'aria-label': 'Loading small content block',
  },
};
