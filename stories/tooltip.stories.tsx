import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '@/components/tooltip';

type TooltipStoryArgs = {
  content: string;
  placement: 'top' | 'bottom' | 'left' | 'right';
  sideOffset: number;
};

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
    },
    placement: {
      control: 'inline-radio',
      options: ['top', 'bottom', 'left', 'right'],
    },
    sideOffset: {
      control: {
        min: 0,
        step: 1,
        type: 'number',
      },
    },
  },
  args: {
    content: 'This spell has a delayed cast time.',
    placement: 'top',
    sideOffset: 8,
  },
  render: (args: TooltipStoryArgs) => {
    return (
      <Tooltip placement={args.placement}>
        <Tooltip.Trigger>
          <span>Hover me</span>
        </Tooltip.Trigger>
        <Tooltip.Content sideOffset={args.sideOffset}>
          {args.content}
        </Tooltip.Content>
      </Tooltip>
    );
  },
} satisfies Meta<TooltipStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Bottom: Story = {
  args: {
    placement: 'bottom',
  },
};

export const Left: Story = {
  args: {
    placement: 'left',
  },
};

export const Right: Story = {
  args: {
    placement: 'right',
  },
};

export const LongContent: Story = {
  args: {
    content:
      'Ancient magic reacts differently at twilight, so verify the environment before proceeding.',
  },
};
