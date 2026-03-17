'use client';

import { TooltipContent } from '@/components/tooltip/tooltip-content';
import { TooltipRoot } from '@/components/tooltip/tooltip-root';
import { TooltipTrigger } from '@/components/tooltip/tooltip-trigger';

export const Tooltip = Object.assign(TooltipRoot, {
  Content: TooltipContent,
  Trigger: TooltipTrigger,
});
