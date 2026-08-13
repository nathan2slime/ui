import styled from 'styled-components';

import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

export const StyledInputRoot = styled.div`
  --input-navy: ${({ theme }: UiStyledExecutionContext) => theme?.navy ?? theme?.colorPalettes.default.outline.border};
  --input-ink: ${({ theme }: UiStyledExecutionContext) => theme?.ink ?? theme?.colorPalettes.default.ghost.foreground};
  --input-paper: ${({ theme }: UiStyledExecutionContext) => theme?.paper ?? theme?.colorPalettes.default.outline.hoverBackground};
  --input-pink: ${({ theme }: UiStyledExecutionContext) => theme?.pink ?? theme?.colorPalettes.danger.solid.background};
  --input-sky: ${({ theme }: UiStyledExecutionContext) => theme?.sky ?? theme?.colorPalettes.default.solid.background};
  --input-mint: ${({ theme }: UiStyledExecutionContext) => theme?.mint ?? theme?.colorPalettes.success.solid.background};
  --input-yellow: ${({ theme }: UiStyledExecutionContext) => theme?.yellow ?? theme?.colorPalettes.warning.solid.background};
  --input-placeholder: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.default.outline.hoverBorder};
  --input-success: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.success.ghost.foreground};
  --input-warning: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.warning.ghost.foreground};
  --input-danger: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.danger.solid.background};
  --input-danger-shadow: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.danger.outline.hoverBorder};
  --input-accent: var(--input-sky);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  min-width: 0;
  width: max-content;

  &[data-full-width='true'] {
    width: 100%;
  }

  &[data-color='success'] {
    --input-accent: var(--input-mint);
  }

  &[data-color='warning'] {
    --input-accent: var(--input-yellow);
  }

  &[data-color='danger'] {
    --input-accent: var(--input-pink);
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
  }
`;

export const StyledInputLabel = styled.label`
  color: var(--input-navy);
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.2;
  padding-inline: 0.25rem;

  &[data-status='danger'] {
    color: var(--input-danger-shadow);
  }

  &[data-status='success'] {
    color: var(--input-success);
  }

  &[data-status='warning'] {
    color: var(--input-warning);
  }
`;

export const StyledInputControl = styled.input`
  --input-shadow-ring: var(--input-navy);
  --input-shadow-drop: var(--input-navy);
  --input-shadow-glow: color-mix(in srgb, var(--input-navy) 14%, var(--input-paper));
  --input-focus-ring: var(--input-sky);
  --input-focus-glow: color-mix(in srgb, var(--input-sky) 34%, transparent);
  appearance: none;
  background: linear-gradient(180deg, var(--input-paper) 0%, var(--input-paper) 100%);
  border: 0;
  border-radius: 1.1rem;
  box-shadow: inset 0 0 0 0.18rem var(--input-shadow-ring), 0 0.3rem 0 var(--input-shadow-drop), 0 0.55rem 1rem var(--input-shadow-glow);
  box-sizing: border-box;
  color: var(--input-ink);
  display: block;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.control};
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  line-height: 1;
  min-width: min(18rem, calc(100vw - 2rem));
  outline: none;
  padding: 0.7rem 1.1rem;
  transition: background-color 180ms ease, box-shadow 180ms ease,
    transform 180ms ease;
  width: 100%;

  &::placeholder {
    color: var(--input-placeholder);
    font-weight: 700;
    opacity: 1;
  }

  &:hover:not(:disabled) {
    background: linear-gradient(180deg, var(--input-paper) 0%, color-mix(in srgb, var(--input-accent) 34%, var(--input-paper)) 100%);
    transform: translateY(-0.12rem);
  }

  &:focus-visible {
    background: linear-gradient(180deg, var(--input-paper) 0%, color-mix(in srgb, var(--input-accent) 42%, var(--input-paper)) 100%);
    box-shadow: inset 0 0 0 0.18rem var(--input-focus-ring), 0 0.3rem 0 var(--input-shadow-drop), 0 0 0 0.2rem var(--input-focus-glow), 0 0.65rem 1.1rem var(--input-shadow-glow);
  }

  &[data-variant='border'] {
    background: linear-gradient(180deg, var(--input-paper) 0%, var(--input-paper) 100%);
    box-shadow: inset 0 0 0 0.18rem var(--input-shadow-ring), 0 0.3rem 0 var(--input-shadow-drop), 0 0.55rem 1rem var(--input-shadow-glow);
    color: var(--input-ink);
  }

  &[data-variant='border']:hover:not(:disabled) {
    background: linear-gradient(180deg, var(--input-paper) 0%, color-mix(in srgb, var(--input-accent) 38%, var(--input-paper)) 100%);
    transform: translateY(-0.12rem);
  }

  &[data-variant='border']:focus-visible {
    background: linear-gradient(180deg, var(--input-paper) 0%, color-mix(in srgb, var(--input-accent) 42%, var(--input-paper)) 100%);
    box-shadow: inset 0 0 0 0.18rem var(--input-focus-ring), 0 0.3rem 0 var(--input-shadow-drop), 0 0 0 0.2rem var(--input-focus-glow), 0 0.65rem 1.1rem var(--input-shadow-glow);
  }

  &[data-status='success'] {
    --input-shadow-ring: var(--input-success);
    --input-shadow-drop: var(--input-success);
    --input-shadow-glow: color-mix(in srgb, var(--input-success) 16%, var(--input-paper));
    --input-focus-ring: var(--input-success);
    --input-focus-glow: color-mix(in srgb, var(--input-success) 34%, transparent);
  }

  &[data-status='warning'] {
    --input-shadow-ring: var(--input-warning);
    --input-shadow-drop: var(--input-warning);
    --input-shadow-glow: color-mix(in srgb, var(--input-warning) 16%, var(--input-paper));
    --input-focus-ring: var(--input-warning);
    --input-focus-glow: color-mix(in srgb, var(--input-warning) 34%, transparent);
  }

  &[aria-invalid='true'],
  &[data-status='danger'] {
    --input-shadow-ring: var(--input-danger);
    --input-shadow-drop: var(--input-danger-shadow);
    --input-shadow-glow: color-mix(in srgb, var(--input-danger-shadow) 16%, var(--input-paper));
    --input-focus-ring: var(--input-danger);
    --input-focus-glow: color-mix(in srgb, var(--input-danger) 34%, transparent);
  }

  &:disabled {
    cursor: not-allowed;
    filter: saturate(0.65);
    opacity: 0.62;
    transform: none;
  }

  &[data-size='sm'] {
    font-size: 0.875rem;
    min-height: 2.625rem;
    padding-block: 0.55rem;
  }

  &[data-size='md'] {
    min-height: 3.125rem;
  }

  &[data-size='lg'] {
    font-size: 1.05rem;
    min-height: 3.625rem;
    padding-block: 0.88rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledInputHelperText = styled.p`
  color: var(--input-placeholder);
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
  padding-inline: 0.25rem;

  &[data-status='success'] {
    color: var(--input-success);
  }

  &[data-status='warning'] {
    color: var(--input-warning);
  }

  &[data-status='danger'] {
    color: var(--input-danger);
  }
`;
