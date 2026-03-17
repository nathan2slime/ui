import {
  Alert02Icon,
  CheckmarkCircle02Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components/input';

const inputContentOptions = {
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
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    endAdornment: {
      table: {
        disable: true,
      },
    },
    endContent: {
      control: 'select',
      mapping: inputContentOptions,
      options: ['none', 'search', 'success', 'alert'],
    },
    helperText: {
      control: 'text',
    },
    helperColor: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    max: {
      control: {
        min: 0,
        step: 1,
        type: 'number',
      },
    },
    maxLength: {
      control: {
        min: 0,
        step: 1,
        type: 'number',
      },
    },
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    startAdornment: {
      table: {
        disable: true,
      },
    },
    startContent: {
      control: 'select',
      mapping: inputContentOptions,
      options: ['none', 'search', 'success', 'alert'],
    },
    color: {
      control: 'inline-radio',
      options: ['default', 'success', 'warning', 'danger'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'tel', 'url'],
    },
    value: {
      control: 'text',
    },
  },
  args: {
    endContent: undefined,
    helperText: 'Use a short and memorable artifact name.',
    helperColor: 'default',
    max: undefined,
    maxLength: undefined,
    placeholder: 'Enter spell name...',
    startContent: undefined,
    color: 'default',
    type: 'text',
    value: undefined,
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    max: 40,
    placeholder: 'Artifact tag...',
  },
};

export const WithWarningHelper: Story = {
  args: {
    helperText: 'Avoid forbidden rune names.',
    helperColor: 'warning',
    placeholder: 'Artifact tag...',
  },
};

export const WithMessageHelper: Story = {
  args: {
    helperText: 'This field supports up to 40 characters.',
    helperColor: 'success',
    max: 40,
    placeholder: 'Artifact tag...',
  },
};

export const WithStartContent: Story = {
  args: {
    'aria-label': 'Search grimoires',
    placeholder: 'Search Grimoires...',
    startContent: inputContentOptions.search,
  },
};

export const Success: Story = {
  args: {
    endContent: inputContentOptions.success,
    helperText: 'Ready to publish.',
    color: 'success',
    helperColor: 'success',
    value: 'Field of Flowers',
  },
};

export const ErrorState: Story = {
  args: {
    endContent: inputContentOptions.alert,
    helperText: 'This spell name is already reserved.',
    color: 'danger',
    helperColor: 'danger',
    value: 'High Mana Consumption',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Forbidden Ancient Curse',
  },
};
