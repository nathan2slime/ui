import { describe, expect, test } from '@rstest/core';
import { render, screen } from '@testing-library/react';

import { Card } from '@/components/card';

describe('Card', () => {
  test('renders arbitrary children content', async () => {
    render(
      <Card>
        <h3>Journey of Reflection</h3>
        <p>A deep dive into the hero party memories.</p>
      </Card>,
    );

    expect(screen.getByText('Journey of Reflection')).toBeInTheDocument();
    expect(
      screen.getByText('A deep dive into the hero party memories.'),
    ).toBeInTheDocument();
  });

  test('merges native div props and custom classes', async () => {
    render(
      <Card className="custom-card" data-testid="card" id="journey-card">
        Journey
      </Card>,
    );

    expect(screen.getByTestId('card')).toHaveAttribute('id', 'journey-card');
    expect(screen.getByTestId('card')).toHaveClass('custom-card');
  });

  test('supports nested layouts inside the surface', async () => {
    render(
      <Card>
        <div>
          <h4>Spellbook: Vol 12</h4>
          <p>A collection of folk magic spells.</p>
          <span>Rare archive</span>
        </div>
      </Card>,
    );

    expect(screen.getByText('Spellbook: Vol 12')).toBeInTheDocument();
    expect(screen.getByText('Rare archive')).toBeInTheDocument();
  });
});
