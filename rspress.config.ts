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

const apiDocEntries = {
  Theme: './src/theme/index.ts',
  Button: './src/components/button/index.ts',
  Checkbox: './src/components/checkbox/index.ts',
  Input: './src/components/input/index.ts',
  Popover: './src/components/popover/index.ts',
  RadioGroup: './src/components/radio-group/index.ts',
  ScrollArea: './src/components/scroll-area/index.ts',
  Select: './src/components/select/index.ts',
  Switch: './src/components/switch/index.ts',
  Toast: './src/components/toast/index.ts',
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
  description:
    'Composable React components with accessible primitives, semantic tokens, and typed subpath exports.',
  icon: '/logo.svg',
  logo: '/logo.svg',
  logoText: '@nathan3boss/ui',
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
        '@nathan3boss/ui$': path.join(__dirname, 'src/index.tsx'),
        '@nathan3boss/ui': path.join(__dirname, 'src/components'),
      },
    },
  },
  plugins: [
    pluginDocsGlobalStyles(),
    pluginClientRedirects({}),
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
        './src/theme/index.ts',
        './src/components/button/index.ts',
        './src/components/checkbox/index.ts',
        './src/components/input/index.ts',
        './src/components/popover/index.ts',
        './src/components/radio-group/index.ts',
        './src/components/scroll-area/index.ts',
        './src/components/select/index.ts',
        './src/components/switch/index.ts',
        './src/components/toast/index.ts',
      ],
      outDir: 'api',
    }),
  ],
});
