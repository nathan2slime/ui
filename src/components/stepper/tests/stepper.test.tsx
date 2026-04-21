import { describe, expect, test } from '@rstest/core';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Stepper } from '@/components/stepper';

describe('Stepper', () => {
  test('renders compound parts and marks previous steps as completed', async () => {
    cleanup();

    render(
      <Stepper.Root defaultValue="shipping">
        <Stepper.List>
          <Stepper.Item value="account">
            <Stepper.Indicator />
            <Stepper.Title>Account</Stepper.Title>
            <Stepper.Description>Create login credentials.</Stepper.Description>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="shipping">
            <Stepper.Indicator />
            <Stepper.Title>Shipping</Stepper.Title>
            <Stepper.Description>
              Add your delivery address.
            </Stepper.Description>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="payment">
            <Stepper.Indicator />
            <Stepper.Title>Payment</Stepper.Title>
            <Stepper.Description>
              Choose how you want to pay.
            </Stepper.Description>
          </Stepper.Item>
        </Stepper.List>
      </Stepper.Root>,
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByRole('button', { name: /Shipping/i })).toHaveAttribute(
      'aria-current',
      'step',
    );
    expect(screen.getByRole('button', { name: /Account/i })).toHaveAttribute(
      'data-state',
      'completed',
    );
  });

  test('switches the current step when used uncontrolled', async () => {
    cleanup();

    render(
      <Stepper.Root defaultValue="account">
        <Stepper.List>
          <Stepper.Item value="account">
            <Stepper.Indicator />
            <Stepper.Title>Account</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="shipping">
            <Stepper.Indicator />
            <Stepper.Title>Shipping</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="payment">
            <Stepper.Indicator />
            <Stepper.Title>Payment</Stepper.Title>
          </Stepper.Item>
        </Stepper.List>
      </Stepper.Root>,
    );

    fireEvent.click(screen.getByRole('button', { name: /Payment/i }));

    expect(screen.getByRole('button', { name: /Payment/i })).toHaveAttribute(
      'aria-current',
      'step',
    );
    expect(screen.getByRole('button', { name: /Shipping/i })).toHaveAttribute(
      'data-state',
      'completed',
    );
  });

  test('respects controlled value while still notifying value changes', async () => {
    cleanup();

    let requestedValue = '';

    render(
      <Stepper.Root
        onValueChange={(nextValue) => {
          requestedValue = nextValue;
        }}
        value="shipping"
      >
        <Stepper.List>
          <Stepper.Item value="account">
            <Stepper.Indicator />
            <Stepper.Title>Account</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="shipping">
            <Stepper.Indicator />
            <Stepper.Title>Shipping</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="payment">
            <Stepper.Indicator />
            <Stepper.Title>Payment</Stepper.Title>
          </Stepper.Item>
        </Stepper.List>
      </Stepper.Root>,
    );

    fireEvent.click(screen.getByRole('button', { name: /Payment/i }));

    expect(requestedValue).toBe('payment');
    expect(screen.getByRole('button', { name: /Shipping/i })).toHaveAttribute(
      'aria-current',
      'step',
    );
  });

  test('falls back to the first enabled step when the current value is invalid', async () => {
    cleanup();

    render(
      <Stepper.Root value="missing-step">
        <Stepper.List>
          <Stepper.Item disabled value="account">
            <Stepper.Indicator />
            <Stepper.Title>Account</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="shipping">
            <Stepper.Indicator />
            <Stepper.Title>Shipping</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="payment">
            <Stepper.Indicator />
            <Stepper.Title>Payment</Stepper.Title>
          </Stepper.Item>
        </Stepper.List>
      </Stepper.Root>,
    );

    expect(screen.getByRole('button', { name: /Shipping/i })).toHaveAttribute(
      'aria-current',
      'step',
    );
    expect(screen.getByRole('button', { name: /Shipping/i })).toHaveAttribute(
      'tabindex',
      '0',
    );
    expect(screen.getByRole('button', { name: /Payment/i })).toHaveAttribute(
      'tabindex',
      '-1',
    );
  });

  test('supports horizontal keyboard navigation and skips disabled items', async () => {
    cleanup();

    render(
      <Stepper.Root defaultValue="account">
        <Stepper.List>
          <Stepper.Item value="account">
            <Stepper.Indicator />
            <Stepper.Title>Account</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item disabled value="shipping">
            <Stepper.Indicator />
            <Stepper.Title>Shipping</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="payment">
            <Stepper.Indicator />
            <Stepper.Title>Payment</Stepper.Title>
          </Stepper.Item>
        </Stepper.List>
      </Stepper.Root>,
    );

    const accountButton = screen.getByRole('button', { name: /Account/i });

    accountButton.focus();
    fireEvent.keyDown(accountButton, { key: 'ArrowRight' });

    expect(screen.getByRole('button', { name: /Payment/i })).toHaveFocus();
    expect(screen.getByRole('button', { name: /Payment/i })).toHaveAttribute(
      'aria-current',
      'step',
    );

    fireEvent.keyDown(screen.getByRole('button', { name: /Payment/i }), {
      key: 'Home',
    });

    expect(screen.getByRole('button', { name: /Account/i })).toHaveFocus();
  });

  test('supports vertical keyboard navigation', async () => {
    cleanup();

    render(
      <Stepper.Root defaultValue="account" orientation="vertical">
        <Stepper.List>
          <Stepper.Item value="account">
            <Stepper.Indicator />
            <Stepper.Title>Account</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="shipping">
            <Stepper.Indicator />
            <Stepper.Title>Shipping</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item value="payment">
            <Stepper.Indicator />
            <Stepper.Title>Payment</Stepper.Title>
          </Stepper.Item>
        </Stepper.List>
      </Stepper.Root>,
    );

    const accountButton = screen.getByRole('button', { name: /Account/i });

    accountButton.focus();
    fireEvent.keyDown(accountButton, { key: 'ArrowDown' });

    expect(screen.getByRole('button', { name: /Shipping/i })).toHaveFocus();
    expect(screen.getByRole('button', { name: /Shipping/i })).toHaveAttribute(
      'aria-current',
      'step',
    );
  });

  test('announces error and disabled states with accessible attributes', async () => {
    cleanup();

    render(
      <Stepper.Root defaultValue="payment">
        <Stepper.List>
          <Stepper.Item value="account">
            <Stepper.Indicator />
            <Stepper.Title>Account</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item disabled value="shipping">
            <Stepper.Indicator />
            <Stepper.Title>Shipping</Stepper.Title>
            <Stepper.Separator />
          </Stepper.Item>
          <Stepper.Item status="error" value="payment">
            <Stepper.Indicator />
            <Stepper.Title>Payment</Stepper.Title>
          </Stepper.Item>
        </Stepper.List>
      </Stepper.Root>,
    );

    expect(screen.getByRole('button', { name: /Shipping/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /Shipping/i })).toHaveAttribute(
      'aria-disabled',
      'true',
    );
    expect(screen.getByRole('button', { name: /Payment/i })).toHaveAttribute(
      'data-state',
      'error',
    );
    expect(
      screen.getByText('Step 3 of 3. Current step. Error state.'),
    ).toBeInTheDocument();
  });
});
