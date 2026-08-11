import styled from 'styled-components';

import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

const themeValue =
  (name: 'ink' | 'navy' | 'paper' | 'sky', fallback: string) =>
  ({ theme }: UiStyledExecutionContext) =>
    theme?.[name] ?? fallback;

export const StyledTabsRoot = styled.div`
  --tabs-ink: ${themeValue('ink', 'hsl(226 34% 18%)')};
  --tabs-navy: ${themeValue('navy', 'hsl(226 34% 18%)')};
  --tabs-paper: ${themeValue('paper', 'hsl(42 100% 98%)')};
  --tabs-accent: ${themeValue('sky', 'hsl(192 86% 48%)')};
  --tabs-muted: color-mix(in srgb, var(--tabs-ink) 64%, var(--tabs-paper));
  box-sizing: border-box;
  color: var(--tabs-ink);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  min-width: 0;
  width: 100%;

  &[data-color='success'] {
    --tabs-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.mint ?? theme?.colorPalettes.success.solid.background};
  }

  &[data-color='warning'] {
    --tabs-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.yellow ?? theme?.colorPalettes.warning.solid.background};
  }

  &[data-color='danger'] {
    --tabs-accent: ${({ theme }: UiStyledExecutionContext) =>
      theme?.pink ?? theme?.colorPalettes.danger.solid.background};
  }
`;

export const StyledTabsList = styled.div`
  align-items: stretch;
  background: color-mix(in srgb, var(--tabs-paper) 88%, var(--tabs-accent));
  border: 0.14rem solid var(--tabs-navy);
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0 var(--tabs-navy);
  display: flex;
  gap: 0.25rem;
  min-width: 0;
  overflow-x: auto;
  padding: 0.3rem;
  position: relative;

  &[data-orientation='vertical'] {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 36rem) {
    border-radius: 0.85rem;
  }
`;

export const StyledTabsTrigger = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: 0.7rem;
  color: var(--tabs-muted);
  cursor: pointer;
  flex: 1 0 auto;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.88rem;
  font-weight: 850;
  letter-spacing: 0.015em;
  line-height: 1.1;
  min-height: 2.7rem;
  outline: none;
  padding: 0.75rem 1rem;
  position: relative;
  transition: color 180ms ease;
  white-space: nowrap;
  z-index: 1;

  &:hover:not(:disabled),
  &[aria-selected='true'],
  &[data-selected],
  &[data-state='active'] {
    color: var(--tabs-ink);
  }

  &[aria-selected='true'],
  &[data-selected],
  &[data-state='active'] {
    background: color-mix(in srgb, var(--tabs-accent) 34%, var(--tabs-paper));
    color: var(--tabs-ink);
    font-weight: 900;
  }

  &:focus-visible,
  &[data-focus-visible='true'] {
    outline: 0.15rem solid var(--tabs-accent);
    outline-offset: -0.12rem;
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.45;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledTabsIndicator = styled.div`
  background: var(--tabs-accent);
  border-radius: 999px;
  bottom: 0.3rem;
  height: 0.22rem;
  pointer-events: none;
  position: absolute;
  z-index: 2;

  [data-orientation='vertical'] & {
    bottom: auto;
    left: 0.3rem;
    width: 0.22rem;
  }
`;

export const StyledTabsContent = styled.div`
  box-sizing: border-box;

  &[hidden] {
    display: none;
  }
`;
