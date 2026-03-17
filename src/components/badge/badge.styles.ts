import { cva } from 'styled-system/css';

export const badgeStyles = cva({
  base: {
    alignItems: 'center',
    borderRadius: 'full',
    borderWidth: '1px',
    display: 'inline-flex',
    fontFamily: 'sansDisplay',
    fontWeight: 'button',
    gap: '0.375rem',
    letterSpacing: '0.08em',
    lineHeight: '1',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  variants: {
    color: {
      default: {},
      success: {},
      warning: {},
      neutral: {},
    },
    size: {
      sm: {
        fontSize: '0.6875rem',
        minHeight: '1.5rem',
        paddingInline: '0.55rem',
      },
      md: {
        fontSize: '0.75rem',
        minHeight: '1.75rem',
        paddingInline: '0.7rem',
      },
    },
    variant: {
      soft: {},
      solid: {},
      outline: {},
    },
  },
  compoundVariants: [
    {
      color: 'default',
      variant: 'soft',
      css: {
        backgroundColor: 'surfaceStatusInfoSubtle',
        borderColor: 'borderStatusInfoSubtle',
        color: 'brandPrimary',
      },
    },
    {
      color: 'default',
      variant: 'solid',
      css: {
        backgroundColor: 'brandPrimary',
        borderColor: 'brandPrimary',
        color: 'surfaceBase',
      },
    },
    {
      color: 'default',
      variant: 'outline',
      css: {
        backgroundColor: 'surfaceBase',
        borderColor: 'brandPrimary',
        color: 'brandPrimary',
      },
    },
    {
      color: 'success',
      variant: 'soft',
      css: {
        backgroundColor: 'accentSuccessSubtle',
        borderColor: 'borderStatusSuccessSubtle',
        color: 'accentSuccess',
      },
    },
    {
      color: 'success',
      variant: 'solid',
      css: {
        backgroundColor: 'accentSuccess',
        borderColor: 'accentSuccess',
        color: 'textPrimary',
      },
    },
    {
      color: 'success',
      variant: 'outline',
      css: {
        backgroundColor: 'surfaceBase',
        borderColor: 'accentSuccess',
        color: 'accentSuccess',
      },
    },
    {
      color: 'warning',
      variant: 'soft',
      css: {
        backgroundColor: 'accentWarningSubtle',
        borderColor: 'borderStatusWarningSubtle',
        color: 'accentWarning',
      },
    },
    {
      color: 'warning',
      variant: 'solid',
      css: {
        backgroundColor: 'accentWarning',
        borderColor: 'accentWarning',
        color: 'textPrimary',
      },
    },
    {
      color: 'warning',
      variant: 'outline',
      css: {
        backgroundColor: 'surfaceBase',
        borderColor: 'accentWarning',
        color: 'accentWarning',
      },
    },
    {
      color: 'neutral',
      variant: 'soft',
      css: {
        backgroundColor: 'surfaceSubtle',
        borderColor: 'borderNeutralMuted',
        color: 'textPrimary',
      },
    },
    {
      color: 'neutral',
      variant: 'solid',
      css: {
        backgroundColor: 'textPrimary',
        borderColor: 'textPrimary',
        color: 'surfaceBase',
      },
    },
    {
      color: 'neutral',
      variant: 'outline',
      css: {
        backgroundColor: 'surfaceBase',
        borderColor: 'borderSubtle',
        color: 'textPrimary',
      },
    },
  ],
  defaultVariants: {
    color: 'default',
    size: 'md',
    variant: 'soft',
  },
});
