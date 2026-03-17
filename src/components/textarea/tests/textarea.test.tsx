import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { Textarea } from '@/components/textarea';

describe('Textarea', () => {
  test('renders its label and helper text', async () => {
    render(
      <Textarea
        helperText="Record your observations."
        label="Magic Journal"
        placeholder="Write here..."
      />,
    );

    expect(screen.getByLabelText('Magic Journal')).toBeInTheDocument();
    expect(screen.getByText('Record your observations.')).toBeInTheDocument();
  });

  test('renders the character counter when a max is provided', async () => {
    render(<Textarea defaultValue="abc" max={10} />);

    expect(screen.getByText('3/10')).toBeInTheDocument();
  });
});
