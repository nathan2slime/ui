import { HTMLAttributes, Ref } from 'react'
import { twMerge } from 'tailwind-merge'

type CardProps = {
  ref?: Ref<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

const Card = ({ className, ref, ...props }: CardProps) => (
  <div ref={ref} className={twMerge('rounded-xl bg-tsu-base text-tsu-base-foreground border border-tsu-muted/50', className)} {...props} />
)

Card.displayName = 'Card'

type CardHeaderProps = {
  ref?: Ref<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

const CardHeader = ({ className, ref, ...props }: CardHeaderProps) => <div ref={ref} className={twMerge('flex flex-col space-y-1.5 p-6', className)} {...props} />
CardHeader.displayName = 'CardHeader'

type CardTitleProps = {
  ref?: Ref<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

const CardTitle = ({ className, ref, ...props }: CardTitleProps) => <div ref={ref} className={twMerge('font-semibold leading-none tracking-tight', className)} {...props} />

CardTitle.displayName = 'CardTitle'

type CardDescriptionProps = {
  ref?: Ref<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

const CardDescription = ({ className, ref, ...props }: CardDescriptionProps) => <div ref={ref} className={twMerge('text-sm text-tsu-muted-foreground', className)} {...props} />
CardDescription.displayName = 'CardDescription'

type CardContentProps = {
  ref?: Ref<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

const CardContent = ({ className, ref, ...props }: CardContentProps) => <div ref={ref} className={twMerge('p-6 pt-0', className)} {...props} />
CardContent.displayName = 'CardContent'

type CardFooterProps = {
  ref?: Ref<HTMLDivElement>
} & HTMLAttributes<HTMLDivElement>

const CardFooter = ({ className, ref, ...props }: CardFooterProps) => <div ref={ref} className={twMerge('flex items-center p-6 pt-0', className)} {...props} />
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
