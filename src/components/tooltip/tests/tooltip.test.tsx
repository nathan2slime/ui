import { describe, expect, test } from '@rstest/core';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import { Tooltip } from '@/components/tooltip';

describe('Tooltip', () => {
  test('renders content on hover', async () => {
    cleanup();

    render(
      <Tooltip>
        <Tooltip.Trigger>
          <span>Hover me</span>
        </Tooltip.Trigger>
        <Tooltip.Content>Mana guidance</Tooltip.Content>
      </Tooltip>,
    );

    fireEvent.mouseEnter(screen.getByRole('button', { name: 'Hover me' }));

    expect(screen.getByRole('tooltip')).toHaveTextContent('Mana guidance');
  });

  test('hides content on mouse leave', async () => {
    cleanup();

    render(
      <Tooltip>
        <Tooltip.Trigger>
          <span>Hover me</span>
        </Tooltip.Trigger>
        <Tooltip.Content>Mana guidance</Tooltip.Content>
      </Tooltip>,
    );

    const trigger = screen.getByRole('button', { name: 'Hover me' });

    fireEvent.mouseEnter(trigger);
    fireEvent.mouseLeave(trigger);

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  test('supports controlled open state through the root props', async () => {
    cleanup();

    let requestedOpenState: boolean | null = null;

    const ControlledTooltip = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <button onClick={() => setOpen(true)} type="button">
            Open externally
          </button>
          <button onClick={() => setOpen(false)} type="button">
            Close externally
          </button>
          <Tooltip
            onOpenChange={(nextOpen) => {
              requestedOpenState = nextOpen;
            }}
            open={open}
          >
            <Tooltip.Trigger>Hover me</Tooltip.Trigger>
            <Tooltip.Content>Mana guidance</Tooltip.Content>
          </Tooltip>
        </>
      );
    };

    render(<ControlledTooltip />);

    fireEvent.mouseEnter(screen.getByRole('button', { name: 'Hover me' }));

    expect(requestedOpenState).toBe(true);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open externally' }));

    expect(screen.getByRole('tooltip')).toHaveTextContent('Mana guidance');
    expect(screen.getByRole('button', { name: 'Hover me' })).toHaveAttribute(
      'data-state',
      'open',
    );

    fireEvent.click(screen.getByRole('button', { name: 'Close externally' }));

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});
