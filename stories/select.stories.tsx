import {
  Alert02Icon,
  CheckmarkCircle02Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

import { Select } from '@/components/select';

const selectContentOptions = {
  none: undefined,
  search: <HugeiconsIcon color="currentColor" icon={Search01Icon} size={18} />,
  success: (
    <HugeiconsIcon
      color="currentColor"
      icon={CheckmarkCircle02Icon}
      size={18}
    />
  ),
  alert: <HugeiconsIcon color="currentColor" icon={Alert02Icon} size={18} />,
} as const;

type SelectStoryArgs = {
  color?: 'default' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  endContent?: ReactNode;
  helperText?: string;
  helperColor?: 'default' | 'success' | 'warning' | 'danger';
  label: string;
  size?: 'sm' | 'md' | 'lg';
  startContent?: ReactNode;
  value?: string;
};

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    endContent: {
      control: 'select',
      mapping: selectContentOptions,
      options: ['none', 'search', 'success', 'alert'],
    },
    helperText: {
      control: 'text',
    },
    helperColor: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    label: {
      control: 'text',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    startContent: {
      control: 'select',
      mapping: selectContentOptions,
      options: ['none', 'search', 'success', 'alert'],
    },
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    value: {
      control: 'select',
      options: ['support', 'offense', 'utility'],
    },
  },
  args: {
    color: 'default',
    disabled: false,
    endContent: undefined,
    helperText: 'Choose the spell school for this journey.',
    helperColor: 'default',
    label: 'Spell school',
    size: 'md',
    startContent: undefined,
    value: 'support',
  },
  render: (args: SelectStoryArgs) => {
    return (
      <div style={{ width: '320px' }}>
        <Select
          color={args.color}
          helperColor={args.helperColor}
          size={args.size}
        >
          <Select.Label>{args.label}</Select.Label>
          <Select.Control
            defaultValue={args.value}
            disabled={args.disabled}
            endContent={args.endContent}
            startContent={args.startContent}
          >
            <Select.Item value="support">Support</Select.Item>
            <Select.Item value="offense">Offense</Select.Item>
            <Select.Item value="utility">Utility</Select.Item>
          </Select.Control>
          {args.helperText ? (
            <Select.HelperText>{args.helperText}</Select.HelperText>
          ) : null}
        </Select>
      </div>
    );
  },
} satisfies Meta<SelectStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithStartContent: Story = {
  args: {
    startContent: selectContentOptions.search,
  },
};

export const Success: Story = {
  args: {
    endContent: selectContentOptions.success,
    helperText: 'Selection saved successfully.',
    color: 'success',
    helperColor: 'success',
    value: 'utility',
  },
};

export const ErrorState: Story = {
  args: {
    endContent: selectContentOptions.alert,
    helperText: 'Choose a valid school before continuing.',
    color: 'danger',
    helperColor: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
