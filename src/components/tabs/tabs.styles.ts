import { cva } from 'styled-system/css';

export const tabsRootStyles = cva({
  base: {
    display: 'grid',
    gap: '0.875rem',
  },
});

export const tabsListStyles = cva({
  base: {
    alignItems: 'center',
    backgroundColor: 'surfaceSubtle',
    border: '1px solid token(colors.borderSubtle)',
    borderRadius: 'md',
    display: 'inline-flex',
    gap: '0.25rem',
    padding: '0.25rem',
    width: 'fit-content',
  },
});

export const tabsTriggerStyles = cva({
  base: {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: 'md',
    borderWidth: '1px',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'sansDisplay',
    fontSize: 'uiSm',
    fontWeight: 'button',
    justifyContent: 'center',
    minHeight: '2.25rem',
    minWidth: '6.5rem',
    outline: 'none',
    paddingInline: '1rem',
    transitionDuration: 'fast',
    transitionProperty: 'background-color, border-color, color, box-shadow',
    whiteSpace: 'nowrap',
    _focusVisible: {
      boxShadow: 'focusRing',
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 'disabled',
    },
  },
  variants: {
    active: {
      true: {
        backgroundColor: 'brandPrimary',
        borderColor: 'brandPrimary',
        boxShadow: 'magicGlow',
        color: 'surfaceBase',
      },
      false: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'textPrimary',
        _hover: {
          backgroundColor: 'surfaceTintedAccentHover',
          color: 'brandPrimary',
        },
      },
    },
  },
});
