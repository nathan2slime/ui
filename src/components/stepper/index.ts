'use client';

import { StepperDescription } from '@/components/stepper/stepper-description';
import { StepperIndicator } from '@/components/stepper/stepper-indicator';
import { StepperItem } from '@/components/stepper/stepper-item';
import { StepperList } from '@/components/stepper/stepper-list';
import { StepperRoot } from '@/components/stepper/stepper-root';
import { StepperSeparator } from '@/components/stepper/stepper-separator';
import { StepperTitle } from '@/components/stepper/stepper-title';

export const Stepper = Object.assign(StepperRoot, {
  Description: StepperDescription,
  Indicator: StepperIndicator,
  Item: StepperItem,
  List: StepperList,
  Root: StepperRoot,
  Separator: StepperSeparator,
  Title: StepperTitle,
});
