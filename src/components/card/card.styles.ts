import { cva } from 'styled-system/css';

export const cardStyles = cva({
  base: {
    backgroundColor: 'cardBackground',
    borderColor: 'cardBorder',
    borderRadius: 'md',
    borderWidth: '1px',
    color: 'cardForeground',
    display: 'block',
    overflow: 'hidden',
    padding: '1.5rem',
    position: 'relative',
    transitionDuration: 'fast',
    transitionProperty: 'transform, border-color, background-color',
    transitionTimingFunction: 'ease',
    width: '100%',
  },
  variants: {
    interactive: {
      false: {},
      true: {
        cursor: 'pointer',
        _hover: {
          borderColor: 'cardBorderHover',
          transform: 'translateY(-2px)',
        },
      },
    },
    tone: {
      accent: {
        background:
          'linear-gradient(135deg, {colors.brandPrimary}, {colors.brandPrimaryActive})',
        borderColor: 'transparent',
        color: 'cardAccentForeground',
      },
      default: {},
    },
  },
  defaultVariants: {
    interactive: false,
    tone: 'default',
  },
});
