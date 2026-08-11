import styled, { css } from 'styled-components';

import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

const popoverVisualStyles = css`
  --popover-navy: ${({ theme }: UiStyledExecutionContext) => theme?.navy};
  --popover-ink: ${({ theme }: UiStyledExecutionContext) => theme?.ink};
  --popover-paper: ${({ theme }: UiStyledExecutionContext) => theme?.paper};
  --popover-accent: ${({ theme }: UiStyledExecutionContext) => theme?.sky};
  --popover-foreground: ${({ theme }: UiStyledExecutionContext) =>
    theme?.colorPalettes.default.solid.foreground};
  --popover-trigger-padding-block: 0.68rem;
  --popover-trigger-padding-inline: 1rem;
  --popover-content-padding: 0.95rem;
  --popover-content-width: 18rem;

  &[data-color='success'] {
    --popover-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.mint ?? theme?.colorPalettes.success.solid.background};
    --popover-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.success.solid.foreground};
  }

  &[data-color='warning'] {
    --popover-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.yellow ?? theme?.colorPalettes.warning.solid.background};
    --popover-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.warning.solid.foreground};
  }

  &[data-color='danger'] {
    --popover-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.pink ?? theme?.colorPalettes.danger.solid.background};
    --popover-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.danger.solid.foreground};
  }

  &[data-size='sm'] {
    --popover-trigger-padding-block: 0.5rem;
    --popover-trigger-padding-inline: 0.78rem;
    --popover-content-padding: 0.78rem;
    --popover-content-width: 15.5rem;
    font-size: 0.82rem;
  }

  &[data-size='md'] {
    font-size: 0.9rem;
  }

  &[data-size='lg'] {
    --popover-trigger-padding-block: 0.82rem;
    --popover-trigger-padding-inline: 1.18rem;
    --popover-content-padding: 1.08rem;
    --popover-content-width: 20rem;
    font-size: 1rem;
  }
`;

export const StyledPopoverRoot = styled.div`
  ${popoverVisualStyles}

  display: inline-grid;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
`;

export const StyledPopoverTrigger = styled.button`
  appearance: none;
  background: var(--popover-accent);
  border: 0.14rem solid var(--popover-navy);
  border-radius: 0.9rem;
  box-shadow: 0 0.18rem 0 var(--popover-navy);
  box-sizing: border-box;
  color: var(--popover-foreground);
  cursor: pointer;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.control};
  font-size: 1em;
  font-weight: 850;
  line-height: 1;
  padding: var(--popover-trigger-padding-block)
    var(--popover-trigger-padding-inline);
  transition-duration: 160ms;
  transition-property: background-color, box-shadow, transform;
  transition-timing-function: ease;

  &[data-hover] {
    background: color-mix(in srgb, var(--popover-accent) 76%, white);
  }

  &[data-state='open'],
  &[data-active] {
    box-shadow: 0 0.08rem 0 var(--popover-navy);
    transform: translateY(0.1rem);
  }

  &[data-focus-visible] {
    outline: 0.16rem solid var(--popover-accent);
    outline-offset: 0.22rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledPopoverPositioner = styled.div`
  ${popoverVisualStyles}

  z-index: 1200;
`;

export const StyledPopoverContent = styled.div`
  background: linear-gradient(180deg, var(--popover-paper) 0%, color-mix(in srgb, var(--popover-accent) 14%, var(--popover-paper)) 100%);
  border: 0.16rem solid var(--popover-navy);
  border-radius: 1.15rem;
  box-shadow: 0 0.34rem 0 var(--popover-navy), 0 0.85rem 1.35rem color-mix(in srgb, var(--popover-navy) 18%, transparent);
  box-sizing: border-box;
  color: var(--popover-ink);
  display: grid;
  gap: 0.68rem;
  max-width: calc(100vw - 2rem);
  min-width: min(var(--popover-content-width), calc(100vw - 2rem));
  padding: var(--popover-content-padding);
  position: relative;
  transform-origin: var(--transform-origin);
  pointer-events: none;

  &[data-state='open'] {
    pointer-events: all;
  }
`;

export const StyledPopoverHeader = styled.div`
  align-items: start;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: minmax(0, 1fr) auto;
`;

export const StyledPopoverTitle = styled.h3`
  color: var(--popover-navy);
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.control};
  font-size: 1.08em;
  font-weight: 850;
  line-height: 1.1;
  margin: 0;
`;

export const StyledPopoverDescription = styled.p`
  color: var(--popover-ink);
  font-size: 0.95em;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
`;

export const StyledPopoverBody = styled.div`
  color: var(--popover-ink);
  display: grid;
  gap: 0.6rem;
  line-height: 1.4;
`;

export const StyledPopoverFooter = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-end;
`;

export const StyledPopoverCloseTrigger = styled.button`
  appearance: none;
  align-items: center;
  background: color-mix(in srgb, var(--popover-paper) 82%, var(--popover-accent));
  border: 0.13rem solid var(--popover-navy);
  border-radius: 8px;
  box-shadow: 0 0.12rem 0 var(--popover-navy);
  color: var(--popover-navy);
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.86em;
  font-weight: 900;
  height: 1.9rem;
  justify-content: center;
  line-height: 1;
  transition-duration: 160ms;
  transition-property: background-color, box-shadow, transform;
  transition-timing-function: ease;
  width: 1.9rem;

  &[data-hover] {
    background: var(--popover-accent);
  }

  &[data-active] {
    box-shadow: 0 0.05rem 0 var(--popover-navy);
    transform: translateY(0.07rem);
  }

  &[data-focus-visible] {
    outline: 0.14rem solid var(--popover-accent);
    outline-offset: 0.18rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledPopoverArrow = styled.div`
  --arrow-size: 0.72rem;
`;

export const StyledPopoverArrowTip = styled.div`
  background: var(--popover-paper);
  border-color: var(--popover-navy);
  border-style: solid;
  border-width: 0.14rem 0 0 0.14rem;
  box-sizing: border-box;
`;
