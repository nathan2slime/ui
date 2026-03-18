'use client';

import { createContext } from 'react';

import type { UiThemeContextValue } from '@/types/theme';

export const themeContext = createContext<UiThemeContextValue | null>(null);
