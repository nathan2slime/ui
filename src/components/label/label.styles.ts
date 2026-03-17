import { cva } from 'styled-system/css';

export const labelStyles = cva({
  base: {
    color: 'textPrimary',
    fontFamily: 'sansDisplay',
    fontWeight: 'button',
    lineHeight: '1.4',
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
