import { cva } from 'styled-system/css';

export const buttonStyles = cva({
  base: {
    appearance: 'none',
    alignItems: 'center',
    borderRadius: 'md',
    borderWidth: '1px',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'sansDisplay',
    fontWeight: 'button',
    gap: '0.5rem',
    justifyContent: 'center',
    letterSpacing: '-0.01em',
    lineHeight: '1',
    outline: 'none',
    position: 'relative',
    transitionDuration: 'fast',
    transitionProperty:
      'background-color, border-color, color, box-shadow, transform',
    transitionTimingFunction: 'ease',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    boxShadow: 'softLift',
    '& svg': {
      flexShrink: '0',
    },
    _focusVisible: {
      boxShadow: 'focusRing',
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 'disabled',
      transform: 'none',
    },
    _active: {
      transform: 'translateY(1px)',
    },
  },
  variants: {
    variant: {
      solid: {
        boxShadow: 'magicGlow',
      },
      outline: {
        backgroundColor: 'surfaceBase',
      },
      ghost: {
        backgroundColor: 'transparent',
      },
    },
    color: {
      default: {
        '&[data-variant="solid"]': {
          backgroundColor: 'actionSolidPrimaryBackground',
          borderColor: 'actionSolidPrimaryBorder',
          color: 'actionSolidPrimaryForeground',
          _hover: {
            backgroundColor: 'actionSolidPrimaryBackgroundHover',
            borderColor: 'actionSolidPrimaryBorderHover',
            transform: 'translateY(-1px)',
          },
          _active: {
            backgroundColor: 'actionSolidPrimaryBackgroundActive',
          },
        },
        '&[data-variant="outline"]': {
          backgroundColor: 'actionOutlinePrimaryBackground',
          borderColor: 'actionOutlinePrimaryBorder',
          color: 'actionOutlinePrimaryForeground',
          _hover: {
            backgroundColor: 'actionOutlinePrimaryBackgroundHover',
            borderColor: 'actionOutlinePrimaryBorderHover',
            transform: 'translateY(-1px)',
          },
        },
        '&[data-variant="ghost"]': {
          borderColor: 'actionGhostPrimaryBorder',
          color: 'actionGhostPrimaryForeground',
          _hover: {
            backgroundColor: 'actionGhostPrimaryBackgroundHover',
            transform: 'translateY(-1px)',
          },
        },
      },
      success: {
        '&[data-variant="solid"]': {
          backgroundColor: 'actionSolidSuccessBackground',
          borderColor: 'actionSolidSuccessBorder',
          color: 'actionSolidSuccessForeground',
          _hover: {
            backgroundColor: 'actionSolidSuccessBackgroundHover',
            borderColor: 'actionSolidSuccessBorderHover',
            transform: 'translateY(-1px)',
          },
          _active: {
            backgroundColor: 'actionSolidSuccessBackgroundActive',
          },
        },
        '&[data-variant="outline"]': {
          backgroundColor: 'actionOutlineSuccessBackground',
          borderColor: 'actionOutlineSuccessBorder',
          color: 'actionOutlineSuccessForeground',
          _hover: {
            backgroundColor: 'actionOutlineSuccessBackgroundHover',
            borderColor: 'actionOutlineSuccessBorderHover',
            transform: 'translateY(-1px)',
          },
        },
        '&[data-variant="ghost"]': {
          borderColor: 'actionGhostSuccessBorder',
          color: 'actionGhostSuccessForeground',
          _hover: {
            backgroundColor: 'actionGhostSuccessBackgroundHover',
            transform: 'translateY(-1px)',
          },
        },
      },
      warning: {
        '&[data-variant="solid"]': {
          backgroundColor: 'actionSolidWarningBackground',
          borderColor: 'actionSolidWarningBorder',
          color: 'actionSolidWarningForeground',
          _hover: {
            backgroundColor: 'actionSolidWarningBackgroundHover',
            borderColor: 'actionSolidWarningBorderHover',
            transform: 'translateY(-1px)',
          },
          _active: {
            backgroundColor: 'actionSolidWarningBackgroundActive',
          },
        },
        '&[data-variant="outline"]': {
          backgroundColor: 'actionOutlineWarningBackground',
          borderColor: 'actionOutlineWarningBorder',
          color: 'actionOutlineWarningForeground',
          _hover: {
            backgroundColor: 'actionOutlineWarningBackgroundHover',
            borderColor: 'actionOutlineWarningBorderHover',
            transform: 'translateY(-1px)',
          },
        },
        '&[data-variant="ghost"]': {
          borderColor: 'actionGhostWarningBorder',
          color: 'actionGhostWarningForeground',
          _hover: {
            backgroundColor: 'actionGhostWarningBackgroundHover',
            transform: 'translateY(-1px)',
          },
        },
      },
      danger: {
        '&[data-variant="solid"]': {
          backgroundColor: 'actionSolidErrorBackground',
          borderColor: 'actionSolidErrorBorder',
          color: 'actionSolidErrorForeground',
          _hover: {
            backgroundColor: 'actionSolidErrorBackgroundHover',
            borderColor: 'actionSolidErrorBorderHover',
            transform: 'translateY(-1px)',
          },
          _active: {
            backgroundColor: 'actionSolidErrorBackgroundActive',
          },
        },
        '&[data-variant="outline"]': {
          backgroundColor: 'actionOutlineErrorBackground',
          borderColor: 'actionOutlineErrorBorder',
          color: 'actionOutlineErrorForeground',
          _hover: {
            backgroundColor: 'actionOutlineErrorBackgroundHover',
            borderColor: 'actionOutlineErrorBorderHover',
            transform: 'translateY(-1px)',
          },
        },
        '&[data-variant="ghost"]': {
          borderColor: 'actionGhostErrorBorder',
          color: 'actionGhostErrorForeground',
          _hover: {
            backgroundColor: 'actionGhostErrorBackgroundHover',
            transform: 'translateY(-1px)',
          },
        },
      },
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
      icon: {
        gap: '0',
        justifyContent: 'center',
        paddingInline: '0',
        width: 'controlMd',
        height: 'controlMd',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'md',
    variant: 'solid',
  },
});
