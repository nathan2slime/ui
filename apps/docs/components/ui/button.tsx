'use client'

import { type HTMLMotionProps, motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { VariantProps, tv } from 'tailwind-variants'

const style = tv({
  base: 'clip-base rounded-xl flex justify-center items-center gap-1 duration-300 transition-colors w-fit text-sm',
  variants: {
    variant: {
      default: 'bg-tsu-iris text-tsu-iris-foreground hover:bg-tsu-iris/90',
      destructive: 'bg-tsu-love text-destructive-foreground hover:bg-tsu-love/90',
      outline: 'border border-tsu-muted/50 bg-transparent text-tsu-text',
      secondary: 'bg-tsu-pine text-tsu-pine-foreground hover:bg-tsu-pine/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline'
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 px-3 text-xs',
      lg: 'h-10 px-8',
      icon: 'h-9 w-9'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
})

type Props = HTMLMotionProps<'button'> & VariantProps<typeof style>

export const Button = ({ className, size, variant, ...props }: Props) => {
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
      className={twMerge(style({ className, variant, size }))}
    />
  )
}
