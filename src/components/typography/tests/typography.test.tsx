import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { Typography } from '@/components/typography';

describe('Typography', () => {
  test('renders the default semantic element for its variant', async () => {
    render(<Typography variant="display">The Journey Endures</Typography>);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('The Journey Endures');
  });

  test('allows overriding the rendered element', async () => {
    render(
      <Typography as="span" variant="heading-3">
        Memories of the Hero Party
      </Typography>,
    );

    expect(screen.getByText('Memories of the Hero Party').tagName).toBe('SPAN');
  });

  test('renders body copy', async () => {
    render(
      <Typography variant="body">
        It&apos;s just a hobby, but I wanted to understand humans better.
      </Typography>,
    );

    expect(
      screen.getByText(
        "It's just a hobby, but I wanted to understand humans better.",
      ),
    ).toBeInTheDocument();
  });
});
