import styled from 'styled-components';

import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

export const StyledRadioGroupRoot = styled.div`
  --radio-group-navy: ${({ theme }: UiStyledExecutionContext) => theme?.navy};
  --radio-group-ink: ${({ theme }: UiStyledExecutionContext) => theme?.ink};
  --radio-group-paper: ${({ theme }: UiStyledExecutionContext) => theme?.paper};
  --radio-group-accent: ${({ theme }: UiStyledExecutionContext) => theme?.sky};
  --radio-group-foreground: ${({ theme }: UiStyledExecutionContext) =>
    theme?.colorPalettes.default.solid.foreground};
  --radio-group-control-size: 1.45rem;
  color: var(--radio-group-ink);
  display: grid;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  gap: 0.72rem;

  &[data-color='success'] {
    --radio-group-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.mint ?? theme?.colorPalettes.success.solid.background};
    --radio-group-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.success.solid.foreground};
  }

  &[data-color='warning'] {
    --radio-group-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.yellow ?? theme?.colorPalettes.warning.solid.background};
    --radio-group-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.warning.solid.foreground};
  }

  &[data-color='danger'] {
    --radio-group-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.pink ?? theme?.colorPalettes.danger.solid.background};
    --radio-group-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.danger.solid.foreground};
  }

  &[data-size='sm'] {
    --radio-group-control-size: 1.22rem;
    font-size: 0.82rem;
  }

  &[data-size='md'] {
    font-size: 0.9rem;
  }

  &[data-size='lg'] {
    --radio-group-control-size: 1.68rem;
    font-size: 1rem;
  }

  &[data-disabled] {
    cursor: not-allowed;
    filter: saturate(0.65);
    opacity: 0.62;
  }
`;

export const StyledRadioGroupLabel = styled.h3`
  color: var(--radio-group-navy);
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.control};
  font-size: 1em;
  font-weight: 850;
  line-height: 1.15;
  margin: 0;
`;

export const StyledRadioGroupItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;

  [data-orientation='horizontal'] & {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const StyledRadioGroupItem = styled.label`
  align-items: center;
  border-radius: 0.8rem;
  box-sizing: border-box;
  color: var(--radio-group-ink);
  cursor: pointer;
  display: inline-flex;
  font-weight: 800;
  gap: 0.62rem;
  line-height: 1.25;
  min-width: 0;
  padding: 0.18rem;
  user-select: none;

  &[data-disabled] {
    cursor: not-allowed;
    opacity: 0.58;
  }

  &[data-invalid] {
    color: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.danger.ghost.foreground};
  }
`;

export const StyledRadioGroupItemText = styled.span`
  min-width: 0;
`;

export const StyledRadioGroupItemControl = styled.span`
  align-items: center;
  background: var(--radio-group-paper);
  border: 0.14rem solid var(--radio-group-navy);
  border-radius: 999px;
  box-shadow: 0 0.16rem 0 var(--radio-group-navy);
  box-sizing: border-box;
  color: var(--radio-group-foreground);
  display: inline-flex;
  flex: 0 0 auto;
  height: var(--radio-group-control-size);
  justify-content: center;
  position: relative;
  transition-duration: 160ms;
  transition-property: background-color, box-shadow;
  transition-timing-function: ease;
  width: var(--radio-group-control-size);

  &[data-state='checked'] {
    background: var(--radio-group-accent);
  }

  &[data-state='checked']::after {
    background: currentColor;
    border-radius: 999px;
    content: '';
    height: 44%;
    width: 44%;
  }

  &[data-focus-visible] {
    outline: 0.16rem solid var(--radio-group-accent);
    outline-offset: 0.2rem;
  }

  &[data-active] {
    box-shadow: 0 0.07rem 0 var(--radio-group-navy);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;
