import { createElement } from 'react';
import { cx } from 'styled-system/css';

import { typographyStyles } from '@/components/typography/typography.styles';
import type { TypographyElement, TypographyProps } from '@/types/typography';

const defaultElementByVariant: Record<
  NonNullable<TypographyProps['variant']>,
  TypographyElement
> = {
  body: 'p',
  caption: 'span',
  display: 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'heading-5': 'h5',
  'heading-6': 'h6',
  small: 'p',
};

/**
 * Renders typographic content using semantic tags and design-system variants.
 *
 * @example
 * ```tsx
 * <Typography variant="display">The Journey Endures</Typography>
 * ```
 */
export const Typography = ({
  as,
  children,
  className,
  variant = 'body',
  ...props
}: TypographyProps) => {
  const element = as ?? defaultElementByVariant[variant];

  return createElement(
    element,
    {
      ...props,
      className: cx(typographyStyles({ variant }), className),
    },
    children,
  );
};
