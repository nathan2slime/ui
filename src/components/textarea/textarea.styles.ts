import { cva } from 'styled-system/css';

export const textareaRootStyles = cva({
  base: {
    display: 'grid',
    gap: '0.5rem',
    width: '100%',
  },
});

export const textareaFieldWrapperStyles = cva({
  base: {
    position: 'relative',
    width: '100%',
  },
});

export const textareaSideContentStyles = cva({
  base: {
    alignItems: 'center',
    color: 'inputAdornmentForeground',
    display: 'inline-flex',
    pointerEvents: 'none',
    position: 'absolute',
    top: '1rem',
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

export const textareaStyles = cva({
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
    resize: 'vertical',
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
      resize: 'none',
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
        minHeight: '6.5rem',
        paddingBlock: '0.75rem',
        paddingInline: 'insetSm',
      },
      md: {
        fontSize: 'uiMd',
        minHeight: '7.5rem',
        paddingBlock: '0.875rem',
        paddingInline: 'insetMd',
      },
      lg: {
        fontSize: 'uiLg',
        minHeight: '8.5rem',
        paddingBlock: '1rem',
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
        paddingRight: '2.75rem',
      },
      hasEndContent: true,
      size: 'sm',
    },
    {
      css: {
        paddingRight: '3rem',
      },
      hasEndContent: true,
      size: 'md',
    },
    {
      css: {
        paddingRight: '3.25rem',
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

export const textareaFooterStyles = cva({
  base: {
    alignItems: 'flex-start',
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export const textareaCountStyles = cva({
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
