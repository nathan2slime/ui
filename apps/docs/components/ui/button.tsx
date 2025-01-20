'use client'

import { type HTMLMotionProps, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

type Props = HTMLMotionProps<'button'> & {}

const variant = tv({
  base: 'clip-base bg-tsu-love rounded-xl text-tsu-love-foreground font-semibold px-3 w-fit text-base h-10 py-2'
})

export const Button = ({ className, ...props }: Props) => {
  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
      className={twMerge(variant({ className }))}
    />
  )
}
