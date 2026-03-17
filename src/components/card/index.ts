'use client';

import { CardAction } from '@/components/card/card-action';
import { CardContent } from '@/components/card/card-content';
import { CardDescription } from '@/components/card/card-description';
import { CardFooter } from '@/components/card/card-footer';
import { CardHeader } from '@/components/card/card-header';
import { CardRoot } from '@/components/card/card-root';
import { CardTitle } from '@/components/card/card-title';

export const Card = Object.assign(CardRoot, {
  Action: CardAction,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle,
});
