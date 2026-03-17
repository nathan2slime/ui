import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { Badge } from '@/components/badge';

describe('Badge', () => {
  test('renders its content', async () => {
    render(<Badge>Grimoire</Badge>);

    expect(screen.getByText('Grimoire')).toBeInTheDocument();
  });

  test('exposes the selected variant for styling hooks', async () => {
    render(<Badge variant="solid">Featured</Badge>);

    expect(screen.getByText('Featured')).toHaveAttribute(
      'data-variant',
      'solid',
    );
  });
});
