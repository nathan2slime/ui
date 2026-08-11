import type { Decorator, Preview } from '@storybook/react';
import { createElement, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme';
import { GlobalStyles } from '@/theme/global-styles';

const withGlobalStyles: Decorator = (Story) =>
  createElement(
    ThemeProvider,
    { theme },
    createElement(
      Fragment,
      null,
      createElement(GlobalStyles),
      createElement(Story),
    ),
  );

const preview: Preview = {
  decorators: [withGlobalStyles],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
