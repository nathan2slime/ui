import styled, { css } from 'styled-components';

import type { ButtonColor, ButtonSize, ButtonVariant } from '@/types/button';
import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

type ButtonStyleProps = {
  $color: ButtonColor;
  $fullWidth: boolean;
  $size: ButtonSize;
  $variant: ButtonVariant;
};

const colorStyles = css<ButtonStyleProps>`
  ${({ $color, theme }: UiStyledExecutionContext & ButtonStyleProps) => {
    const palette = theme?.colorPalettes[$color];

    return css`
      &:focus-visible {
        outline-color: ${palette?.outline.hoverBorder};
      }

      &[data-variant='solid'] {
        background-image: linear-gradient(
          180deg,
          ${palette?.solid.backgroundHover} 0%,
          ${palette?.solid.background} 52%,
          ${palette?.solid.backgroundActive} 100%
        );
        background-color: ${palette?.solid.background};
        border-color: ${palette?.solid.border};
        color: ${palette?.solid.foreground};

        &:not(:disabled):hover {
          background-image: linear-gradient(
            180deg,
            ${theme?.paper} 0%,
            ${palette?.solid.backgroundHover} 18%,
            ${palette?.solid.background} 62%,
            ${palette?.solid.backgroundActive} 100%
          );
          border-color: ${palette?.solid.borderHover};
          transform: translateY(-0.16rem);
        }

        &:not(:disabled):active {
          background-image: linear-gradient(
            180deg,
            ${palette?.solid.background} 0%,
            ${palette?.solid.backgroundActive} 100%
          );
        }
      }

      &[data-variant='outline'] {
        background-image: linear-gradient(
          180deg,
          ${theme?.paper} 0%,
          ${palette?.outline.hoverBackground} 100%
        );
        background-color: ${theme?.paper};
        border-color: ${palette?.outline.border};
        color: ${palette?.outline.foreground};

        &:not(:disabled):hover {
          background-image: linear-gradient(
            180deg,
            ${theme?.paper} 0%,
            ${palette?.outline.hoverBackground} 100%
          );
          background-color: ${palette?.outline.hoverBackground};
          border-color: ${palette?.outline.hoverBorder};
          transform: translateY(-0.12rem);
        }
      }

      &[data-variant='border'] {
        background-color: ${theme?.paper};
        background-image: linear-gradient(
          180deg,
          ${theme?.paper} 0%,
          ${theme?.paper} 100%
        );
        border-color: ${theme?.navy};
        color: ${theme?.ink};

        &:not(:disabled):hover {
          background-image: linear-gradient(
            180deg,
            ${theme?.paper} 0%,
            color-mix(in srgb, ${palette?.solid.background} 38%, ${theme?.paper}) 100%
          );
          border-color: ${theme?.navy};
          transform: translateY(-0.12rem);
        }
      }

      &[data-variant='ghost'] {
        color: ${palette?.ghost.foreground};

        &:not(:disabled):hover {
          background-color: ${palette?.ghost.hoverBackground};
          border-color: ${palette?.outline.border};
          transform: translateY(-0.08rem);
        }
      }
    `;
  }}
`;

export const StyledButton = styled.button<ButtonStyleProps>`
  appearance: none;
  align-items: center;
  border-radius: 1.1rem;
  border-style: solid;
  border-width: 0.18rem;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.control};
  font-weight: 800;
  gap: 0.55rem;
  isolation: isolate;
  justify-content: center;
  letter-spacing: 0.01em;
  line-height: 1;
  outline: none;
  overflow: hidden;
  position: relative;
  transition-duration: 160ms;
  transition-property: background-color, background-image, border-color, box-shadow, color, transform;
  transition-timing-function: ease;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  & > * {
    position: relative;
    z-index: 1;
  }

  & svg {
    flex-shrink: 0;
  }

  &:focus-visible {
    outline-offset: 0.25rem;
    outline-style: solid;
    outline-width: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    filter: saturate(0.65);
    opacity: 0.62;
    transform: none;
  }

  &:not(:disabled):active {
    transform: translateY(0.18rem);
  }

  &[aria-busy='true'] {
    cursor: wait;
    opacity: 0.78;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  ${({ $variant, theme }: UiStyledExecutionContext & ButtonStyleProps) => {
    return (
      ($variant === 'outline' || $variant === 'border') &&
      css`
        background-color: ${theme?.paper};
      `
    );
  }}

  ${({ $size }) => {
    const sizes: Record<ButtonSize, ReturnType<typeof css>> = {
      sm: css`
        font-size: 0.875rem;
        height: 2.625rem;
        padding-inline: 1rem;
      `,
      md: css`
        font-size: 0.95rem;
        height: 3.125rem;
        padding-inline: 1.3rem;
      `,
      lg: css`
        font-size: 1.05rem;
        height: 3.625rem;
        padding-inline: 1.6rem;
      `,
      icon: css`
        gap: 0;
        height: 3.125rem;
        justify-content: center;
        padding-inline: 0;
        width: 3.125rem;
      `,
    };

    return sizes[$size];
  }}

  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}

  ${colorStyles}

  ${({ theme }: UiStyledExecutionContext) => {
    return css`
    box-shadow: 0 0.3rem 0 ${theme?.navy},
      0 0.55rem 1rem color-mix(in srgb, ${theme?.navy} 16%, ${theme?.paper});

    &:focus-visible {
      outline-color: ${theme?.navy};
    }

    &:not(:disabled):active {
      box-shadow: 0 0.12rem 0 ${theme?.navy},
        0 0.25rem 0.55rem color-mix(in srgb, ${theme?.navy} 12%, ${theme?.paper});
    }

    &:disabled,
    &[aria-busy='true'] {
      box-shadow: 0 0.18rem 0 ${theme?.navy};
    }
  `;
  }}

  &:disabled,
  &:disabled:hover,
  &:disabled:active {
    transform: none;
  }
`;
