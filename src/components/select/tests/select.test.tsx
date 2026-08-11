import { afterEach, describe, expect, test } from '@rstest/core';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import type { ReactElement } from 'react';

import { Select } from '@/components/select';
import { ThemeProvider, theme } from '@/theme';
import type { SelectOption } from '@/types/select';

afterEach(() => cleanup());

const getPopupContent = (): HTMLElement => {
  const listbox = screen.getByRole('listbox', { hidden: true });
  const content = listbox.closest<HTMLElement>('[data-part="content"]');

  if (!content) {
    throw new Error('The Select popup content was not rendered.');
  }

  return content;
};

const items: SelectOption[] = [
  { label: 'Alpha', value: 'alpha' },
  { label: 'Beta', value: 'beta' },
  { label: 'Unavailable', value: 'unavailable', disabled: true },
];

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

describe('Select', () => {
  test('renders an accessible trigger, label, helper text, and hidden select', () => {
    const { container } = renderWithTheme(
      <Select items={items} name="choice">
        <Select.Label>Choice</Select.Label>
        <Select.Control aria-label="Choice trigger" placeholder="Pick one" />
        <Select.HelperText>Choose an available option.</Select.HelperText>
      </Select>,
    );

    const trigger = screen.getByRole('combobox', { name: 'Choice' });
    const helper = screen.getByText('Choose an available option.');
    const hiddenSelect = container.querySelector('select[name="choice"]');

    expect(trigger).toHaveAttribute('aria-describedby', helper.id);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(hiddenSelect).toBeInTheDocument();
    expect(hiddenSelect).toHaveAttribute('aria-hidden', 'true');
  });

  test('selects an item by click and emits its scalar value', async () => {
    let selectedValue: string | null | undefined;

    renderWithTheme(
      <Select items={items} onValueChange={(value) => (selectedValue = value)}>
        <Select.Control aria-label="Choice trigger" placeholder="Pick one" />
      </Select>,
    );

    const trigger = screen.getByRole('combobox', { name: 'Choice trigger' });
    fireEvent.click(trigger);
    const option = await screen.findByRole('option', { name: 'Beta' });

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('listbox')).toBeVisible();

    fireEvent.click(option);

    await waitFor(() => {
      expect(selectedValue).toBe('beta');
      expect(trigger).toHaveTextContent('Beta');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  test('opens a visible listbox through keyboard activation', async () => {
    renderWithTheme(
      <Select items={items}>
        <Select.Control aria-label="Choice trigger" placeholder="Pick one" />
      </Select>,
    );

    const trigger = screen.getByRole('combobox', { name: 'Choice trigger' });
    trigger.focus();
    fireEvent.keyDown(trigger, { key: 'ArrowDown' });

    const listbox = await screen.findByRole('listbox');
    const positioner = listbox.closest('[data-part="positioner"]');

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(listbox).toBeVisible();
    expect(positioner).toHaveStyle('z-index: 1000');
  });

  test('closes when Escape is pressed from the open listbox', async () => {
    renderWithTheme(
      <Select items={items}>
        <Select.Control aria-label="Choice trigger" placeholder="Pick one" />
      </Select>,
    );

    const trigger = screen.getByRole('combobox', { name: 'Choice trigger' });
    trigger.focus();
    fireEvent.keyDown(trigger, { key: 'ArrowDown' });

    const listbox = await screen.findByRole('listbox');
    const content = getPopupContent();
    listbox.focus();

    fireEvent.keyDown(listbox, { key: 'Escape' });

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(content).toHaveAttribute('hidden');
      expect(content.hidden).toBe(true);
    });
    expect(getPopupContent()).toBe(content);
  });

  test('keeps the non-portalled content node through selection and Escape', async () => {
    const { container } = renderWithTheme(
      <Select items={items} portalled={false}>
        <Select.Control aria-label="Choice trigger" placeholder="Pick one" />
      </Select>,
    );

    const trigger = screen.getByRole('combobox', { name: 'Choice trigger' });
    trigger.focus();
    fireEvent.keyDown(trigger, { key: 'ArrowDown' });

    const content = await screen.findByRole('listbox');
    const contentNode = getPopupContent();

    expect(contentNode.closest('[data-part="root"]')).toBe(
      container.querySelector('[data-part="root"]'),
    );

    fireEvent.click(await screen.findByRole('option', { name: 'Beta' }));

    await waitFor(() => expect(trigger).toHaveTextContent('Beta'));
    expect(contentNode).toBe(getPopupContent());
    expect(contentNode).toHaveAttribute('hidden');
    expect(contentNode.hidden).toBe(true);

    trigger.focus();
    fireEvent.keyDown(trigger, { key: 'ArrowDown' });
    expect(await screen.findByRole('listbox')).toBe(content);

    fireEvent.keyDown(content, { key: 'Escape' });

    await waitFor(() => {
      expect(contentNode).toBe(getPopupContent());
      expect(contentNode).toHaveAttribute('hidden');
      expect(contentNode.hidden).toBe(true);
    });
  });

  test('keeps the root disabled and exposes disabled collection items', async () => {
    const { rerender } = renderWithTheme(
      <Select disabled items={items}>
        <Select.Control placeholder="Pick one" />
      </Select>,
    );

    const disabledTrigger = screen.getByRole('combobox');
    expect(disabledTrigger).toBeDisabled();
    fireEvent.click(disabledTrigger);
    expect(
      screen.queryByRole('option', { name: 'Alpha' }),
    ).not.toBeInTheDocument();

    rerender(
      <ThemeProvider theme={theme}>
        <Select items={items}>
          <Select.Control placeholder="Pick one" />
        </Select>
      </ThemeProvider>,
    );
    fireEvent.click(screen.getByRole('combobox'));

    const disabledOption = await screen.findByRole('option', {
      name: 'Unavailable',
    });
    expect(disabledOption).toHaveAttribute('aria-disabled', 'true');
  });

  test('keeps the selected scalar value in the form hidden select', async () => {
    const { container } = renderWithTheme(
      <form>
        <Select items={items} name="choice">
          <Select.Control placeholder="Pick one" />
        </Select>
      </form>,
    );

    fireEvent.click(screen.getByRole('combobox'));
    fireEvent.click(await screen.findByRole('option', { name: 'Alpha' }));

    const hiddenSelect = container.querySelector('select[name="choice"]');
    expect(hiddenSelect).toHaveValue('alpha');
  });

  test('uses colors from the provided theme', () => {
    const customTheme = { ...theme, navy: '#123456' };

    const { container } = render(
      <ThemeProvider theme={customTheme}>
        <Select items={items}>
          <Select.Control aria-label="Choice trigger" placeholder="Pick one" />
        </Select>
      </ThemeProvider>,
    );

    expect(container.querySelector('[data-part="root"]')).toHaveStyle(
      '--select-navy: #123456',
    );
  });
});
