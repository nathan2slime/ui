import { Search01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { Input } from '@/components/input';

describe('Input', () => {
  test('renders with textbox semantics', async () => {
    render(<Input placeholder="Enter spell name..." />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  test('forwards disabled state', async () => {
    render(<Input disabled value="Forbidden Ancient Curse" />);
    const input = screen.getByDisplayValue('Forbidden Ancient Curse');
    expect(input).toBeDisabled();
  });

  test('renders side content', async () => {
    render(
      <Input
        aria-label="Search grimoires"
        startContent={
          <HugeiconsIcon color="currentColor" icon={Search01Icon} size={18} />
        }
      />,
    );
    const input = screen.getByRole('textbox', { name: 'Search grimoires' });
    expect(input).toBeInTheDocument();
  });

  test('keeps adornment aliases working', async () => {
    render(
      <Input
        aria-label="Legacy search grimoires"
        startAdornment={
          <HugeiconsIcon color="currentColor" icon={Search01Icon} size={18} />
        }
      />,
    );

    const input = screen.getByRole('textbox', {
      name: 'Legacy search grimoires',
    });
    expect(input).toBeInTheDocument();
  });

  test('renders helper text below the field', async () => {
    render(<Input helperText="Neutral guidance" helperColor="default" />);

    expect(screen.getByText('Neutral guidance')).toBeInTheDocument();
  });

  test('renders the character count when max is provided', async () => {
    render(<Input defaultValue="Spell" max={10} />);

    expect(screen.getByText('5/10')).toBeInTheDocument();
  });

  test('supports warning helper styling', async () => {
    render(<Input helperText="Legacy warning copy" helperColor="warning" />);

    expect(screen.getByText('Legacy warning copy')).toBeInTheDocument();
  });
});
