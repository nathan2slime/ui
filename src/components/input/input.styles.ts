import { cva } from 'styled-system/css';

export const inputRootStyles = cva({
  base: {
    width: '100%',
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const inputFieldWrapperStyles = cva({
  base: {
    position: 'relative',
    width: '100%',
  },
});

export const inputAdornmentStyles = cva({
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
        right: '1rem',
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

export const inputStyles = cva({
  base: {
    appearance: 'none',
    backgroundColor: 'inputBackground',
    borderColor: 'inputBorder',
    borderRadius: 'sm',
    borderWidth: '1px',
    color: 'inputForeground',
    display: 'block',
    fontFamily: 'sansDisplay',
    outline: 'none',
    transitionDuration: 'fast',
    transitionProperty: 'background-color, border-color, box-shadow, color',
    transitionTimingFunction: 'ease',
    width: '100%',
    _placeholder: {
      color: 'inputPlaceholder',
    },
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
    hasEndAdornment: {
      false: {},
      true: {},
    },
    hasStartAdornment: {
      false: {},
      true: {},
    },
    size: {
      sm: {
        fontSize: 'uiSm',
        height: 'controlSm',
        paddingInline: 'insetSm',
      },
      md: {
        fontSize: 'uiMd',
        height: 'controlMd',
        paddingInline: 'insetMd',
      },
      lg: {
        fontSize: 'uiLg',
        height: 'controlLg',
        paddingInline: 'insetLg',
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
      hasStartAdornment: true,
      size: 'sm',
    },
    {
      css: {
        paddingLeft: '3rem',
      },
      hasStartAdornment: true,
      size: 'md',
    },
    {
      css: {
        paddingLeft: '3.25rem',
      },
      hasStartAdornment: true,
      size: 'lg',
    },
    {
      css: {
        paddingRight: '2.75rem',
      },
      hasEndAdornment: true,
      size: 'sm',
    },
    {
      css: {
        paddingRight: '3rem',
      },
      hasEndAdornment: true,
      size: 'md',
    },
    {
      css: {
        paddingRight: '3.25rem',
      },
      hasEndAdornment: true,
      size: 'lg',
    },
  ],
  defaultVariants: {
    color: 'default',
    hasEndAdornment: false,
    hasStartAdornment: false,
    size: 'md',
  },
});

export const inputFooterStyles = cva({
  base: {
    alignItems: 'flex-start',
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'space-between',
    marginTop: '0.5rem',
    width: '100%',
  },
});

export const inputHelperListStyles = cva({
  base: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    gap: '0.25rem',
    minWidth: '0',
  },
});

export const inputCountStyles = cva({
  base: {
    color: 'inputHelperForeground',
    flexShrink: '0',
    fontFamily: 'sansDisplay',
    lineHeight: '1.4',
    textAlign: 'right',
    whiteSpace: 'nowrap',
  },
  variants: {
    size: {
      sm: {
        fontSize: 'uiSm',
      },
      md: {
        fontSize: 'uiSm',
      },
      lg: {
        fontSize: 'uiMd',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
