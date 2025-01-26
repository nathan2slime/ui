'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Planet, KawaiiProps } from 'react-kawaii'

import { Button } from '~/components/ui/button'

export const Home = () => {
  const [mood, setMood] = useState<KawaiiProps['mood']>('happy')
  return (
    <main className="mx-auto flex flex-col justify-center items-center px-4">
      <Planet size={220} mood={mood} className="rotate-45 translate-y-5" color="hsl(var(--iris) / 0.3)" />
      <h2 className="text-4xl text-tsu-iris font-black mb-2">Welcome to Korii</h2>
      <p className="text-base text-tsu-text mb-8">The cutest Kawaii component library for React</p>

      <Link href="/components">
        <Button size="lg" onMouseLeave={() => setMood('sad')} onMouseEnter={() => setMood('lovestruck')} variant="default" className="font-semibold">
          Get Started
        </Button>
      </Link>
    </main>
  )
}
