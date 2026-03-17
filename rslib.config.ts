import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/index.tsx'],
      theme: ['./src/theme/index.ts'],
      badge: ['./src/components/badge/index.ts'],
      button: ['./src/components/button/index.ts'],
      card: ['./src/components/card/index.ts'],
      'helper-text': ['./src/components/helper-text/index.ts'],
      input: ['./src/components/input/index.ts'],
      label: ['./src/components/label/index.ts'],
      radio: ['./src/components/radio/index.ts'],
      select: ['./src/components/select/index.ts'],
      spinner: ['./src/components/spinner/index.ts'],
      switch: ['./src/components/switch/index.ts'],
      tabs: ['./src/components/tabs/index.ts'],
      textarea: ['./src/components/textarea/index.ts'],
      tooltip: ['./src/components/tooltip/index.ts'],
      typography: ['./src/components/typography/index.ts'],
    },
    exclude: ['**/*.test.*', './stories/**', './docs/**'],
  },
  lib: [
    {
      bundle: true,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [pluginReact()],
});
