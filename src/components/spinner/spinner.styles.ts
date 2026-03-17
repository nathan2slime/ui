import { cva } from 'styled-system/css';

export const spinnerRootStyles = cva({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
  },
  variants: {
    size: {
      sm: {
        minHeight: '1.25rem',
        minWidth: '1.25rem',
      },
      md: {
        minHeight: '1.75rem',
        minWidth: '1.75rem',
      },
      lg: {
        minHeight: '2.25rem',
        minWidth: '2.25rem',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const spinnerSvgStyles = cva({
  base: {
    animationDuration: '0.9s',
    animationIterationCount: 'infinite',
    animationName: 'ui-spinner-rotate',
    animationTimingFunction: 'linear',
    display: 'block',
  },
  variants: {
    size: {
      sm: {
        height: '1.25rem',
        width: '1.25rem',
      },
      md: {
        height: '1.75rem',
        width: '1.75rem',
      },
      lg: {
        height: '2.25rem',
        width: '2.25rem',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const spinnerTrackCircleStyles = cva({
  base: {
    fill: 'transparent',
    stroke: 'borderSubtle',
    strokeOpacity: '0.4',
    strokeWidth: '4',
  },
});

export const spinnerIndicatorCircleStyles = cva({
  base: {
    fill: 'transparent',
    strokeDasharray: '90',
    strokeDashoffset: '60',
    strokeLinecap: 'round',
    strokeWidth: '4',
  },
  variants: {
    variant: {
      primary: {
        stroke: 'brandPrimary',
      },
      neutral: {
        stroke: 'textPrimary',
      },
      contrast: {
        stroke: 'surfaceBase',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
