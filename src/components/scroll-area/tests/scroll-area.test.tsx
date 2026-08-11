import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';

import { ScrollArea } from '@/components/scroll-area';
import { ThemeProvider, theme } from '@/theme';

const renderWithTheme = (element: ReactElement) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>);

describe('ScrollArea', () => {
  test('renders scrollable content inside the viewport', () => {
    const { container } = renderWithTheme(
      <ScrollArea style={{ height: '10rem', width: '12rem' }}>
        <p>Scrollable spell notes</p>
      </ScrollArea>,
    );

    expect(screen.getByText('Scrollable spell notes')).toBeInTheDocument();
    expect(container.querySelector('[data-part="root"]')).toBeInTheDocument();
    expect(
      container.querySelector('[data-part="viewport"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-part="content"]'),
    ).toBeInTheDocument();
  });

  test('renders a vertical scrollbar by default', () => {
    const { container } = renderWithTheme(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>,
    );

    const scrollbar = container.querySelector('[data-part="scrollbar"]');

    expect(scrollbar).toHaveAttribute('data-orientation', 'vertical');
    expect(container.querySelectorAll('[data-part="scrollbar"]')).toHaveLength(
      1,
    );
  });

  test('renders both scrollbars and the corner when requested', () => {
    const { container } = renderWithTheme(
      <ScrollArea orientation="both">
        <div>Wide content</div>
      </ScrollArea>,
    );

    const scrollbars = Array.from(
      container.querySelectorAll('[data-part="scrollbar"]'),
    );

    expect(scrollbars).toHaveLength(2);
    expect(
      scrollbars.some(
        (scrollbar) =>
          scrollbar.getAttribute('data-orientation') === 'vertical',
      ),
    ).toBe(true);
    expect(
      scrollbars.some(
        (scrollbar) =>
          scrollbar.getAttribute('data-orientation') === 'horizontal',
      ),
    ).toBe(true);
    expect(container.querySelector('[data-part="corner"]')).toBeInTheDocument();
  });

  test('forwards slot class names', () => {
    const { container } = renderWithTheme(
      <ScrollArea
        className="root-class"
        contentClassName="content-class"
        scrollbarClassName="scrollbar-class"
        thumbClassName="thumb-class"
        viewportClassName="viewport-class"
      >
        <div>Content</div>
      </ScrollArea>,
    );

    expect(container.querySelector('[data-part="root"]')).toHaveClass(
      'root-class',
    );
    expect(container.querySelector('[data-part="viewport"]')).toHaveClass(
      'viewport-class',
    );
    expect(container.querySelector('[data-part="content"]')).toHaveClass(
      'content-class',
    );
    expect(container.querySelector('[data-part="scrollbar"]')).toHaveClass(
      'scrollbar-class',
    );
    expect(container.querySelector('[data-part="thumb"]')).toHaveClass(
      'thumb-class',
    );
  });
});
