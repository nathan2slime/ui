import {
  Alert02Icon,
  CheckmarkCircle02Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@/components/textarea';

const textareaContentOptions = {
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

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
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
      mapping: textareaContentOptions,
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
    max: {
      control: {
        min: 0,
        step: 1,
        type: 'number',
      },
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: {
        min: 2,
        step: 1,
        type: 'number',
      },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    startContent: {
      control: 'select',
      mapping: textareaContentOptions,
      options: ['none', 'search', 'success', 'alert'],
    },
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    value: {
      control: 'text',
    },
  },
  args: {
    endContent: undefined,
    helperText: 'Record your observations of the passage of time.',
    helperColor: 'default',
    label: 'Magic Journal',
    max: undefined,
    placeholder: 'Write your notes here...',
    rows: 4,
    startContent: undefined,
    color: 'default',
    value: undefined,
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCount: Story = {
  args: {
    helperText: 'Keep this note concise.',
    helperColor: 'success',
    max: 120,
  },
};

export const Success: Story = {
  args: {
    endContent: textareaContentOptions.success,
    helperText: 'Journal entry saved successfully.',
    color: 'success',
    helperColor: 'success',
    value: 'Frieren watched the stars in silence.',
  },
};

export const ErrorState: Story = {
  args: {
    endContent: textareaContentOptions.alert,
    helperText: 'A longer description is required.',
    color: 'danger',
    helperColor: 'danger',
  },
};

export const WithStartContent: Story = {
  args: {
    startContent: textareaContentOptions.search,
  },
};
