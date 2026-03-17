import { cva } from 'styled-system/css';

export const switchRootStyles = cva({
  base: {
    alignItems: 'center',
    color: 'textPrimary',
    cursor: 'pointer',
    display: 'inline-flex',
    gap: '0.75rem',
    lineHeight: '1.3',
    userSelect: 'none',
  },
  variants: {
    disabled: {
      false: {},
      true: {
        cursor: 'not-allowed',
        opacity: 'disabled',
      },
    },
    labelPlacement: {
      end: {
        flexDirection: 'row',
      },
      start: {
        flexDirection: 'row-reverse',
      },
    },
    size: {
      sm: {
        gap: '0.5rem',
      },
      md: {
        gap: '0.75rem',
      },
      lg: {
        gap: '1rem',
      },
    },
  },
  defaultVariants: {
    disabled: false,
    labelPlacement: 'end',
    size: 'md',
  },
});

export const switchControlStyles = cva({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    flexShrink: '0',
    justifyContent: 'center',
    position: 'relative',
  },
  variants: {
    size: {
      sm: {
        height: '1.25rem',
        width: '2.25rem',
        '& input:checked + span::after': {
          transform: 'translate(1rem, -50%)',
        },
      },
      md: {
        height: '1.5rem',
        width: '2.75rem',
        '& input:checked + span::after': {
          transform: 'translate(1.25rem, -50%)',
        },
      },
      lg: {
        height: '1.75rem',
        width: '3.25rem',
        '& input:checked + span::after': {
          transform: 'translate(1.6rem, -50%)',
        },
      },
    },
    color: {
      default: {
        '& input:checked + span': {
          backgroundColor: 'surfaceAccentStrong',
          borderColor: 'borderAccentStrong',
        },
        '& input:checked + span::after': {
          backgroundColor: 'actionSolidPrimaryForeground',
        },
      },
      success: {
        '& input:checked + span': {
          backgroundColor: 'actionSolidSuccessBackground',
          borderColor: 'actionSolidSuccessBorder',
        },
        '& input:checked + span::after': {
          backgroundColor: 'actionSolidSuccessForeground',
        },
      },
      warning: {
        '& input:checked + span': {
          backgroundColor: 'actionSolidWarningBackground',
          borderColor: 'actionSolidWarningBorder',
        },
        '& input:checked + span::after': {
          backgroundColor: 'actionSolidWarningForeground',
        },
      },
      danger: {
        '& input:checked + span': {
          backgroundColor: 'actionSolidErrorBackground',
          borderColor: 'actionSolidErrorBorder',
        },
        '& input:checked + span::after': {
          backgroundColor: 'actionSolidErrorForeground',
        },
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export const switchInputStyles = cva({
  base: {
    appearance: 'none',
    cursor: 'pointer',
    height: '100%',
    inset: '0',
    margin: '0',
    opacity: '0',
    position: 'absolute',
    width: '100%',
    zIndex: '1',
    _focusVisible: {
      '& + span': {
        boxShadow: 'focusRing',
      },
    },
    _disabled: {
      cursor: 'not-allowed',
    },
  },
});

export const switchTrackStyles = cva({
  base: {
    backgroundColor: 'surfaceInteractiveMuted',
    borderColor: 'borderInteractiveMuted',
    borderRadius: 'full',
    borderWidth: '1px',
    display: 'inline-flex',
    height: '100%',
    position: 'relative',
    transitionDuration: 'fast',
    transitionProperty: 'background-color, border-color, box-shadow',
    transitionTimingFunction: 'ease',
    width: '100%',
    '&::after': {
      backgroundColor: 'surfaceBase',
      borderColor: 'borderSubtle',
      borderWidth: '1px',
      borderRadius: 'full',
      boxShadow: 'softLift',
      content: "''",
      left: '0.15rem',
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      transitionDuration: 'fast',
      transitionProperty: 'transform, background-color',
      transitionTimingFunction: 'ease',
    },
  },
  variants: {
    size: {
      sm: {
        '&::after': {
          height: '0.95rem',
          width: '0.95rem',
        },
      },
      md: {
        '&::after': {
          height: '1.2rem',
          width: '1.2rem',
        },
      },
      lg: {
        '&::after': {
          height: '1.35rem',
          width: '1.35rem',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const switchLabelStyles = cva({
  base: {
    color: 'textPrimary',
    fontFamily: 'sansDisplay',
    fontWeight: 'medium',
  },
  variants: {
    size: {
      sm: {
        fontSize: 'uiSm',
      },
      md: {
        fontSize: 'uiMd',
      },
      lg: {
        fontSize: 'uiLg',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
