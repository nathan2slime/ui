import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { HelperText } from '@/components/helper-text';

describe('HelperText', () => {
  test('renders its content', async () => {
    render(<HelperText>Choose the next route.</HelperText>);

    expect(screen.getByText('Choose the next route.')).toBeInTheDocument();
  });
});
