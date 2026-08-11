import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from '@/theme';

const meta = {
  title: 'Foundation/Theme',
  component: ThemeProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <div>Library theme applied</div>
    </ThemeProvider>
  ),
};
