import { cva } from 'styled-system/css';

export const tooltipRootStyles = cva({
  base: {
    display: 'inline-flex',
    position: 'relative',
    width: 'fit-content',
  },
});

export const tooltipTriggerStyles = cva({
  base: {
    appearance: 'none',
    background: 'transparent',
    borderWidth: '0',
    cursor: 'default',
    display: 'inline-flex',
    font: 'inherit',
    padding: '0',
    width: 'fit-content',
  },
});

export const tooltipContentStyles = cva({
  base: {
    backgroundColor: 'textPrimary',
    borderRadius: 'sm',
    boxShadow: 'softLift',
    color: 'surfaceBase',
    fontFamily: 'sansDisplay',
    fontSize: 'uiSm',
    lineHeight: '1.4',
    maxWidth: '21rem',
    minWidth: '12rem',
    paddingBlock: '0.55rem',
    paddingInline: '0.75rem',
    position: 'absolute',
    whiteSpace: 'normal',
    width: 'max-content',
    zIndex: '10',
  },
  variants: {
    placement: {
      bottom: {
        left: '50%',
        top: 'calc(100% + var(--tooltip-side-offset))',
        transform: 'translateX(-50%)',
      },
      left: {
        right: 'calc(100% + var(--tooltip-side-offset))',
        top: '50%',
        transform: 'translateY(-50%)',
      },
      right: {
        left: 'calc(100% + var(--tooltip-side-offset))',
        top: '50%',
        transform: 'translateY(-50%)',
      },
      top: {
        bottom: 'calc(100% + var(--tooltip-side-offset))',
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
  },
  defaultVariants: {
    placement: 'top',
  },
});
