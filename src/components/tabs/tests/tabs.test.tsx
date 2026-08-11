import { afterEach, describe, expect, test } from '@rstest/core';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import type { ReactElement } from 'react';

import { Tabs } from '@/components/tabs';
import { ThemeProvider, theme } from '@/theme';

type OffsetProperty =
  | 'offsetHeight'
  | 'offsetLeft'
  | 'offsetTop'
  | 'offsetWidth';

type TabGeometry = Record<OffsetProperty, number>;

const offsetProperties: readonly OffsetProperty[] = [
  'offsetLeft',
  'offsetTop',
  'offsetWidth',
  'offsetHeight',
];

const tabGeometry: Readonly<Record<string, TabGeometry>> = {
  account: {
    offsetHeight: 28,
    offsetLeft: 8,
    offsetTop: 12,
    offsetWidth: 64,
  },
  password: {
    offsetHeight: 32,
    offsetLeft: 96,
    offsetTop: 52,
    offsetWidth: 88,
  },
};

const originalOffsetDescriptors = new Map<
  OffsetProperty,
  PropertyDescriptor | undefined
>();

const mockTabGeometry = () => {
  for (const property of offsetProperties) {
    originalOffsetDescriptors.set(
      property,
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, property),
    );
    Object.defineProperty(HTMLElement.prototype, property, {
      configurable: true,
      get: function (this: HTMLElement) {
        const value = this.getAttribute('data-value');
        const geometry = value ? tabGeometry[value] : undefined;

        return geometry?.[property] ?? 0;
      },
    });
  }
};

const restoreTabGeometry = () => {
  for (const property of offsetProperties) {
    const descriptor = originalOffsetDescriptors.get(property);

    if (descriptor) {
      Object.defineProperty(HTMLElement.prototype, property, descriptor);
    } else {
      delete HTMLElement.prototype[property];
    }
  }

  originalOffsetDescriptors.clear();
};

afterEach(() => {
  cleanup();
  restoreTabGeometry();
});

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

describe('Tabs', () => {
  test('selects the default value and renders its panel', () => {
    renderWithTheme(
      <Tabs defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    expect(screen.getByRole('tab', { name: 'Account' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tab', { name: 'Password' })).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Account content');
  });

  test('exposes tab roles and trigger-to-panel ARIA relationships', () => {
    renderWithTheme(
      <Tabs defaultValue="account">
        <Tabs.List aria-label="Account settings">
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    const list = screen.getByRole('tablist', { name: 'Account settings' });
    const accountTab = screen.getByRole('tab', { name: 'Account' });
    const accountPanel = screen
      .getByText('Account content')
      .closest('[role="tabpanel"]');

    expect(list).toBeInTheDocument();
    expect(accountPanel).not.toBeNull();

    if (!accountPanel) {
      throw new Error('The account tab panel was not rendered.');
    }

    expect(accountTab).toHaveAttribute('aria-controls', accountPanel.id);
    expect(accountPanel).toHaveAttribute('aria-labelledby', accountTab.id);
    expect(accountPanel).toHaveAttribute('role', 'tabpanel');
  });

  test('activates a tab and calls onValueChange when clicked', async () => {
    let selectedValue: string | undefined;

    renderWithTheme(
      <Tabs
        defaultValue="account"
        onValueChange={({ value }) => {
          selectedValue = value;
        }}
      >
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    fireEvent.click(screen.getByRole('tab', { name: 'Password' }));

    await waitFor(() => {
      expect(selectedValue).toBe('password');
      expect(screen.getByRole('tab', { name: 'Password' })).toHaveAttribute(
        'aria-selected',
        'true',
      );
    });
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Password content');
  });

  test('supports keyboard activation and vertical navigation', async () => {
    renderWithTheme(
      <Tabs defaultValue="account" orientation="vertical">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
          <Tabs.Trigger value="security">Security</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
        <Tabs.Content value="security">Security content</Tabs.Content>
      </Tabs>,
    );

    const accountTab = screen.getByRole('tab', { name: 'Account' });
    const passwordTab = screen.getByRole('tab', { name: 'Password' });

    accountTab.focus();
    fireEvent.keyDown(accountTab, { key: 'ArrowDown' });

    await waitFor(() => {
      expect(passwordTab).toHaveFocus();
      expect(passwordTab).toHaveAttribute('aria-selected', 'true');
    });
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Password content');
  });

  test('keeps selection controlled until the parent changes value', async () => {
    let selectedValue: string | undefined;
    const tabs = (
      <Tabs
        value="account"
        onValueChange={({ value }) => {
          selectedValue = value;
        }}
      >
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>
    );
    const { rerender } = renderWithTheme(tabs);

    fireEvent.click(screen.getByRole('tab', { name: 'Password' }));

    await waitFor(() => expect(selectedValue).toBe('password'));
    expect(screen.getByRole('tab', { name: 'Account' })).toHaveAttribute(
      'aria-selected',
      'true',
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Tabs
          value="password"
          onValueChange={({ value }) => (selectedValue = value)}
        >
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="password">Password</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="account">Account content</Tabs.Content>
          <Tabs.Content value="password">Password content</Tabs.Content>
        </Tabs>
      </ThemeProvider>,
    );

    expect(screen.getByRole('tab', { name: 'Password' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Password content');
  });

  test('does not activate a disabled trigger', () => {
    renderWithTheme(
      <Tabs defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger disabled value="password">
            Password
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    const disabledTab = screen.getByRole('tab', { name: 'Password' });

    expect(disabledTab).toBeDisabled();

    fireEvent.click(disabledTab);

    expect(screen.getByRole('tab', { name: 'Account' })).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Account content');
  });

  test('renders a horizontal indicator with only left and width geometry', async () => {
    mockTabGeometry();

    renderWithTheme(
      <Tabs defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
          <Tabs.Indicator data-testid="indicator" />
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    const indicator = screen.getByTestId('indicator');

    await waitFor(() => {
      expect(indicator).not.toHaveAttribute('hidden');
      expect(indicator.style.left).toBe('8px');
      expect(indicator.style.width).toBe('64px');
    });
    expect(indicator.style.top).toBe('');
    expect(indicator.style.height).toBe('');
    expect(indicator).toHaveAttribute('aria-hidden', 'true');
  });

  test('renders a vertical indicator with only top and height geometry', async () => {
    mockTabGeometry();

    renderWithTheme(
      <Tabs defaultValue="account" orientation="vertical">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
          <Tabs.Indicator data-testid="indicator" />
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    const indicator = screen.getByTestId('indicator');

    await waitFor(() => {
      expect(indicator).not.toHaveAttribute('hidden');
      expect(indicator.style.top).toBe('12px');
      expect(indicator.style.height).toBe('28px');
    });
    expect(indicator.style.left).toBe('');
    expect(indicator.style.width).toBe('');
  });

  test('preserves the indicator node and follows selection geometry', async () => {
    mockTabGeometry();

    renderWithTheme(
      <Tabs defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
          <Tabs.Indicator data-testid="indicator" />
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    const indicator = screen.getByTestId('indicator');
    const indicatorId = indicator.id;

    await waitFor(() => expect(indicator.style.left).toBe('8px'));
    fireEvent.click(screen.getByRole('tab', { name: 'Password' }));

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Password' })).toHaveAttribute(
        'aria-selected',
        'true',
      );
      expect(indicator.style.left).toBe('96px');
      expect(indicator.style.width).toBe('88px');
    });

    expect(screen.getByTestId('indicator')).toBe(indicator);
    expect(indicator).toHaveAttribute('id', indicatorId);
    expect(indicator).toHaveAttribute('data-part', 'indicator');
    expect(indicator).toHaveAttribute('aria-hidden', 'true');
  });

  test('does not retain horizontal inline geometry after changing orientation', async () => {
    mockTabGeometry();

    const { rerender } = renderWithTheme(
      <Tabs defaultValue="account" orientation="horizontal">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
          <Tabs.Indicator data-testid="indicator" />
        </Tabs.List>
        <Tabs.Content value="account">Account content</Tabs.Content>
        <Tabs.Content value="password">Password content</Tabs.Content>
      </Tabs>,
    );

    const indicator = screen.getByTestId('indicator');
    await waitFor(() => expect(indicator.style.left).toBe('8px'));

    rerender(
      <ThemeProvider theme={theme}>
        <Tabs defaultValue="account" orientation="vertical">
          <Tabs.List>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="password">Password</Tabs.Trigger>
            <Tabs.Indicator data-testid="indicator" />
          </Tabs.List>
          <Tabs.Content value="account">Account content</Tabs.Content>
          <Tabs.Content value="password">Password content</Tabs.Content>
        </Tabs>
      </ThemeProvider>,
    );

    const verticalIndicator = screen.getByTestId('indicator');

    await waitFor(() => {
      expect(verticalIndicator).toHaveAttribute('data-orientation', 'vertical');
      expect(verticalIndicator.style.top).toBe('12px');
      expect(verticalIndicator.style.height).toBe('28px');
    });
    expect(verticalIndicator.style.left).toBe('');
    expect(verticalIndicator.style.width).toBe('');
  });
});
