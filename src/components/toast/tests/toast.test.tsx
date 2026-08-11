import { afterEach, describe, expect, test } from '@rstest/core';
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import type { ReactElement } from 'react';

import { createToaster, Toaster } from '@/components/toast';
import { ThemeProvider, theme } from '@/theme';
import type { ToastStore } from '@/types/toast';

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

const createTestToaster = (): ToastStore =>
  createToaster({ duration: Infinity, overlap: true, removeDelay: 0 });

afterEach(() => cleanup());

describe('Toast', () => {
  test('renders a toast created through the store', async () => {
    const store = createTestToaster();
    renderWithTheme(<Toaster store={store} />);

    act(() => {
      store.create({ description: 'A friendly message.', title: 'Hello' });
    });

    expect(await screen.findByRole('status')).toHaveTextContent('Hello');
    expect(screen.getByText('A friendly message.')).toBeInTheDocument();
  });

  test('applies semantic toast type attributes', async () => {
    const store = createTestToaster();
    renderWithTheme(<Toaster store={store} />);

    act(() => {
      store.success({ title: 'Data submitted!' });
    });

    expect(await screen.findByRole('status')).toHaveAttribute(
      'data-type',
      'success',
    );
  });

  test('runs action callbacks from action toasts', async () => {
    const actionCalls: string[] = [];
    const store = createTestToaster();
    renderWithTheme(<Toaster store={store} />);

    act(() => {
      store.warning({
        action: {
          label: 'Undo',
          onClick: () => actionCalls.push('undo'),
        },
        title: 'Spell archived',
      });
    });

    fireEvent.click(await screen.findByRole('button', { name: 'Undo' }));

    expect(actionCalls).toEqual(['undo']);
  });

  test('dismisses toast with the close trigger', async () => {
    const store = createTestToaster();
    renderWithTheme(<Toaster store={store} />);

    act(() => {
      store.create({ title: 'Dismiss me' });
    });

    fireEvent.click(
      await screen.findByRole('button', { name: 'Dismiss notification' }),
    );

    await waitFor(() => {
      expect(screen.queryByText('Dismiss me')).not.toBeInTheDocument();
    });
  });

  test('uses the accessible Zag label with an icon close trigger', async () => {
    const store = createTestToaster();
    renderWithTheme(<Toaster store={store} />);

    act(() => {
      store.create({ title: 'Dismiss me' });
    });

    const closeButton = await screen.findByRole('button', {
      name: 'Dismiss notification',
    });

    expect(closeButton.querySelector('svg')).toBeInTheDocument();
    expect(closeButton).not.toHaveTextContent('x');
  });
});
