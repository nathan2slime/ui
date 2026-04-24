import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react';
import { css, cx } from 'styled-system/css';

import { Card } from '@/components/card';

type CardStoryArgs = {
  badge?: string;
  description: string;
  interactive?: boolean;
  title: string;
  tone?: 'default' | 'accent';
};

const cardStackClassName = css({
  display: 'grid',
  gap: '1rem',
});

const cardHeaderRowClassName = css({
  alignItems: 'center',
  display: 'flex',
  gap: '0.75rem',
  justifyContent: 'space-between',
});

const cardTitleClassName = css({
  fontFamily: 'sansDisplay',
  fontSize: '1.5rem',
  fontWeight: '700',
  letterSpacing: '-0.02em',
  lineHeight: '1.2',
  margin: '0',
});

const cardDescriptionClassName = css({
  color: 'cardMutedForeground',
  fontFamily: 'sansDisplay',
  fontSize: 'uiMd',
  lineHeight: '1.65',
  margin: '0',
});

const cardAccentDescriptionClassName = css({
  color: 'foregroundOnAccentMuted',
  fontFamily: 'sansDisplay',
  fontSize: 'uiMd',
  lineHeight: '1.65',
  margin: '0',
});

const cardFooterClassName = css({
  alignItems: 'center',
  borderTopWidth: '1px',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'space-between',
  paddingTop: '1.25rem',
});

const defaultFooterClassName = css({
  borderColor: 'cardSubtleBorder',
});

const accentFooterClassName = css({
  borderColor: 'borderAccentSubtle',
});

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    badge: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    interactive: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    tone: {
      control: 'inline-radio',
      options: ['default', 'accent'],
    },
  },
  args: {
    badge: 'Recommended Log',
    description:
      'A deep dive into the 10-year journey of the hero party and the weight of memory across time.',
    interactive: true,
    title: 'Journey of Reflection',
    tone: 'default',
  },
  render: (args: CardStoryArgs) => {
    return (
      <div style={{ width: '420px' }}>
        <Card interactive={args.interactive} tone={args.tone}>
          <div className={cardStackClassName}>
            <div className={cardHeaderRowClassName}>
              <h3 className={cardTitleClassName}>{args.title}</h3>
              {args.badge ? <span>{args.badge}</span> : null}
            </div>
            <p
              className={
                args.tone === 'accent'
                  ? cardAccentDescriptionClassName
                  : cardDescriptionClassName
              }
            >
              {args.description}
            </p>
            <div
              className={cx(
                cardFooterClassName,
                args.tone === 'accent'
                  ? accentFooterClassName
                  : defaultFooterClassName,
              )}
            >
              <div
                style={{
                  alignItems: 'center',
                  display: 'flex',
                  gap: '0.75rem',
                }}
              >
                <HugeiconsIcon
                  color="currentColor"
                  icon={CheckmarkCircle02Icon}
                  size={18}
                />
                <span>Historical Record</span>
              </div>
              <HugeiconsIcon
                aria-hidden="true"
                color="currentColor"
                icon={ArrowRight01Icon}
                size={18}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  },
} satisfies Meta<CardStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
