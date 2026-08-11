import { afterEach, describe, expect, test } from '@rstest/core';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';

import { Input } from '@/components/input';
import { ThemeProvider, theme } from '@/theme';

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

afterEach(() => cleanup());

describe('Input', () => {
  test('renders an accessible labeled native input', () => {
    renderWithTheme(<Input label="Email" placeholder="you@example.com" />);

    const input = screen.getByLabelText('Email');

    expect(input).toBeInstanceOf(HTMLInputElement);
    expect(input).toHaveAttribute('placeholder', 'you@example.com');
  });

  test('connects helper text with aria-describedby', () => {
    renderWithTheme(
      <Input
        aria-describedby="external-help"
        helperText="We only use this for updates."
        id="email"
        label="Email"
      />,
    );

    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'aria-describedby',
      'external-help email-helper',
    );
    expect(screen.getByText('We only use this for updates.')).toHaveAttribute(
      'id',
      'email-helper',
    );
  });

  test('uses error text as the described invalid message', () => {
    renderWithTheme(
      <Input
        errorText="Email is required."
        helperText="We only use this for updates."
        id="email"
        label="Email"
      />,
    );

    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'aria-describedby',
      'email-error',
    );
    expect(screen.getByLabelText('Email')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
    expect(screen.getByText('Email is required.')).toHaveAttribute(
      'data-status',
      'danger',
    );
  });

  test('emits native change events', () => {
    let value = '';

    renderWithTheme(
      <Input
        aria-label="Username"
        onChange={(event) => {
          value = event.currentTarget.value;
        }}
      />,
    );

    fireEvent.change(screen.getByLabelText('Username'), {
      target: { value: 'akasa' },
    });

    expect(value).toBe('akasa');
  });

  test('applies state attributes and custom theme variables', () => {
    const customTheme = { ...theme, navy: '#123456' };

    render(
      <ThemeProvider theme={customTheme}>
        <Input
          color="success"
          disabled
          fullWidth
          label="Nickname"
          size="lg"
          status="success"
        />
      </ThemeProvider>,
    );

    const input = screen.getByLabelText('Nickname');
    const root = input.closest('[data-part="root"]');

    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('data-size', 'lg');
    expect(input).toHaveAttribute('data-status', 'success');
    expect(root).toHaveAttribute('data-color', 'success');
    expect(root).toHaveAttribute('data-full-width', 'true');
    expect(root).toHaveStyle('--input-navy: #123456');
  });

  test('renders the border variant with a Select-like paper surface', () => {
    renderWithTheme(<Input label="Search" variant="border" />);

    const input = screen.getByLabelText('Search');
    const root = input.closest('[data-part="root"]');

    expect(root).toHaveAttribute('data-variant', 'border');
    expect(input).toHaveAttribute('data-variant', 'border');
    expect(input).toHaveStyle(
      'background: linear-gradient(180deg, #fffaf5 0%, #fffaf5 100%)',
    );
    expect(input).toHaveStyle('border-color: #17204d');
  });
});
