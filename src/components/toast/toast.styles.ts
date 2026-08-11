import styled from 'styled-components';

import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

export const StyledToastGroup = styled.div`
  box-sizing: border-box;
  gap: var(--gap);
  max-width: calc(100vw - 2rem);
  width: min(24rem, calc(100vw - 2rem));

  &[data-align='center'] {
    align-items: center;
  }
`;

export const StyledToastRoot = styled.div`
  --toast-navy: ${({ theme }: UiStyledExecutionContext) => theme?.navy};
  --toast-ink: ${({ theme }: UiStyledExecutionContext) => theme?.ink};
  --toast-paper: ${({ theme }: UiStyledExecutionContext) => theme?.paper};
  --toast-accent: ${({ theme }: UiStyledExecutionContext) => theme?.sky};
  --toast-foreground: ${({ theme }: UiStyledExecutionContext) =>
    theme?.colorPalettes.default.solid.foreground};
  background: linear-gradient(180deg, var(--toast-paper) 0%, color-mix(in srgb, var(--toast-accent) 18%, var(--toast-paper)) 100%);
  border: 0.16rem solid var(--toast-navy);
  border-radius: 1.15rem;
  box-shadow: 0 0.35rem 0 var(--toast-navy), 0 0.85rem 1.35rem color-mix(in srgb, var(--toast-navy) 18%, transparent);
  box-sizing: border-box;
  color: var(--toast-ink);
  display: grid;
  gap: 0.7rem;
  grid-template-columns: minmax(0, 1fr) auto;
  opacity: var(--opacity);
  overflow: hidden;
  padding: 0.9rem;
  position: relative;
  transform: translate3d(var(--x), var(--y), 0) scale(calc(1 - (var(--index) * 0.035)));
  transform-origin: center;
  transition-duration: 180ms;
  transition-property: opacity, transform;
  transition-timing-function: ease;
  width: 100%;
  z-index: var(--z-index);

  &[data-type='success'] {
    --toast-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.mint ?? theme?.colorPalettes.success.solid.background};
    --toast-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.success.solid.foreground};
  }

  &[data-type='warning'] {
    --toast-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.yellow ?? theme?.colorPalettes.warning.solid.background};
    --toast-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.warning.solid.foreground};
  }

  &[data-type='error'] {
    --toast-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.pink ?? theme?.colorPalettes.danger.solid.background};
    --toast-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.danger.solid.foreground};
  }

  &[data-type='loading'] {
    --toast-accent: ${({ theme }: UiStyledExecutionContext) => theme?.paper};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledToastContent = styled.div`
  display: grid;
  gap: 0.28rem;
  min-width: 0;
`;

export const StyledToastTitle = styled.h3`
  color: var(--toast-navy);
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.control};
  font-size: 0.98rem;
  font-weight: 850;
  line-height: 1.15;
  margin: 0;
`;

export const StyledToastDescription = styled.p`
  color: var(--toast-ink);
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.86rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
`;

export const StyledToastActions = styled.div`
  align-items: center;
  display: flex;
  gap: 0.45rem;
  grid-column: 1 / -1;
  justify-content: flex-end;
`;

export const StyledToastActionButton = styled.button`
  appearance: none;
  background: var(--toast-accent);
  border: 0.12rem solid var(--toast-navy);
  border-radius: 0.75rem;
  color: var(--toast-foreground);
  cursor: pointer;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.78rem;
  font-weight: 850;
  line-height: 1;
  padding: 0.55rem 0.7rem;
`;

export const StyledToastCloseButton = styled.button`
  appearance: none;
  align-items: center;
  background: color-mix(in srgb, var(--toast-paper) 82%, var(--toast-accent));
  border: 0.13rem solid var(--toast-navy);
  border-radius: 8px;
  box-shadow: 0 0.12rem 0 var(--toast-navy);
  color: var(--toast-navy);
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.86rem;
  font-weight: 900;
  height: 1.9rem;
  justify-content: center;
  line-height: 1;
  transition-duration: 160ms;
  transition-property: background-color, box-shadow, transform;
  transition-timing-function: ease;
  width: 1.9rem;

  &[data-hover] {
    background: var(--toast-accent);
  }

  &[data-active] {
    box-shadow: 0 0.05rem 0 var(--toast-navy);
    transform: translateY(0.07rem);
  }

  &[data-focus-visible] {
    outline: 0.14rem solid var(--toast-accent);
    outline-offset: 0.18rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledToastGhost = styled.div``;
