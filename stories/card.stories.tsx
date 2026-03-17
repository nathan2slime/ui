import {
  ArrowRight01Icon,
  CheckmarkCircle02Icon,
  Search01Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/button';
import { Card } from '@/components/card';

type CardStoryArgs = {
  badge?: string;
  description: string;
  interactive?: boolean;
  orientation?: 'vertical' | 'horizontal';
  title: string;
  tone?: 'default' | 'accent';
};

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
    orientation: {
      control: 'inline-radio',
      options: ['vertical', 'horizontal'],
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
    orientation: 'vertical',
    title: 'Journey of Reflection',
    tone: 'default',
  },
  render: (args: CardStoryArgs) => {
    if (args.tone === 'accent') {
      return (
        <div style={{ width: '420px' }}>
          <Card interactive={args.interactive} tone={args.tone}>
            <Card.Content>
              <Card.Header>
                <Card.Title>{args.title}</Card.Title>
                {args.badge ? <Card.Action>{args.badge}</Card.Action> : null}
              </Card.Header>
              <Card.Description>{args.description}</Card.Description>
              <Card.Footer>
                <span>Seasonal update</span>
                <Button color="default" variant="outline">
                  Join Log
                </Button>
              </Card.Footer>
            </Card.Content>
          </Card>
        </div>
      );
    }

    return (
      <div
        style={{ width: args.orientation === 'horizontal' ? '560px' : '420px' }}
      >
        <Card
          interactive={args.interactive}
          orientation={args.orientation}
          tone={args.tone}
        >
          <div
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZBEmHbAo24pFeADgmEaZNAKOj5rWGYO3BVBPBio2NqDHoyNK0NmNltzvozmQMPyHoKJAk4NiElrAskrvlOh-RU_hO7Y4bzBFWAth9c_cUAt4Xrf9edPkffOvYMJmv7RTmxxbxfDUGG2WT185d08XEM025Vzs5GoPFVSsBLGVyDQM37yyPZjXiTgiO7ePyCUfxVKeMILosOM2xtoxFOodGcwMRjRtbeTTXWb98npT0b2Ugkx6bSQS9RpnlQdy8ZMPh7UsY0OF0LA')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              minHeight: args.orientation === 'horizontal' ? '100%' : '260px',
              minWidth: args.orientation === 'horizontal' ? '180px' : '100%',
            }}
          />
          <Card.Content>
            <Card.Header>
              <Card.Title>{args.title}</Card.Title>
              {args.badge ? <Card.Action>{args.badge}</Card.Action> : null}
            </Card.Header>
            <Card.Description>{args.description}</Card.Description>
            <Card.Footer>
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
            </Card.Footer>
          </Card.Content>
        </Card>
      </div>
    );
  },
} satisfies Meta<CardStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    badge: 'Rare',
    description:
      'A collection of minor folk magic spells from the Central Lands.',
    orientation: 'horizontal',
    title: 'Spellbook: Vol 12',
  },
};

export const Accent: Story = {
  args: {
    badge: 'Seasonal Update',
    description:
      '"It is a place where one can speak with the spirits of the dead."',
    title: 'The Aureole Expedition',
    tone: 'accent',
  },
};

export const WithVisualCue: Story = {
  render: () => {
    return (
      <div style={{ width: '560px' }}>
        <Card interactive orientation="horizontal">
          <div
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZBEmHbAo24pFeADgmEaZNAKOj5rWGYO3BVBPBio2NqDHoyNK0NmNltzvozmQMPyHoKJAk4NiElrAskrvlOh-RU_hO7Y4bzBFWAth9c_cUAt4Xrf9edPkffOvYMJmv7RTmxxbxfDUGG2WT185d08XEM025Vzs5GoPFVSsBLGVyDQM37yyPZjXiTgiO7ePyCUfxVKeMILosOM2xtoxFOodGcwMRjRtbeTTXWb98npT0b2Ugkx6bSQS9RpnlQdy8ZMPh7UsY0OF0LA')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              minHeight: '100%',
              minWidth: '180px',
            }}
          />
          <Card.Content>
            <Card.Header
              style={{ alignItems: 'center', display: 'flex', gap: '0.75rem' }}
            >
              <HugeiconsIcon
                color="currentColor"
                icon={Search01Icon}
                size={18}
              />
              <Card.Title as="h4">Herbology Masterclass</Card.Title>
            </Card.Header>
            <Card.Description>
              Learn to identify magical plants used for healing potions and
              simple enchantment spells.
            </Card.Description>
            <Card.Footer>
              <span>Magic Specialist Track</span>
              <Button size="sm">View Modules</Button>
            </Card.Footer>
          </Card.Content>
        </Card>
      </div>
    );
  },
};
