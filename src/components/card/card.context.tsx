import { createContext, useContext } from 'react';

import type { CardOrientation, CardTone } from '@/types/card';

export type CardContextValue = {
  interactive: boolean;
  orientation: CardOrientation;
  tone: CardTone;
};

export const CardContext = createContext<CardContextValue | null>(null);

/**
 * Returns the shared card context used by compound parts.
 *
 * @returns The active card context value.
 */
export const useCardContext = (): CardContextValue => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('Card compound parts must be rendered within Card.');
  }

  return context;
};
