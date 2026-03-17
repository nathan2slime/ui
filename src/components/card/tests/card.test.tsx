import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { Card } from '@/components/card';

describe('Card', () => {
  test('renders its title and description content', async () => {
    render(
      <Card>
        <Card.Content>
          <Card.Header>
            <Card.Title>Journey of Reflection</Card.Title>
          </Card.Header>
          <Card.Description>
            A deep dive into the hero party memories.
          </Card.Description>
        </Card.Content>
      </Card>,
    );

    expect(screen.getByText('Journey of Reflection')).toBeInTheDocument();
    expect(
      screen.getByText('A deep dive into the hero party memories.'),
    ).toBeInTheDocument();
  });

  test('renders header and action content', async () => {
    render(
      <Card>
        <Card.Content>
          <Card.Header>
            <Card.Title>Journey</Card.Title>
            <Card.Action>Recommended Log</Card.Action>
          </Card.Header>
        </Card.Content>
      </Card>,
    );

    expect(screen.getByText('Recommended Log')).toBeInTheDocument();
  });

  test('renders horizontal content layouts', async () => {
    render(
      <Card orientation="horizontal">
        <Card.Content>
          <Card.Header>
            <Card.Title as="h4">Spellbook: Vol 12</Card.Title>
          </Card.Header>
          <Card.Description>
            A collection of folk magic spells.
          </Card.Description>
          <Card.Footer>
            <span>Rare archive</span>
            <HugeiconsIcon
              aria-hidden="true"
              color="currentColor"
              icon={ArrowRight01Icon}
              size={18}
            />
          </Card.Footer>
        </Card.Content>
      </Card>,
    );

    expect(screen.getByText('Spellbook: Vol 12')).toBeInTheDocument();
    expect(screen.getByText('Rare archive')).toBeInTheDocument();
  });
});
