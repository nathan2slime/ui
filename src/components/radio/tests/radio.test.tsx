import { describe, expect, test } from '@rstest/core';
import { fireEvent, render, screen } from '@testing-library/react';

import { Radio } from '@/components/radio';

describe('Radio', () => {
  test('renders the provided label with radio semantics', async () => {
    render(<Radio label="Fire spells" />);

    const input = screen.getByRole('radio', { name: 'Fire spells' });
    expect(input).toBeInTheDocument();
  });

  test('groups radios sharing the same name', async () => {
    render(
      <div>
        <Radio defaultChecked label="Basic" name="plan" />
        <Radio label="Pro" name="plan" />
      </div>,
    );

    const basic = screen.getByRole('radio', { name: 'Basic' });
    const pro = screen.getByRole('radio', { name: 'Pro' });
    expect(basic).toBeChecked();
    fireEvent.click(pro);
    expect(pro).toBeChecked();
    expect(basic).not.toBeChecked();
  });

  test('respects the disabled prop', async () => {
    render(<Radio disabled label="Locked option" />);

    const input = screen.getByRole('radio', { name: 'Locked option' });
    expect(input).toBeDisabled();
  });
});
