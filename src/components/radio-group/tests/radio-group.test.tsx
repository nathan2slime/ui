import { afterEach, describe, expect, test } from '@rstest/core';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import type { ReactElement } from 'react';

import { RadioGroup } from '@/components/radio-group';
import { ThemeProvider, theme } from '@/theme';
import type { RadioGroupItem } from '@/types/radio-group';

const fruitItems: RadioGroupItem[] = [
  { value: 'apple', label: 'Apples' },
  { value: 'orange', label: 'Oranges' },
  { value: 'mango', label: 'Mangoes' },
  { value: 'grape', label: 'Grapes' },
];

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

afterEach(() => cleanup());

describe('RadioGroup', () => {
  test('renders a labeled radio group with items', () => {
    renderWithTheme(<RadioGroup label="Fruits" items={fruitItems} />);

    expect(
      screen.getByRole('radiogroup', { name: 'Fruits' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Apples' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Mangoes' })).toBeInTheDocument();
  });

  test('selects the default value', () => {
    renderWithTheme(
      <RadioGroup defaultValue="orange" label="Fruits" items={fruitItems} />,
    );

    expect(screen.getByRole('radio', { name: 'Oranges' })).toBeChecked();
  });

  test('updates uncontrolled selection on click', async () => {
    renderWithTheme(<RadioGroup label="Fruits" items={fruitItems} />);

    fireEvent.click(screen.getByRole('radio', { name: 'Mangoes' }));

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: 'Mangoes' })).toBeChecked();
    });
  });

  test('calls onValueChange with Zag details', async () => {
    const values: Array<string | null> = [];

    renderWithTheme(
      <RadioGroup
        label="Fruits"
        items={fruitItems}
        onValueChange={({ value }) => values.push(value)}
      />,
    );

    fireEvent.click(screen.getByRole('radio', { name: 'Grapes' }));

    await waitFor(() => expect(values).toEqual(['grape']));
  });

  test('respects disabled items', () => {
    renderWithTheme(
      <RadioGroup
        label="Fruits"
        items={[
          ...fruitItems,
          { value: 'pear', label: 'Pears', disabled: true },
        ]}
      />,
    );

    expect(screen.getByRole('radio', { name: 'Pears' })).toBeDisabled();
  });
});
