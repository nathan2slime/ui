import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { twMerge } from 'tailwind-merge'

import { AppChildren } from '~/types'

import './globals.css'

const base = localFont({ src: './fonts/ComicNeue.ttf' })

export const metadata: Metadata = {
  title: 'Korii UI'
}

const RootLayout = ({ children }: AppChildren) => {
  return (
    <html lang="en">
      <body className={twMerge('antialiased rose-pine-moon', base.className)}>{children}</body>
    </html>
  )
}

export default RootLayout
