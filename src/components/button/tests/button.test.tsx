import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { Button } from '@/components/button';

describe('Button', () => {
  test('renders its content and keeps button semantics', async () => {
    render(<Button>Demo Button</Button>);
    const button = screen.getByRole('button', { name: 'Demo Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  test('forwards the disabled state', async () => {
    render(<Button disabled>Disabled Action</Button>);
    const button = screen.getByRole('button', { name: 'Disabled Action' });
    expect(button).toBeDisabled();
  });

  test('merges custom class names with Panda classes', async () => {
    render(<Button className="custom-trigger">Custom Class</Button>);
    const button = screen.getByRole('button', { name: 'Custom Class' });
    expect(button).toHaveClass('custom-trigger');
  });

  test('exposes its variant data attribute for semantic color styling', async () => {
    render(
      <Button color="danger" variant="outline">
        Danger Action
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Danger Action' });
    expect(button).toHaveAttribute('data-variant', 'outline');
  });

  test('keeps button semantics when using the icon variant', async () => {
    render(
      <Button aria-label="Add spell" size="icon" variant="solid">
        +
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Add spell' });
    expect(button).toHaveAttribute('data-variant', 'solid');
    expect(button).toHaveAttribute('data-size', 'icon');
  });
});
