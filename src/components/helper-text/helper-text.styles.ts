import { cva } from 'styled-system/css';

export const helperTextStyles = cva({
  base: {
    fontFamily: 'sansDisplay',
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
      default: {
        color: 'inputHelperForeground',
      },
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
