import styled from 'styled-components';

import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

export const StyledCheckboxRoot = styled.label`
  --checkbox-navy: ${({ theme }: UiStyledExecutionContext) => theme?.navy};
  --checkbox-ink: ${({ theme }: UiStyledExecutionContext) => theme?.ink};
  --checkbox-paper: ${({ theme }: UiStyledExecutionContext) => theme?.paper};
  --checkbox-accent: ${({ theme }: UiStyledExecutionContext) => theme?.sky};
  --checkbox-foreground: ${({ theme }: UiStyledExecutionContext) =>
    theme?.colorPalettes.default.solid.foreground};
  --checkbox-size: 1.55rem;
  align-items: center;
  box-sizing: border-box;
  color: var(--checkbox-ink);
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-weight: 800;
  gap: 0.65rem;
  line-height: 1.25;
  user-select: none;

  &[data-color='success'] {
    --checkbox-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.mint ?? theme?.colorPalettes.success.solid.background};
    --checkbox-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.success.solid.foreground};
  }

  &[data-color='warning'] {
    --checkbox-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.yellow ?? theme?.colorPalettes.warning.solid.background};
    --checkbox-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.warning.solid.foreground};
  }

  &[data-color='danger'] {
    --checkbox-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.pink ?? theme?.colorPalettes.danger.solid.background};
    --checkbox-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.danger.solid.foreground};
  }

  &[data-size='sm'] {
    --checkbox-size: 1.25rem;
    gap: 0.5rem;
    font-size: 0.82rem;
  }

  &[data-size='md'] {
    font-size: 0.9rem;
  }

  &[data-size='lg'] {
    --checkbox-size: 1.8rem;
    gap: 0.8rem;
    font-size: 1rem;
  }

  &[data-label-placement='start'] {
    flex-direction: row-reverse;
  }

  &[data-disabled] {
    cursor: not-allowed;
    filter: saturate(0.65);
    opacity: 0.62;
  }
`;

export const StyledCheckboxControl = styled.span`
  align-items: center;
  background: var(--checkbox-paper);
  border: 0.14rem solid var(--checkbox-navy);
  border-radius: 0.45rem;
  box-shadow: 0 0.18rem 0 var(--checkbox-navy);
  box-sizing: border-box;
  color: var(--checkbox-foreground);
  display: inline-flex;
  flex: 0 0 auto;
  height: var(--checkbox-size);
  justify-content: center;
  position: relative;
  transition-duration: 160ms;
  transition-property: background-color, box-shadow, color;
  transition-timing-function: ease;
  width: var(--checkbox-size);

  &[data-state='checked'],
  &[data-state='indeterminate'] {
    background: var(--checkbox-accent);
  }

  &[data-focus-visible] {
    outline: 0.16rem solid var(--checkbox-accent);
    outline-offset: 0.2rem;
  }

  &[data-active] {
    box-shadow: 0 0.08rem 0 var(--checkbox-navy);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledCheckboxIndicator = styled.span`
  display: block;
  height: 58%;
  position: relative;
  width: 58%;

  &[data-state='checked']::after {
    border-bottom: 0.18rem solid currentColor;
    border-right: 0.18rem solid currentColor;
    content: '';
    height: 68%;
    left: 50%;
    position: absolute;
    top: 44%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 36%;
  }

  &[data-state='indeterminate']::after {
    background: currentColor;
    border-radius: 999px;
    content: '';
    height: 0.18rem;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 82%;
  }
`;

export const StyledCheckboxLabel = styled.span`
  min-width: 0;
`;
