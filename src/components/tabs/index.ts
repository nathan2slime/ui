'use client';

import { TabsContent } from '@/components/tabs/tabs-content';
import { TabsList } from '@/components/tabs/tabs-list';
import { TabsRoot } from '@/components/tabs/tabs-root';
import { TabsTrigger } from '@/components/tabs/tabs-trigger';

export const Tabs = Object.assign(TabsRoot, {
  Content: TabsContent,
  List: TabsList,
  Trigger: TabsTrigger,
});
