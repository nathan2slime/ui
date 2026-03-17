import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { UiThemeProvider } from '@/theme';
import type {
  UiThemeColorTokens,
  UiThemeDefinition,
  UiThemeName,
} from '@/types/theme';

type ThemeProviderStoryArgs = {
  theme: UiThemeName;
};

const oceanTheme: UiThemeDefinition = {
  colors: {
    brandPrimary: '#0ea5e9',
    brandPrimaryActive: '#0369a1',
    brandPrimaryHover: '#0284c7',
    brandPrimaryStrong: '#075985',
    inputBackground: '#f0f9ff',
    inputBorder: '#7dd3fc',
    surfaceAccentStrong: '#075985',
    surfaceBase: '#f8fdff',
    surfaceSubtle: '#e0f2fe',
    textPrimary: '#0f2940',
  },
};

const violetOverrides: UiThemeColorTokens = {
  brandPrimary: '#7c3aed',
  brandPrimaryActive: '#6d28d9',
  brandPrimaryHover: '#7e22ce',
  brandPrimaryStrong: '#581c87',
  surfaceAccentStrong: '#581c87',
};

const ThemeShowcase = () => {
  return (
    <div style={{ width: '420px' }}>
      <Card>
        <Card.Content>
          <Card.Header>
            <Card.Title>Theme Preview</Card.Title>
            <Card.Action>Scoped</Card.Action>
          </Card.Header>
          <Card.Description>
            Components inside this card consume the active theme variables from
            the nearest provider.
          </Card.Description>
          <Card.Footer>
            <span>Preview surface</span>
            <Button>Inspect theme</Button>
          </Card.Footer>
        </Card.Content>
      </Card>
    </div>
  );
};

const meta = {
  title: 'Foundations/Theme Provider',
  component: UiThemeProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark', 'system', 'ocean'],
    },
  },
  args: {
    theme: 'light',
  },
  render: (args: ThemeProviderStoryArgs) => {
    return (
      <UiThemeProvider theme={args.theme} themes={{ ocean: oceanTheme }}>
        <ThemeShowcase />
      </UiThemeProvider>
    );
  },
} satisfies Meta<ThemeProviderStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
};

export const CustomTheme: Story = {
  args: {
    theme: 'ocean',
  },
};

export const TokenOverrides: Story = {
  render: () => {
    return (
      <UiThemeProvider tokens={violetOverrides}>
        <ThemeShowcase />
      </UiThemeProvider>
    );
  },
};
