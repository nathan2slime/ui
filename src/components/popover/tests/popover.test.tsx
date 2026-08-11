import { afterEach, describe, expect, test } from '@rstest/core';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import type { ReactElement } from 'react';

import { Popover } from '@/components/popover';
import { ThemeProvider, theme } from '@/theme';

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

afterEach(() => cleanup());

describe('Popover', () => {
  test('renders a trigger and hidden dialog content', () => {
    renderWithTheme(
      <Popover trigger="Click me" title="Presenters" description="Description">
        <button type="button">Action Button</button>
      </Popover>,
    );

    expect(screen.getByRole('button', { name: 'Click me' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('opens uncontrolled content from the trigger', async () => {
    renderWithTheme(
      <Popover trigger="Click me" title="Presenters" description="Description">
        <button type="button">Action Button</button>
      </Popover>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Click me' }));

    expect(await screen.findByRole('dialog')).toHaveTextContent('Presenters');
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Action Button' }),
    ).toBeInTheDocument();
  });

  test('calls onOpenChange with Zag details', async () => {
    const states: boolean[] = [];

    renderWithTheme(
      <Popover
        trigger="Click me"
        title="Presenters"
        onOpenChange={({ open }) => states.push(open)}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Click me' }));

    await waitFor(() => expect(states).toEqual([true]));
  });

  test('closes with the close trigger', async () => {
    renderWithTheme(
      <Popover defaultOpen trigger="Click me" title="Presenters">
        <button type="button">Action Button</button>
      </Popover>,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Close popover' }));

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  test('uses the accessible Zag label with an icon close trigger', () => {
    renderWithTheme(
      <Popover defaultOpen trigger="Click me" title="Presenters" />,
    );

    const closeButton = screen.getByRole('button', { name: 'Close popover' });

    expect(closeButton.querySelector('svg')).toBeInTheDocument();
    expect(closeButton).not.toHaveTextContent('X');
  });

  test('enables pointer events on open content', () => {
    renderWithTheme(
      <Popover defaultOpen trigger="Click me" title="Presenters" />,
    );

    expect(screen.getByRole('dialog')).toHaveStyle('pointer-events: all');
  });

  test('preserves caller-supplied close label content', () => {
    renderWithTheme(
      <Popover
        closeLabel="Dismiss"
        defaultOpen
        title="Presenters"
        trigger="Click me"
      />,
    );

    expect(
      screen.getByRole('button', { name: 'Close popover' }),
    ).toHaveTextContent('Dismiss');
  });

  test('respects controlled open state', () => {
    renderWithTheme(
      <Popover open trigger="Click me" title="Presenters">
        Visible content
      </Popover>,
    );

    expect(screen.getByRole('dialog')).toHaveTextContent('Visible content');
    expect(screen.getByRole('button', { name: 'Click me' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  test('provides visual variables on the portalled positioner', () => {
    const customTheme = { ...theme, navy: '#123456' };

    render(
      <ThemeProvider theme={customTheme}>
        <Popover
          color="danger"
          defaultOpen
          size="lg"
          title="Presenters"
          trigger="Click me"
        />
      </ThemeProvider>,
    );

    const positioner = screen
      .getByRole('dialog')
      .closest('[data-part="positioner"]');

    expect(positioner).toHaveAttribute('data-color', 'danger');
    expect(positioner).toHaveAttribute('data-size', 'lg');
    expect(positioner).toHaveStyle('--popover-navy: #123456');
    expect(positioner).toHaveStyle('--popover-content-padding: 1.08rem');
    expect(positioner).toHaveStyle('--popover-content-width: 20rem');
  });
});
