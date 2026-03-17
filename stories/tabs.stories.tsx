import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@/components/tabs';

type TabsStoryArgs = {
  defaultValue: string;
};

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'inline-radio',
      options: ['account', 'password', 'notifications'],
    },
  },
  args: {
    defaultValue: 'account',
  },
  render: (args: TabsStoryArgs) => {
    return (
      <div style={{ width: '400px' }}>
        <Tabs defaultValue={args.defaultValue}>
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="password">Password</Tabs.Trigger>
            <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="account">
            Make changes to your account here.
          </Tabs.Content>
          <Tabs.Content value="password">
            Change your password here.
          </Tabs.Content>
          <Tabs.Content value="notifications">
            Adjust alerts, updates, and journey reports here.
          </Tabs.Content>
        </Tabs>
      </div>
    );
  },
} satisfies Meta<TabsStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoTabs: Story = {
  render: () => {
    return (
      <div style={{ width: '400px' }}>
        <Tabs defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="password">Password</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="account">
            Make changes to your account here.
          </Tabs.Content>
          <Tabs.Content value="password">
            Change your password here.
          </Tabs.Content>
        </Tabs>
      </div>
    );
  },
};

export const DisabledTrigger: Story = {
  render: () => {
    return (
      <div style={{ width: '400px' }}>
        <Tabs defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger disabled value="password">
              Password
            </Tabs.Trigger>
            <Tabs.Trigger value="notifications">Notifications</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="account">
            Make changes to your account here.
          </Tabs.Content>
          <Tabs.Content value="password">
            Change your password here.
          </Tabs.Content>
          <Tabs.Content value="notifications">
            Adjust alerts, updates, and journey reports here.
          </Tabs.Content>
        </Tabs>
      </div>
    );
  },
};
