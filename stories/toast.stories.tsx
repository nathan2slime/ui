import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/button';
import { Toaster, toaster } from '@/components/toast';

const meta = {
  title: 'Components/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem', justifyItems: 'center' }}>
      <Toaster />
      <Button
        onClick={() => {
          toaster.create({
            description: 'Your little notification is ready.',
            title: 'Hello',
          });
        }}
      >
        Info toast
      </Button>
      <Button
        color="success"
        onClick={() => {
          toaster.success({
            description: 'The data was safely saved.',
            title: 'Data submitted!',
          });
        }}
      >
        Success toast
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem', justifyItems: 'center' }}>
      <Toaster />
      <Button
        onClick={() => {
          toaster.warning({
            action: {
              label: 'Undo',
              onClick: () => undefined,
            },
            description: 'The spell moved to the archive.',
            title: 'Spell archived',
          });
        }}
      >
        Action toast
      </Button>
    </div>
  ),
};
