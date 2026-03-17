import { describe, expect, test } from '@rstest/core';
import { fireEvent, render, screen } from '@testing-library/react';

import { Switch } from '@/components/switch';

describe('Switch', () => {
  test('renders the provided label and keeps checkbox semantics', async () => {
    render(<Switch label="Enable cloak" />);

    const checkbox = screen.getByRole('checkbox', { name: 'Enable cloak' });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('toggles its checked state when clicked in uncontrolled mode', async () => {
    render(<Switch label="Receive alerts" />);

    const checkbox = screen.getByRole('checkbox', { name: 'Receive alerts' });
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('respects the disabled attribute', async () => {
    render(<Switch disabled label="Disabled control" />);

    const checkbox = screen.getByRole('checkbox', { name: 'Disabled control' });
    expect(checkbox).toBeDisabled();
  });

  test('calls onCheckedChange with the latest state', async () => {
    const states: boolean[] = [];
    render(
      <Switch
        label="Notify guild"
        onCheckedChange={(checked) => states.push(checked)}
      />,
    );
    const checkbox = screen.getByRole('checkbox', { name: 'Notify guild' });
    fireEvent.click(checkbox);
    expect(states).toEqual([true]);
  });

  test('renders the label before the control when labelPlacement is start', async () => {
    const { container } = render(
      <Switch label="Place text first" labelPlacement="start" />,
    );

    const label = container.querySelector('label');
    expect(label?.firstElementChild?.textContent).toContain('Place text first');
  });
});
