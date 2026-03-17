import { describe, expect, test } from '@rstest/core';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Tabs } from '@/components/tabs';

describe('Tabs', () => {
  test('renders the default active panel', async () => {
    cleanup();

    render(
      <Tabs defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Account content');
    expect(screen.queryByText('Password content')).not.toBeInTheDocument();
  });

  test('switches panels when a trigger is clicked', async () => {
    cleanup();

    render(
      <Tabs defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    fireEvent.click(screen.getByRole('tab', { name: 'Password' }));

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Password content');
  });

  test('respects the controlled value', async () => {
    cleanup();

    render(
      <Tabs value="password">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Password content');
    expect(screen.getByRole('tab', { name: 'Password' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
  });
});
