import { cva } from 'styled-system/css';

export const stepperRootStyles = cva({
  base: {
    display: 'grid',
    gap: '1rem',
    width: '100%',
  },
});

export const stepperListStyles = cva({
  base: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    width: '100%',
  },
  variants: {
    orientation: {
      horizontal: {
        alignItems: 'stretch',
        display: 'flex',
      },
      vertical: {
        display: 'grid',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const stepperItemWrapperStyles = cva({
  base: {
    minWidth: '0',
    position: 'relative',
    '&[data-last="true"] [data-part="separator"]': {
      display: 'none',
    },
  },
  variants: {
    orientation: {
      horizontal: {
        alignItems: 'center',
        display: 'grid',
        flex: '1 1 0',
        gridTemplateColumns: 'minmax(0,1fr) clamp(1.5rem, 6vw, 3rem)',
      },
      vertical: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0,1fr)',
        gridTemplateRows: 'auto auto',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export const stepperItemButtonStyles = cva({
  base: {
    alignItems: 'start',
    appearance: 'none',
    backgroundColor: 'surfaceBase',
    borderColor: 'borderSubtle',
    borderRadius: 'lg',
    borderWidth: '1px',
    color: 'textPrimary',
    cursor: 'pointer',
    display: 'grid',
    gap: '0.25rem 0.75rem',
    gridTemplateColumns: 'auto minmax(0,1fr)',
    gridTemplateRows: 'auto auto',
    minWidth: '0',
    outline: 'none',
    textAlign: 'left',
    transitionDuration: 'fast',
    transitionProperty: 'background-color, border-color, color',
    transitionTimingFunction: 'ease',
    width: '100%',
    _focusVisible: {
      outlineColor: 'brandPrimary',
      outlineOffset: '2px',
      outlineStyle: 'solid',
      outlineWidth: '2px',
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 'disabled',
    },
  },
  variants: {
    size: {
      sm: {
        paddingBlock: '0.75rem',
        paddingInline: '0.875rem',
      },
      md: {
        paddingBlock: '0.875rem',
        paddingInline: '1rem',
      },
    },
    state: {
      active: {},
      completed: {},
      disabled: {},
      error: {},
      inactive: {},
    },
    variant: {
      compact: {
        gap: '0.125rem 0.625rem',
      },
      default: {},
    },
  },
  compoundVariants: [
    {
      state: 'inactive',
      css: {
        backgroundColor: 'surfaceBase',
        borderColor: 'borderSubtle',
        _hover: {
          backgroundColor: 'surfaceTintedAccentHover',
          borderColor: 'brandPrimary',
        },
      },
    },
    {
      state: 'active',
      css: {
        backgroundColor: 'surfaceSubtle',
        borderColor: 'brandPrimary',
      },
    },
    {
      state: 'completed',
      css: {
        backgroundColor: 'accentSuccessSubtle',
        borderColor: 'accentSuccess',
      },
    },
    {
      state: 'error',
      css: {
        backgroundColor: 'accentErrorSubtle',
        borderColor: 'accentError',
      },
    },
    {
      state: 'disabled',
      css: {
        backgroundColor: 'surfaceSubtle',
        borderColor: 'borderSubtle',
        color: 'foregroundMuted',
      },
    },
    {
      size: 'sm',
      variant: 'compact',
      css: {
        paddingBlock: '0.625rem',
        paddingInline: '0.75rem',
      },
    },
    {
      size: 'md',
      variant: 'compact',
      css: {
        paddingBlock: '0.75rem',
        paddingInline: '0.875rem',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    state: 'inactive',
    variant: 'default',
  },
});

export const stepperIndicatorStyles = cva({
  base: {
    alignItems: 'center',
    borderRadius: 'full',
    borderWidth: '2px',
    display: 'inline-flex',
    flexShrink: '0',
    fontFamily: 'sansDisplay',
    fontWeight: 'button',
    gridColumn: '1',
    gridRow: '1 / span 2',
    justifyContent: 'center',
    lineHeight: '1',
    transitionDuration: 'fast',
    transitionProperty: 'background-color, border-color, color',
    transitionTimingFunction: 'ease',
  },
  variants: {
    size: {
      sm: {
        fontSize: 'uiSm',
        height: '1.75rem',
        width: '1.75rem',
      },
      md: {
        fontSize: 'uiMd',
        height: '2rem',
        width: '2rem',
      },
    },
    state: {
      active: {},
      completed: {},
      disabled: {},
      error: {},
      inactive: {},
    },
    variant: {
      compact: {
        borderWidth: '1px',
      },
      default: {},
    },
  },
  compoundVariants: [
    {
      state: 'inactive',
      css: {
        backgroundColor: 'surfaceSubtle',
        borderColor: 'borderSubtle',
        color: 'foregroundMuted',
      },
    },
    {
      state: 'active',
      css: {
        backgroundColor: 'actionSolidPrimaryBackground',
        borderColor: 'actionSolidPrimaryBorder',
        color: 'actionSolidPrimaryForeground',
      },
    },
    {
      state: 'completed',
      css: {
        backgroundColor: 'accentSuccess',
        borderColor: 'accentSuccess',
        color: 'textPrimary',
      },
    },
    {
      state: 'error',
      css: {
        backgroundColor: 'accentError',
        borderColor: 'accentError',
        color: 'surfaceBase',
      },
    },
    {
      state: 'disabled',
      css: {
        backgroundColor: 'surfaceSubtle',
        borderColor: 'borderSubtle',
        color: 'foregroundMuted',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    state: 'inactive',
    variant: 'default',
  },
});

export const stepperTitleStyles = cva({
  base: {
    color: 'textPrimary',
    fontFamily: 'sansDisplay',
    fontWeight: 'button',
    gridColumn: '2',
    lineHeight: '1.2',
    minWidth: '0',
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
    state: {
      active: {},
      completed: {},
      disabled: {},
      error: {},
      inactive: {},
    },
    variant: {
      compact: {},
      default: {},
    },
  },
  compoundVariants: [
    {
      state: 'disabled',
      css: {
        color: 'foregroundMuted',
      },
    },
    {
      state: 'error',
      css: {
        color: 'accentError',
      },
    },
    {
      size: 'sm',
      variant: 'compact',
      css: {
        fontSize: '0.8125rem',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    state: 'inactive',
    variant: 'default',
  },
});

export const stepperDescriptionStyles = cva({
  base: {
    color: 'foregroundMuted',
    gridColumn: '2',
    lineHeight: '1.45',
    margin: '0',
    minWidth: '0',
  },
  variants: {
    size: {
      sm: {
        fontSize: '0.75rem',
      },
      md: {
        fontSize: '0.875rem',
      },
    },
    state: {
      active: {},
      completed: {},
      disabled: {},
      error: {},
      inactive: {},
    },
    variant: {
      compact: {},
      default: {},
    },
  },
  compoundVariants: [
    {
      state: 'disabled',
      css: {
        color: 'foregroundMutedSubtle',
      },
    },
    {
      state: 'error',
      css: {
        color: 'accentError',
      },
    },
    {
      size: 'sm',
      variant: 'compact',
      css: {
        fontSize: '0.6875rem',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    state: 'inactive',
    variant: 'default',
  },
});

export const stepperSeparatorStyles = cva({
  base: {
    backgroundColor: 'borderSubtle',
    borderRadius: 'full',
    display: 'block',
    justifySelf: 'stretch',
  },
  variants: {
    orientation: {
      horizontal: {
        height: '2px',
        justifySelf: 'center',
        width: 'calc(100% - 1rem)',
      },
      vertical: {
        height: '1.5rem',
        marginBlock: '0.25rem 0',
        width: '2px',
      },
    },
    size: {
      sm: {},
      md: {},
    },
    state: {
      active: {},
      completed: {},
      disabled: {},
      error: {},
      inactive: {},
    },
    variant: {
      compact: {},
      default: {},
    },
  },
  compoundVariants: [
    {
      orientation: 'vertical',
      size: 'sm',
      variant: 'default',
      css: {
        marginInlineStart: '1.75rem',
      },
    },
    {
      orientation: 'vertical',
      size: 'md',
      variant: 'default',
      css: {
        marginInlineStart: '2rem',
      },
    },
    {
      orientation: 'vertical',
      size: 'sm',
      variant: 'compact',
      css: {
        marginInlineStart: '1.625rem',
      },
    },
    {
      orientation: 'vertical',
      size: 'md',
      variant: 'compact',
      css: {
        marginInlineStart: '1.875rem',
      },
    },
    {
      state: 'active',
      css: {
        backgroundColor: 'brandPrimary',
      },
    },
    {
      state: 'completed',
      css: {
        backgroundColor: 'accentSuccess',
      },
    },
    {
      state: 'error',
      css: {
        backgroundColor: 'accentError',
      },
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    size: 'md',
    state: 'inactive',
    variant: 'default',
  },
});

export const stepperSrOnlyStyles = cva({
  base: {
    borderWidth: '0',
    clip: 'rect(0, 0, 0, 0)',
    clipPath: 'inset(50%)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },
});
