import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';

import { Button } from '@/components/button';
import { ThemeProvider, theme } from '@/theme';

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

describe('Button', () => {
  test('renders its content and keeps button semantics', async () => {
    renderWithTheme(<Button>Demo Button</Button>);
    const button = screen.getByRole('button', { name: 'Demo Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  test('forwards the disabled state', async () => {
    renderWithTheme(<Button disabled>Disabled Action</Button>);
    const button = screen.getByRole('button', { name: 'Disabled Action' });
    expect(button).toBeDisabled();
  });

  test('merges custom class names with styled-components classes', async () => {
    renderWithTheme(<Button className="custom-trigger">Custom Class</Button>);
    const button = screen.getByRole('button', { name: 'Custom Class' });
    expect(button).toHaveClass('custom-trigger');
  });

  test('exposes its variant data attribute for semantic color styling', async () => {
    renderWithTheme(
      <Button color="danger" variant="outline">
        Danger Action
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Danger Action' });
    expect(button).toHaveAttribute('data-variant', 'outline');
  });

  test('renders the border variant with a Select-like paper surface', () => {
    renderWithTheme(<Button variant="border">Border Action</Button>);

    const button = screen.getByRole('button', { name: 'Border Action' });

    expect(button).toHaveAttribute('data-variant', 'border');
    expect(button).toHaveStyle('background-color: #fffaf5');
    expect(button).toHaveStyle('border-color: #17204d');
  });

  test('uses colors from the provided theme', () => {
    const customTheme = {
      ...theme,
      colorPalettes: {
        ...theme.colorPalettes,
        default: {
          ...theme.colorPalettes.default,
          solid: {
            ...theme.colorPalettes.default.solid,
            background: '#123456',
          },
        },
      },
    } as const;

    render(
      <ThemeProvider theme={customTheme}>
        <Button>Custom theme</Button>
      </ThemeProvider>,
    );

    expect(screen.getByRole('button', { name: 'Custom theme' })).toHaveStyle(
      'background-color: #123456',
    );
  });

  test('keeps button semantics when using the icon variant', async () => {
    renderWithTheme(
      <Button aria-label="Add spell" size="icon" variant="solid">
        +
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Add spell' });
    expect(button).toHaveAttribute('data-variant', 'solid');
    expect(button).toHaveAttribute('data-size', 'icon');
  });
});
