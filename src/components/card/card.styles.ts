import { cva } from 'styled-system/css';

export const cardRootStyles = cva({
  base: {
    backgroundColor: 'cardBackground',
    borderColor: 'cardBorder',
    borderRadius: 'md',
    borderWidth: '1px',
    boxShadow: 'softLift',
    color: 'cardForeground',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    transitionDuration: 'fast',
    transitionProperty: 'box-shadow, transform, border-color, background-color',
    transitionTimingFunction: 'ease',
    width: '100%',
  },
  variants: {
    interactive: {
      false: {},
      true: {
        _hover: {
          borderColor: 'cardBorderHover',
          boxShadow: 'magicGlow',
          transform: 'translateY(-2px)',
        },
      },
    },
    orientation: {
      horizontal: {
        alignItems: 'stretch',
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
    tone: {
      accent: {
        background:
          'linear-gradient(135deg, {colors.brandPrimary}, {colors.brandPrimaryActive})',
        borderColor: 'transparent',
        boxShadow: 'magicGlow',
        color: 'cardAccentForeground',
      },
      default: {},
    },
  },
  defaultVariants: {
    interactive: false,
    orientation: 'vertical',
    tone: 'default',
  },
});

export const cardHeaderStyles = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  variants: {
    orientation: {
      horizontal: {},
      vertical: {},
    },
    tone: {
      accent: {
        color: 'cardAccentForeground',
      },
      default: {},
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    tone: 'default',
  },
});

export const cardActionStyles = cva({
  base: {
    alignItems: 'center',
    display: 'inline-flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
});

export const cardContentStyles = cva({
  base: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.5rem',
  },
  variants: {
    orientation: {
      horizontal: {
        justifyContent: 'space-between',
      },
      vertical: {
        padding: '2rem',
      },
    },
    tone: {
      accent: {
        color: 'cardAccentForeground',
      },
      default: {},
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    tone: 'default',
  },
});

export const cardTitleStyles = cva({
  base: {
    fontFamily: 'sansDisplay',
    fontWeight: 'button',
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
  },
  variants: {
    orientation: {
      horizontal: {
        fontSize: '1.4rem',
      },
      vertical: {
        fontSize: '2rem',
      },
    },
    tone: {
      accent: {
        color: 'cardAccentForeground',
      },
      default: {
        color: 'cardForeground',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    tone: 'default',
  },
});

export const cardDescriptionStyles = cva({
  base: {
    fontFamily: 'sansDisplay',
    lineHeight: '1.65',
  },
  variants: {
    orientation: {
      horizontal: {
        fontSize: 'uiSm',
      },
      vertical: {
        fontSize: 'uiMd',
      },
    },
    tone: {
      accent: {
        color: 'foregroundOnAccentMuted',
      },
      default: {
        color: 'cardMutedForeground',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    tone: 'default',
  },
});

export const cardFooterStyles = cva({
  base: {
    alignItems: 'center',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'space-between',
  },
  variants: {
    tone: {
      accent: {
        borderColor: 'borderAccentSubtle',
        borderTopWidth: '1px',
        color: 'cardAccentForeground',
        paddingTop: '1.25rem',
      },
      default: {
        borderColor: 'cardSubtleBorder',
        borderTopWidth: '1px',
        paddingTop: '1.25rem',
      },
    },
  },
  defaultVariants: {
    tone: 'default',
  },
});
