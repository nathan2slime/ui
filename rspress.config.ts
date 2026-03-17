import * as path from 'node:path';
import { defineConfig, type RspressPlugin } from '@rspress/core';
import { pluginApiDocgen } from '@rspress/plugin-api-docgen';
import { pluginClientRedirects } from '@rspress/plugin-client-redirects';
import { pluginLlms } from '@rspress/plugin-llms';
import { pluginPlayground } from '@rspress/plugin-playground';
import { pluginPreview } from '@rspress/plugin-preview';
import { pluginRss } from '@rspress/plugin-rss';
import { pluginSitemap } from '@rspress/plugin-sitemap';
import { pluginTwoslash } from '@rspress/plugin-twoslash';
import { pluginTypeDoc } from '@rspress/plugin-typedoc';

const pluginDocsGlobalStyles = (): RspressPlugin => ({
  name: 'docs-global-styles',
  globalStyles: path.join(__dirname, 'docs/globals.css'),
});

const DOCS_SITE_URL = String(process.env.DOCS_SITE_URL);
const redirectRules = [
  {
    from: ['/text-field', '/components/text-field'],
    to: '/input',
  },
  {
    from: ['/dropdown', '/components/dropdown'],
    to: '/select',
  },
  {
    from: '^/helper$',
    to: '/helper-text',
  },
];

const apiDocEntries = {
  Badge: './src/components/badge/badge.tsx',
  Button: './src/components/button/button.tsx',
  Card: './src/components/card/index.ts',
  HelperText: './src/components/helper-text/helper-text.tsx',
  Input: './src/components/input/input.tsx',
  Label: './src/components/label/label.tsx',
  Radio: './src/components/radio/radio.tsx',
  Select: './src/components/select/index.ts',
  Spinner: './src/components/spinner/spinner.tsx',
  Switch: './src/components/switch/switch.tsx',
  Tabs: './src/components/tabs/index.ts',
  Textarea: './src/components/textarea/textarea.tsx',
  Tooltip: './src/components/tooltip/index.ts',
  Typography: './src/components/typography/typography.tsx',
};

const apiDocTsconfigMap = Object.keys(apiDocEntries).reduce<
  Record<string, string>
>((accumulator, moduleName) => {
  accumulator[moduleName] = path.join(__dirname, 'tsconfig.json');
  return accumulator;
}, {});

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '@nathan3boss/ui',
  lang: 'en',
  themeConfig: {
    darkMode: false,
    llmsUI: true,
    lastUpdated: true,
    enableAppearanceAnimation: true,
    socialLinks: [
      {
        icon: 'github',
        content: 'https://github.com/nathan2slime/ui',
        mode: 'link',
      },
    ],
  },
  builderConfig: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@docs': path.join(__dirname, 'docs'),
        '@docs-support': path.join(__dirname, 'docs-support'),
        '@nathan3boss/ui/theme': path.join(__dirname, 'src/theme'),
        '@nathan3boss/ui': path.join(__dirname, 'src/components'),
      },
    },
  },
  plugins: [
    pluginDocsGlobalStyles(),
    pluginClientRedirects({
      redirects: redirectRules,
    }),
    pluginLlms({
      llmsTxt: { name: 'llms.txt' },
      llmsFullTxt: { name: 'llms-full.txt' },
      mdFiles: { mdxToMd: true },
      exclude: ({ page }) => page.routePath?.startsWith('/api') ?? false,
    }),
    pluginApiDocgen({
      entries: apiDocEntries,
      apiParseTool: 'react-docgen-typescript',
      parseToolOptions: {
        'react-docgen-typescript': {
          tsconfigPath: apiDocTsconfigMap,
        },
      },
    }),
    pluginPlayground({
      defaultDirection: 'horizontal',
      editorPosition: 'right',
    }),
    pluginPreview(),
    pluginRss({
      siteUrl: DOCS_SITE_URL,
      feed: {
        id: 'components',
        title: '@nathan3boss/ui components',
        description: 'Latest @nathan3boss/ui component documentation updates',
        language: 'en',
        test: /^\/(?!api).*/,
      },
      output: {
        dir: 'feeds',
        type: 'rss',
      },
    }),
    pluginSitemap({
      siteUrl: DOCS_SITE_URL,
      defaultPriority: '0.7',
      defaultChangeFreq: 'weekly',
      customMaps: {
        '/': {
          loc: `${DOCS_SITE_URL}/`,
          changefreq: 'daily',
          priority: '1.0',
        },
      },
    }),
    pluginTwoslash({
      twoslashOptions: {
        compilerOptions: {
          strict: true,
        },
      },
    }),
    pluginTypeDoc({
      entryPoints: [
        './src/components/badge/index.ts',
        './src/components/button/index.ts',
        './src/components/card/index.ts',
        './src/components/helper-text/index.ts',
        './src/components/input/index.ts',
        './src/components/label/index.ts',
        './src/components/radio/index.ts',
        './src/components/select/index.ts',
        './src/components/spinner/index.ts',
        './src/components/switch/index.ts',
        './src/components/tabs/index.ts',
        './src/components/textarea/index.ts',
        './src/components/tooltip/index.ts',
        './src/components/typography/index.ts',
        './src/theme/index.ts',
      ],
      outDir: 'api',
    }),
  ],
});
