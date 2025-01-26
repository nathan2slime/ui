import type { Metadata } from 'next'
import { Comic_Neue, Dancing_Script, Cute_Font } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import { AppChildren } from '~/types'

import '~/app/globals.css'

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-comic-neue'
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script'
})

const cuteFont = Cute_Font({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cute-font'
})

export const metadata: Metadata = {
  title: 'Korii UI'
}

const RootLayout = ({ children }: AppChildren) => {
  return (
    <html lang="en">
      <body className={twMerge('antialiased', cuteFont.variable, comicNeue.variable, dancingScript.variable)}>{children}</body>
    </html>
  )
}

export default RootLayout
