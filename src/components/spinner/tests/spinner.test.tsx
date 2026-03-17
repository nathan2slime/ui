import { describe, expect, test } from '@rstest/core';
import { cleanup, render, screen } from '@testing-library/react';

import { Spinner } from '@/components/spinner';

describe('Spinner', () => {
  test('exposes status semantics with a default label', async () => {
    cleanup();
    render(<Spinner />);

    const spinner = screen.getByRole('status');
    expect(spinner).toHaveAttribute('aria-label', 'Loading');
  });

  test('allows overriding the accessible label', async () => {
    cleanup();
    render(<Spinner aria-label="Fetching data" />);

    expect(screen.getByRole('status')).toHaveAttribute(
      'aria-label',
      'Fetching data',
    );
  });

  test('reflects variant and size via data attributes', async () => {
    cleanup();
    render(<Spinner size="lg" variant="neutral" />);

    const spinner = screen.getByRole('status');
    expect(spinner).toHaveAttribute('data-size', 'lg');
    expect(spinner).toHaveAttribute('data-variant', 'neutral');
  });
});
