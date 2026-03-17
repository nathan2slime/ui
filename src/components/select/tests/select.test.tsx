import { Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { Select } from '@/components/select';

describe('Select', () => {
  test('renders with combobox semantics', async () => {
    render(
      <Select>
        <Select.Label>Spell school</Select.Label>
        <Select.Control defaultValue="offense">
          <Select.Item value="support">Support</Select.Item>
          <Select.Item value="offense">Offense</Select.Item>
        </Select.Control>
      </Select>,
    );

    const select = screen.getByRole('combobox', { name: 'Spell school' });
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('offense');
  });

  test('renders helper text associated with the control', async () => {
    render(
      <Select helperColor="success">
        <Select.Label>Travel region</Select.Label>
        <Select.Control defaultValue="north">
          <Select.Item value="north">Northern Plateau</Select.Item>
        </Select.Control>
        <Select.HelperText>
          Choose the region for the next quest.
        </Select.HelperText>
      </Select>,
    );

    const select = screen.getByRole('combobox', { name: 'Travel region' });
    const helperText = screen.getByText(
      'Choose the region for the next quest.',
    );

    expect(select).toHaveAttribute(
      'aria-describedby',
      helperText.getAttribute('id'),
    );
  });

  test('forwards disabled state to the native control', async () => {
    render(
      <Select>
        <Select.Label>Archive state</Select.Label>
        <Select.Control defaultValue="locked" disabled>
          <Select.Item value="locked">Locked</Select.Item>
        </Select.Control>
      </Select>,
    );

    const select = screen.getByRole('combobox', { name: 'Archive state' });
    expect(select).toBeDisabled();
  });

  test('renders optional side content', async () => {
    render(
      <Select>
        <Select.Control
          aria-label="Search mode"
          defaultValue="manual"
          startContent={
            <HugeiconsIcon color="currentColor" icon={Search01Icon} size={18} />
          }
        >
          <Select.Item value="manual">Manual</Select.Item>
        </Select.Control>
      </Select>,
    );

    expect(
      screen.getByRole('combobox', { name: 'Search mode' }),
    ).toBeInTheDocument();
  });
});
