import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/components/typography';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: [
        'span',
        'p',
        'strong',
        'label',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
    },
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: [
        'display',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'body',
        'small',
        'caption',
      ],
    },
  },
  args: {
    children: 'The Journey Endures',
    variant: 'display',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TypeScale: Story = {
  render: () => {
    return (
      <div style={{ display: 'grid', gap: '1rem', width: '640px' }}>
        <Typography variant="display">The Journey Endures</Typography>
        <Typography variant="heading-2">A Decade of Adventure</Typography>
        <Typography variant="heading-3">Memories of the Hero Party</Typography>
        <Typography variant="heading-4">Lvl. 80</Typography>
        <Typography variant="heading-5">Grimoire</Typography>
        <Typography variant="heading-6">Artifact</Typography>
        <Typography variant="body">
          It&apos;s just a hobby. But I wanted to understand humans better.
        </Typography>
        <Typography variant="small">
          Historical record: 80 years since the journey began.
        </Typography>
        <Typography variant="caption">
          Mana Levels: Critical Threshold
        </Typography>
      </div>
    );
  },
};

export const BodyCopy: Story = {
  args: {
    children:
      "It's just a hobby. But I wanted to understand humans better. The world of magic is vast, and every spell tells a story.",
    variant: 'body',
  },
};

export const Caption: Story = {
  args: {
    children: 'Mana Levels: Critical Threshold',
    variant: 'caption',
  },
};
