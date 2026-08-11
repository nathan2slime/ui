import { describe, expect, test } from '@rstest/core';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import type { ReactElement } from 'react';

import { Checkbox } from '@/components/checkbox';
import { ThemeProvider, theme } from '@/theme';
import type { CheckboxCheckedState } from '@/types/checkbox';

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

describe('Checkbox', () => {
  test('renders a labeled checkbox', () => {
    renderWithTheme(<Checkbox label="Accept quest terms" />);

    const checkbox = screen.getByRole('checkbox', {
      name: 'Accept quest terms',
    });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('toggles in uncontrolled mode', async () => {
    renderWithTheme(<Checkbox label="Receive alerts" />);

    const checkbox = screen.getByRole('checkbox', { name: 'Receive alerts' });
    fireEvent.click(checkbox);

    await waitFor(() => expect(checkbox).toBeChecked());
  });

  test('calls onCheckedChange with Zag details', async () => {
    const checkedStates: CheckboxCheckedState[] = [];

    renderWithTheme(
      <Checkbox
        label="Notify guild"
        onCheckedChange={({ checked }) => checkedStates.push(checked)}
      />,
    );

    fireEvent.click(screen.getByRole('checkbox', { name: 'Notify guild' }));

    await waitFor(() => expect(checkedStates).toEqual([true]));
  });

  test('respects disabled state', () => {
    renderWithTheme(<Checkbox disabled label="Disabled control" />);

    expect(
      screen.getByRole('checkbox', { name: 'Disabled control' }),
    ).toBeDisabled();
  });

  test('renders indeterminate state', () => {
    renderWithTheme(
      <Checkbox defaultChecked="indeterminate" label="Some selected" />,
    );

    expect(
      screen.getByRole('checkbox', { name: 'Some selected' }),
    ).toBePartiallyChecked();
  });

  test('falls back to dynamic checked and unchecked labels', async () => {
    renderWithTheme(<Checkbox />);

    const checkbox = screen.getByRole('checkbox', {
      name: 'Input is unchecked',
    });
    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(
        screen.getByRole('checkbox', { name: 'Input is checked' }),
      ).toBeChecked();
    });
  });
});
