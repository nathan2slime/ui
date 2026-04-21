import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '@/components/button';
import { Stepper } from '@/components/stepper';

type StepperStoryArgs = {
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md';
  variant?: 'compact' | 'default';
};

const checkoutSteps = [
  {
    description: 'Create your login credentials.',
    title: 'Account',
    value: 'account',
  },
  {
    description: 'Confirm your delivery address.',
    title: 'Shipping',
    value: 'shipping',
  },
  {
    description: 'Choose your payment method.',
    title: 'Payment',
    value: 'payment',
  },
  {
    description: 'Review and place the order.',
    title: 'Review',
    value: 'review',
  },
] as const;

const meta = {
  title: 'Components/Stepper',
  component: Stepper.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
    },
    variant: {
      control: 'inline-radio',
      options: ['default', 'compact'],
    },
  },
  args: {
    orientation: 'horizontal',
    size: 'md',
    variant: 'default',
  },
  render: (args: StepperStoryArgs) => {
    return (
      <div
        style={{ width: args.orientation === 'vertical' ? '360px' : '880px' }}
      >
        <Stepper.Root
          ariaLabel="Checkout progress"
          defaultValue="shipping"
          orientation={args.orientation}
          size={args.size}
          variant={args.variant}
        >
          <Stepper.List>
            {checkoutSteps.map((step, index) => {
              return (
                <Stepper.Item key={step.value} value={step.value}>
                  <Stepper.Indicator />
                  <Stepper.Title>{step.title}</Stepper.Title>
                  <Stepper.Description>{step.description}</Stepper.Description>
                  {index < checkoutSteps.length - 1 ? (
                    <Stepper.Separator />
                  ) : null}
                </Stepper.Item>
              );
            })}
          </Stepper.List>
        </Stepper.Root>
      </div>
    );
  },
} satisfies Meta<StepperStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    variant: 'compact',
  },
};

export const States: Story = {
  render: () => {
    return (
      <div style={{ width: '880px' }}>
        <Stepper.Root
          ariaLabel="Registration progress"
          defaultValue="verification"
        >
          <Stepper.List>
            <Stepper.Item value="profile">
              <Stepper.Indicator />
              <Stepper.Title>Profile</Stepper.Title>
              <Stepper.Description>
                Basic account details completed.
              </Stepper.Description>
              <Stepper.Separator />
            </Stepper.Item>
            <Stepper.Item value="verification" status="error">
              <Stepper.Indicator />
              <Stepper.Title>Verification</Stepper.Title>
              <Stepper.Description>
                We still need a valid confirmation code.
              </Stepper.Description>
              <Stepper.Separator />
            </Stepper.Item>
            <Stepper.Item disabled value="delivery">
              <Stepper.Indicator />
              <Stepper.Title>Delivery</Stepper.Title>
              <Stepper.Description>
                Unlocks after verification succeeds.
              </Stepper.Description>
              <Stepper.Separator />
            </Stepper.Item>
            <Stepper.Item value="review">
              <Stepper.Indicator />
              <Stepper.Title>Review</Stepper.Title>
              <Stepper.Description>
                Final confirmation before submission.
              </Stepper.Description>
            </Stepper.Item>
          </Stepper.List>
        </Stepper.Root>
      </div>
    );
  },
};

export const CheckoutFlow: Story = {
  render: () => {
    const [value, setValue] =
      useState<(typeof checkoutSteps)[number]['value']>('shipping');
    const currentIndex = checkoutSteps.findIndex(
      (step) => step.value === value,
    );
    const handleValueChange = (nextValue: string) => {
      const nextStep = checkoutSteps.find(
        (step) => step.value === nextValue,
      )?.value;

      if (nextStep) {
        setValue(nextStep);
      }
    };

    const handleBack = () => {
      const nextIndex = Math.max(currentIndex - 1, 0);

      setValue(checkoutSteps[nextIndex]?.value ?? 'account');
    };

    const handleNext = () => {
      const nextIndex = Math.min(currentIndex + 1, checkoutSteps.length - 1);

      setValue(checkoutSteps[nextIndex]?.value ?? 'review');
    };

    return (
      <div style={{ display: 'grid', gap: '1rem', width: '880px' }}>
        <Stepper.Root
          ariaLabel="Checkout progress"
          onValueChange={handleValueChange}
          value={value}
        >
          <Stepper.List>
            {checkoutSteps.map((step, index) => {
              return (
                <Stepper.Item key={step.value} value={step.value}>
                  <Stepper.Indicator />
                  <Stepper.Title>{step.title}</Stepper.Title>
                  <Stepper.Description>{step.description}</Stepper.Description>
                  {index < checkoutSteps.length - 1 ? (
                    <Stepper.Separator />
                  ) : null}
                </Stepper.Item>
              );
            })}
          </Stepper.List>
        </Stepper.Root>

        <div
          style={{
            border: '1px solid rgba(192, 202, 214, 0.32)',
            borderRadius: '16px',
            display: 'grid',
            gap: '0.75rem',
            padding: '1rem',
          }}
        >
          <div style={{ fontWeight: 600 }}>
            Current section: {checkoutSteps[currentIndex]?.title}
          </div>
          <div>{checkoutSteps[currentIndex]?.description}</div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <Button
              disabled={currentIndex === 0}
              onClick={handleBack}
              variant="outline"
            >
              Back
            </Button>
            <Button
              disabled={currentIndex === checkoutSteps.length - 1}
              onClick={handleNext}
            >
              Next step
            </Button>
          </div>
        </div>
      </div>
    );
  },
};
