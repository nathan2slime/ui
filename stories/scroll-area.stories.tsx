import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from '@/components/scroll-area';

const spellEntries = Array.from({ length: 18 }, (_, index) => ({
  id: `spell-${index + 1}`,
  name: `Spell note ${index + 1}`,
}));

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal', 'both'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    orientation: 'vertical',
    size: 'md',
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea {...args} style={{ height: '18rem', width: '22rem' }}>
      <div style={{ display: 'grid', gap: '0.65rem', padding: '1rem' }}>
        {spellEntries.map((entry) => (
          <div
            key={entry.id}
            style={{
              border: '0.12rem solid #17204d',
              borderRadius: '0.8rem',
              padding: '0.75rem',
            }}
          >
            {entry.name}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const BothDirections: Story = {
  args: {
    orientation: 'both',
  },
  render: (args) => (
    <ScrollArea {...args} style={{ height: '14rem', width: '22rem' }}>
      <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem' }}>
        {spellEntries.map((entry) => (
          <div
            key={entry.id}
            style={{
              border: '0.12rem solid #17204d',
              borderRadius: '0.8rem',
              flex: '0 0 10rem',
              padding: '0.75rem',
            }}
          >
            {entry.name}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
