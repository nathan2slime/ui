import { cva } from 'styled-system/css';

export const selectRootStyles = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    width: '100%',
  },
});

export const selectFieldWrapperStyles = cva({
  base: {
    position: 'relative',
    width: '100%',
  },
});

export const selectSideContentStyles = cva({
  base: {
    alignItems: 'center',
    color: 'inputAdornmentForeground',
    display: 'inline-flex',
    pointerEvents: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1',
    '& svg': {
      flexShrink: '0',
    },
  },
  variants: {
    placement: {
      end: {
        right: '2.75rem',
      },
      start: {
        left: '1rem',
      },
    },
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
    color: {
      default: {},
      success: {
        color: 'inputSuccessForeground',
      },
      warning: {
        color: 'inputWarningForeground',
      },
      danger: {
        color: 'inputErrorForeground',
      },
    },
  },
  defaultVariants: {
    color: 'default',
    placement: 'start',
    size: 'md',
  },
});

export const selectIndicatorStyles = cva({
  base: {
    alignItems: 'center',
    color: 'inputAdornmentForeground',
    display: 'inline-flex',
    pointerEvents: 'none',
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1',
  },
  variants: {
    size: {
      sm: {
        height: '0.9rem',
        width: '0.9rem',
      },
      md: {
        height: '1rem',
        width: '1rem',
      },
      lg: {
        height: '1.1rem',
        width: '1.1rem',
      },
    },
    color: {
      default: {},
      success: {
        color: 'inputSuccessForeground',
      },
      warning: {
        color: 'inputWarningForeground',
      },
      danger: {
        color: 'inputErrorForeground',
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export const selectControlStyles = cva({
  base: {
    appearance: 'none',
    backgroundColor: 'inputBackground',
    borderColor: 'inputBorder',
    borderRadius: 'sm',
    borderWidth: '1px',
    color: 'inputForeground',
    cursor: 'pointer',
    display: 'block',
    fontFamily: 'sansDisplay',
    outline: 'none',
    transitionDuration: 'fast',
    transitionProperty: 'background-color, border-color, box-shadow, color',
    transitionTimingFunction: 'ease',
    width: '100%',
    _disabled: {
      backgroundColor: 'inputDisabledBackground',
      borderColor: 'inputDisabledBorder',
      color: 'inputDisabledForeground',
      cursor: 'not-allowed',
    },
    _focusVisible: {
      borderColor: 'inputFocusBorder',
      boxShadow: 'focusRing',
    },
  },
  variants: {
    hasEndContent: {
      false: {},
      true: {},
    },
    hasStartContent: {
      false: {},
      true: {},
    },
    size: {
      sm: {
        fontSize: 'uiSm',
        height: 'controlSm',
        paddingInline: 'insetSm',
        paddingRight: '2.5rem',
      },
      md: {
        fontSize: 'uiMd',
        height: 'controlMd',
        paddingInline: 'insetMd',
        paddingRight: '2.75rem',
      },
      lg: {
        fontSize: 'uiLg',
        height: 'controlLg',
        paddingInline: 'insetLg',
        paddingRight: '3rem',
      },
    },
    color: {
      default: {},
      success: {
        backgroundColor: 'inputSuccessBackground',
        borderColor: 'inputSuccessBorder',
        color: 'inputSuccessForeground',
        _focusVisible: {
          borderColor: 'inputSuccessBorder',
          boxShadow: 'focusRingSuccess',
        },
      },
      warning: {
        backgroundColor: 'inputWarningBackground',
        borderColor: 'inputWarningBorder',
        color: 'inputWarningForeground',
        _focusVisible: {
          borderColor: 'inputWarningBorder',
          boxShadow: 'focusRingWarning',
        },
      },
      danger: {
        backgroundColor: 'inputErrorBackground',
        borderColor: 'inputErrorBorder',
        color: 'inputErrorForeground',
        _focusVisible: {
          borderColor: 'inputErrorBorder',
          boxShadow: 'focusRingError',
        },
      },
    },
  },
  compoundVariants: [
    {
      css: {
        paddingLeft: '2.75rem',
      },
      hasStartContent: true,
      size: 'sm',
    },
    {
      css: {
        paddingLeft: '3rem',
      },
      hasStartContent: true,
      size: 'md',
    },
    {
      css: {
        paddingLeft: '3.25rem',
      },
      hasStartContent: true,
      size: 'lg',
    },
    {
      css: {
        paddingRight: '4.5rem',
      },
      hasEndContent: true,
      size: 'sm',
    },
    {
      css: {
        paddingRight: '4.75rem',
      },
      hasEndContent: true,
      size: 'md',
    },
    {
      css: {
        paddingRight: '5rem',
      },
      hasEndContent: true,
      size: 'lg',
    },
  ],
  defaultVariants: {
    color: 'default',
    hasEndContent: false,
    hasStartContent: false,
    size: 'md',
  },
});
