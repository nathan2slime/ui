import { afterEach, describe, expect, test } from '@rstest/core';
import type { ComponentType, ReactElement, ReactNode } from 'react';

type SelectOption = {
  label: string;
  value: string;
};

const originalMatchMedia = Object.getOwnPropertyDescriptor(
  window,
  'matchMedia',
);

const matchMediaStub = (query: string): MediaQueryList => ({
  matches: true,
  media: query,
  onchange: null,
  addEventListener: () => undefined,
  removeEventListener: () => undefined,
  addListener: () => undefined,
  removeListener: () => undefined,
  dispatchEvent: () => true,
});

Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  value: matchMediaStub,
  writable: true,
});

const restoreMatchMedia = () => {
  if (originalMatchMedia) {
    Object.defineProperty(window, 'matchMedia', originalMatchMedia);
  } else {
    Reflect.deleteProperty(window, 'matchMedia');
  }
};

// The component graph is imported only after the matchMedia stub is installed.
const loadComponentGraph = async () => {
  const [reactModule, testingLibrary, selectModule, themeModule] =
    await Promise.all([
      import('react'),
      import('@testing-library/react'),
      import('@/components/select'),
      import('@/theme'),
    ]);

  return [reactModule, testingLibrary, selectModule, themeModule] as const;
};

let componentGraphPromise: ReturnType<typeof loadComponentGraph> | undefined;

afterEach(async () => {
  if (componentGraphPromise) {
    const [, { cleanup }] = await componentGraphPromise;
    cleanup();
  }
  restoreMatchMedia();
});

describe('Select reduced motion isolation', () => {
  test('passes an immediate zero-duration transition to its Motion island', async () => {
    componentGraphPromise = loadComponentGraph();
    const [
      { createElement },
      { render, screen },
      { Select },
      { ThemeProvider, theme },
    ] = await componentGraphPromise;
    const options: SelectOption[] = [
      { label: 'Alpha', value: 'alpha' },
      { label: 'Beta', value: 'beta' },
    ];
    const componentElement = createElement as unknown as ElementFactory;
    const selectControl = componentElement(
      Select.Control as unknown as ComponentType<Record<string, unknown>>,
      { 'aria-label': 'Choice trigger', placeholder: 'Pick one' },
    );
    const select = componentElement(
      Select as unknown as ComponentType<Record<string, unknown>>,
      {
        defaultOpen: true,
        items: options,
        portalled: false,
      },
      selectControl,
    );

    render(
      componentElement(
        ThemeProvider as unknown as ComponentType<Record<string, unknown>>,
        { theme },
        select,
      ),
    );

    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-expanded',
      'true',
    );
    const listbox = screen.getByRole('listbox');
    expect(listbox).not.toHaveAttribute('hidden');
    expect(listbox).toHaveStyle('opacity: 1');
  });
});

type ElementFactory = (
  component: ComponentType<Record<string, unknown>>,
  props: Record<string, unknown>,
  ...children: ReactNode[]
) => ReactElement;
