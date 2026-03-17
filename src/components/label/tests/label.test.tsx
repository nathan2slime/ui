import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { Label } from '@/components/label';

describe('Label', () => {
  test('renders its content with label semantics', async () => {
    render(<Label htmlFor="field-id">Spell name</Label>);

    const label = screen.getByText('Spell name');
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('for', 'field-id');
  });
});
