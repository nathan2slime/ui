import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from '@/components/radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
    },
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
  },
  args: {
    label: 'Standard package',
    defaultChecked: true,
    name: 'plans',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Compact option',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
  },
};

export const ErrorState: Story = {
  args: {
    color: 'danger',
  },
};

export const WithGroupContext: Story = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio
          {...args}
          defaultChecked
          label="Standard package"
          value="standard"
        />
        <Radio
          {...args}
          defaultChecked={false}
          label="Growth package"
          value="growth"
        />
        <Radio
          {...args}
          defaultChecked={false}
          label="Legendary package"
          value="legendary"
        />
      </div>
    );
  },
};
