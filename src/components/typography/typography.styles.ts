import { cva } from 'styled-system/css';

export const typographyStyles = cva({
  base: {
    color: 'textPrimary',
    fontFamily: 'sansDisplay',
    margin: '0',
  },
  variants: {
    variant: {
      display: {
        fontSize: '3.75rem',
        fontWeight: '800',
        letterSpacing: '-0.04em',
        lineHeight: '1.05',
      },
      'heading-2': {
        fontSize: '2.25rem',
        fontWeight: '700',
        letterSpacing: '-0.03em',
        lineHeight: '1.1',
      },
      'heading-3': {
        fontSize: '1.5rem',
        fontWeight: '700',
        letterSpacing: '-0.02em',
        lineHeight: '1.2',
      },
      'heading-4': {
        fontSize: '1.25rem',
        fontWeight: '700',
        letterSpacing: '-0.02em',
        lineHeight: '1.25',
      },
      'heading-5': {
        fontSize: '1.125rem',
        fontWeight: '700',
        letterSpacing: '-0.015em',
        lineHeight: '1.25',
      },
      'heading-6': {
        fontSize: '1rem',
        fontWeight: '700',
        letterSpacing: '-0.01em',
        lineHeight: '1.25',
      },
      body: {
        color: 'foregroundMuted',
        fontSize: '1.125rem',
        fontWeight: '500',
        lineHeight: '1.7',
      },
      small: {
        color: 'foregroundMutedSubtle',
        fontSize: 'uiSm',
        fontWeight: '400',
        fontStyle: 'italic',
        lineHeight: '1.7',
      },
      caption: {
        color: 'inputAdornmentForeground',
        fontSize: '0.75rem',
        fontWeight: '600',
        letterSpacing: '0.16em',
        lineHeight: '1.4',
        textTransform: 'uppercase',
      },
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});
