import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@/components/tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activationMode: {
      control: 'inline-radio',
      options: ['automatic', 'manual'],
    },
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    color: 'default',
    orientation: 'horizontal',
    size: 'md',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const panelStyle = { maxWidth: '34rem', width: 'min(34rem, 82vw)' };

export const Default: Story = {
  render: (args) => (
    <div style={panelStyle}>
      <Tabs.Root {...args} defaultValue="overview">
        <Tabs.List aria-label="Account settings">
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="security">Security</Tabs.Trigger>
          <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="overview">
          <h2>Account overview</h2>
          <p>Review your profile, plan, and recent activity in one place.</p>
        </Tabs.Content>
        <Tabs.Content value="security">
          <h2>Security</h2>
          <p>Keep your sign-in details and recovery options up to date.</p>
        </Tabs.Content>
        <Tabs.Content value="notifications">
          <h2>Notifications</h2>
          <p>Choose which updates you would like to receive from us.</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  ),
};

export const ManualVertical: Story = {
  args: {
    activationMode: 'manual',
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ ...panelStyle, maxWidth: '38rem' }}>
      <Tabs.Root {...args} defaultValue="profile">
        <Tabs.List aria-label="Workspace preferences">
          <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
          <Tabs.Trigger value="workspace">Workspace</Tabs.Trigger>
          <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="profile">
          <h2>Profile preferences</h2>
          <p>Update the name and avatar your teammates see.</p>
        </Tabs.Content>
        <Tabs.Content value="workspace">
          <h2>Workspace preferences</h2>
          <p>Set the language, time zone, and default workspace view.</p>
        </Tabs.Content>
        <Tabs.Content value="billing">
          <h2>Billing preferences</h2>
          <p>Manage invoices, payment details, and your current plan.</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  ),
};

export const DisabledTrigger: Story = {
  render: (args) => (
    <div style={panelStyle}>
      <Tabs.Root {...args} defaultValue="available">
        <Tabs.List aria-label="Report sections">
          <Tabs.Trigger value="available">Summary</Tabs.Trigger>
          <Tabs.Trigger disabled value="locked">
            Analytics (locked)
          </Tabs.Trigger>
          <Tabs.Trigger value="export">Export</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="available">
          <h2>Report summary</h2>
          <p>Your latest report is ready to review and share.</p>
        </Tabs.Content>
        <Tabs.Content value="locked">
          <h2>Analytics</h2>
          <p>
            Analytics become available when your workspace has more activity.
          </p>
        </Tabs.Content>
        <Tabs.Content value="export">
          <h2>Export report</h2>
          <p>Download a copy of this report for your team.</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  ),
};
