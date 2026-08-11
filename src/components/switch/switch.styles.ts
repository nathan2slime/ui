import styled from 'styled-components';

import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

export const StyledSwitchRoot = styled.label`
  --switch-navy: ${({ theme }: UiStyledExecutionContext) => theme?.navy};
  --switch-ink: ${({ theme }: UiStyledExecutionContext) => theme?.ink};
  --switch-paper: ${({ theme }: UiStyledExecutionContext) => theme?.paper};
  --switch-checked: ${({ theme }: UiStyledExecutionContext) => theme?.sky};
  --switch-checked-foreground: ${({ theme }: UiStyledExecutionContext) =>
    theme?.colorPalettes.default.solid.foreground};
  --switch-width: 3.05rem;
  --switch-height: 1.65rem;
  --switch-padding: 0.18rem;
  --switch-thumb-size: calc(var(--switch-height) - (var(--switch-padding) * 2));
  --switch-thumb-offset: calc(var(--switch-width) - var(--switch-thumb-size) - (var(--switch-padding) * 2));
  align-items: center;
  box-sizing: border-box;
  color: var(--switch-ink);
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-weight: 800;
  gap: 0.75rem;
  line-height: 1.25;
  user-select: none;

  &[data-color='success'] {
    --switch-checked: ${({ theme }: UiStyledExecutionContext) =>
      theme?.mint ?? theme?.colorPalettes.success.solid.background};
    --switch-checked-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.success.solid.foreground};
  }

  &[data-color='warning'] {
    --switch-checked: ${({ theme }: UiStyledExecutionContext) =>
      theme?.yellow ?? theme?.colorPalettes.warning.solid.background};
    --switch-checked-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.warning.solid.foreground};
  }

  &[data-color='danger'] {
    --switch-checked: ${({ theme }: UiStyledExecutionContext) =>
      theme?.pink ?? theme?.colorPalettes.danger.solid.background};
    --switch-checked-foreground: ${({ theme }: UiStyledExecutionContext) =>
      theme?.colorPalettes.danger.solid.foreground};
  }

  &[data-size='sm'] {
    --switch-width: 2.55rem;
    --switch-height: 1.42rem;
    gap: 0.55rem;
    font-size: 0.82rem;
  }

  &[data-size='md'] {
    font-size: 0.9rem;
  }

  &[data-size='lg'] {
    --switch-width: 3.55rem;
    --switch-height: 1.9rem;
    gap: 0.9rem;
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

export const StyledSwitchControl = styled.span`
  align-items: center;
  background: color-mix(in srgb, var(--switch-paper) 82%, var(--switch-navy));
  border: 0.14rem solid var(--switch-navy);
  border-radius: 999px;
  box-shadow: 0 0.18rem 0 var(--switch-navy);
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  height: var(--switch-height);
  padding: var(--switch-padding);
  position: relative;
  transition-duration: 160ms;
  transition-property: background-color, border-color, box-shadow;
  transition-timing-function: ease;
  width: var(--switch-width);

  &[data-state='checked'] {
    background: var(--switch-checked);
  }

  &[data-focus-visible] {
    outline: 0.16rem solid var(--switch-checked);
    outline-offset: 0.2rem;
  }

  &[data-active] {
    box-shadow: 0 0.08rem 0 var(--switch-navy);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledSwitchThumb = styled.span`
  background: var(--switch-paper);
  border: 0.13rem solid var(--switch-navy);
  border-radius: 999px;
  box-shadow: 0 0.1rem 0 color-mix(in srgb, var(--switch-navy) 55%, transparent);
  box-sizing: border-box;
  display: block;
  height: var(--switch-thumb-size);
  transform: translateX(0);
  transition-duration: 160ms;
  transition-property: background-color, transform;
  transition-timing-function: ease;
  width: var(--switch-thumb-size);

  &[data-state='checked'] {
    background: var(--switch-checked-foreground);
    transform: translateX(var(--switch-thumb-offset));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledSwitchLabel = styled.span`
  min-width: 0;
`;
