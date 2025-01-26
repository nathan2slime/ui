import type { Config } from 'tailwindcss'

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      comicNeue: ['var(--font-comic-neue)', 'sans-serif'],
      dancingScript: ['var(--font-dancing-script)', 'cursive'],
      cuteFont: ['var(--font-cute-font)', 'sans-serif']
    },
    colors: {
      tsu: {
        base: 'hsl(var(--base))',
        'base-foreground': 'hsl(var(--base-foreground))',
        background: 'hsl(var(--background))',

        surface: 'hsl(var(--surface))',
        'surface-foreground': 'hsl(var(--surface-foreground))',

        overlay: 'hsl(var(--overlay))',
        'overlay-foreground': 'hsl(var(--overlay-foreground))',

        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        subtle: 'hsl(var(--subtle))',
        'subtle-foreground': 'hsl(var(--subtle-foreground))',

        text: 'hsl(var(--text))',
        'text-foreground': 'hsl(var(--text-foreground))',

        love: 'hsl(var(--love))',
        'love-foreground': 'hsl(var(--love-foreground))',

        gold: 'hsl(var(--gold))',
        'gold-foreground': 'hsl(var(--gold-foreground))',

        rose: 'hsl(var(--rose))',
        'rose-foreground': 'hsl(var(--rose-foreground))',

        pine: 'hsl(var(--pine))',
        'pine-foreground': 'hsl(var(--pine-foreground))',

        foam: 'hsl(var(--foam))',
        'foam-foreground': 'hsl(var(--foam-foreground))',

        iris: 'hsl(var(--iris))',
        'iris-foreground': 'hsl(var(--iris-foreground))',

        hlow: 'hsl(var(--highlight-low))',
        'hlow-foreground': 'hsl(var(--highlight-low-foreground))',

        hmed: 'hsl(var(--highlight-med))',
        'hmed-foreground': 'hsl(var(--highlight-med-foreground))',

        hhigh: 'hsl(var(--highlight-high))',
        'hhigh-foreground': 'hsl(var(--highlight-high-foreground))'
      }
    }
  },
  plugins: []
} satisfies Config
