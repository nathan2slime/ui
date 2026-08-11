import { describe, expect, test } from '@rstest/core';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { ReactElement } from 'react';

import { Switch } from '@/components/switch';
import { ThemeProvider, theme } from '@/theme';

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

describe('Switch', () => {
  test('renders a labeled checkbox switch', () => {
    renderWithTheme(<Switch label="Enable cloak" />);

    const checkbox = screen.getByRole('checkbox', { name: 'Enable cloak' });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('toggles in uncontrolled mode', async () => {
    renderWithTheme(<Switch label="Receive alerts" />);

    const checkbox = screen.getByRole('checkbox', { name: 'Receive alerts' });
    fireEvent.click(checkbox);

    await waitFor(() => expect(checkbox).toBeChecked());
  });

  test('calls onCheckedChange with Zag details', async () => {
    const checkedStates: boolean[] = [];

    renderWithTheme(
      <Switch
        label="Notify guild"
        onCheckedChange={({ checked }) => checkedStates.push(checked)}
      />,
    );

    fireEvent.click(screen.getByRole('checkbox', { name: 'Notify guild' }));

    await waitFor(() => expect(checkedStates).toEqual([true]));
  });

  test('respects disabled state', () => {
    renderWithTheme(<Switch disabled label="Disabled control" />);

    expect(
      screen.getByRole('checkbox', { name: 'Disabled control' }),
    ).toBeDisabled();
  });

  test('falls back to dynamic checked and unchecked labels', async () => {
    renderWithTheme(<Switch />);

    const checkbox = screen.getByRole('checkbox', { name: 'Off' });
    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(screen.getByRole('checkbox', { name: 'On' })).toBeChecked();
    });
  });
});
