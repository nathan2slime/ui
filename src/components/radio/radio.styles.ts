import { cva } from 'styled-system/css';

export const radioRootStyles = cva({
  base: {
    alignItems: 'flex-start',
    color: 'textPrimary',
    cursor: 'pointer',
    display: 'flex',
    gap: '0.75rem',
    lineHeight: '1.4',
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
  },
  defaultVariants: {
    disabled: false,
  },
});

export const radioControlStyles = cva({
  base: {
    display: 'inline-flex',
    flexShrink: '0',
    height: '1.5rem',
    position: 'relative',
    width: '1.5rem',
    '& input:checked + span::after': {
      opacity: '1',
    },
  },
  variants: {
    size: {
      sm: {
        height: '1.25rem',
        width: '1.25rem',
      },
      md: {
        height: '1.5rem',
        width: '1.5rem',
      },
    },
    color: {
      default: {
        '& input:checked + span': {
          borderColor: 'actionSolidPrimaryBorder',
        },
        '& input:checked + span::after': {
          backgroundColor: 'actionSolidPrimaryBackground',
        },
      },
      success: {
        '& input:checked + span': {
          borderColor: 'actionSolidSuccessBorder',
        },
        '& input:checked + span::after': {
          backgroundColor: 'actionSolidSuccessBackground',
        },
      },
      warning: {
        '& input:checked + span': {
          borderColor: 'actionSolidWarningBorder',
        },
        '& input:checked + span::after': {
          backgroundColor: 'actionSolidWarningBackground',
        },
      },
      danger: {
        '& input:checked + span': {
          borderColor: 'actionSolidErrorBorder',
        },
        '& input:checked + span::after': {
          backgroundColor: 'actionSolidErrorBackground',
        },
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
  },
});

export const radioInputStyles = cva({
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

export const radioVisualStyles = cva({
  base: {
    alignItems: 'center',
    borderColor: 'borderSubtle',
    borderRadius: 'full',
    borderWidth: '2px',
    display: 'inline-flex',
    height: '100%',
    justifyContent: 'center',
    transitionDuration: 'fast',
    transitionProperty: 'border-color, box-shadow',
    transitionTimingFunction: 'ease',
    width: '100%',
    '&::after': {
      backgroundColor: 'borderSubtle',
      borderRadius: 'full',
      content: "''",
      height: '0.6rem',
      opacity: '0',
      transitionDuration: 'fast',
      transitionProperty: 'opacity, background-color',
      transitionTimingFunction: 'ease',
      width: '0.6rem',
    },
  },
  variants: {
    size: {
      sm: {
        '&::after': {
          height: '0.45rem',
          width: '0.45rem',
        },
      },
      md: {
        '&::after': {
          height: '0.6rem',
          width: '0.6rem',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const radioLabelStyles = cva({
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
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
