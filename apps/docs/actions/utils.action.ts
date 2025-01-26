'use server'

export const onGetRandomPalette = async (size: number) => {
  const palette = ['hsl(var(--rose))', 'hsl(var(--iris))', 'hsl(var(--pine))', 'hsl(var(--foam))', 'hsl(var(--gold))', 'hsl(var(--love))']

  return Array.from({ length: size }).map(() => {
    return palette[Math.floor(Math.random() * palette.length)]
  })
}
