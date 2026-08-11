import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: './src/index.tsx',
      button: './src/components/button/index.ts',
      checkbox: './src/components/checkbox/index.ts',
      input: './src/components/input/index.ts',
      popover: './src/components/popover/index.ts',
      'radio-group': './src/components/radio-group/index.ts',
      theme: './src/theme/index.ts',
      'scroll-area': './src/components/scroll-area/index.ts',
      select: './src/components/select/index.ts',
      switch: './src/components/switch/index.ts',
      tabs: './src/components/tabs/index.ts',
      toast: './src/components/toast/index.ts',
    },
    exclude: ['**/*.test.*', './stories/**', './docs/**'],
  },
  lib: [
    {
      bundle: true,
      dts: {
        bundle: true,
        distPath: 'dist',
      },
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [pluginReact()],
});
