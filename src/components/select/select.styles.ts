import styled from 'styled-components';

import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

export const StyledSelectRoot = styled.div`
  --select-navy: ${({ theme }: UiStyledExecutionContext) => theme?.navy ?? theme?.colorPalettes.default.outline.border};
  --select-ink: ${({ theme }: UiStyledExecutionContext) => theme?.ink ?? theme?.colorPalettes.default.ghost.foreground};
  --select-paper: ${({ theme }: UiStyledExecutionContext) => theme?.paper ?? theme?.colorPalettes.default.outline.hoverBackground};
  --select-pink: ${({ theme }: UiStyledExecutionContext) => theme?.pink ?? theme?.colorPalettes.danger.solid.background};
  --select-sky: ${({ theme }: UiStyledExecutionContext) => theme?.sky ?? theme?.colorPalettes.default.solid.background};
  --select-mint: ${({ theme }: UiStyledExecutionContext) => theme?.mint ?? theme?.colorPalettes.success.solid.background};
  --select-yellow: ${({ theme }: UiStyledExecutionContext) => theme?.yellow ?? theme?.colorPalettes.warning.solid.background};
  --select-placeholder: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.default.outline.hoverBorder};
  --select-success: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.success.ghost.foreground};
  --select-warning: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.warning.ghost.foreground};
  --select-danger: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.danger.solid.background};
  --select-danger-shadow: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.danger.outline.hoverBorder};
  --select-checked: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.default.ghost.hoverBackground};
  --select-accent: var(--select-sky);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  min-width: 0;
  position: relative;
  width: 100%;

  &[data-color='success'] {
    --select-accent: var(--select-mint);
  }

  &[data-color='warning'] {
    --select-accent: var(--select-yellow);
  }

  &[data-color='danger'] {
    --select-accent: var(--select-pink);
  }

  &:has([data-select-part='trigger'][aria-disabled='true']),
  &:has([data-select-part='trigger']:disabled) {
    cursor: not-allowed;
  }
`;

export const StyledSelectControl = styled.div`
  min-width: 0;
  width: 100%;
`;

export const StyledSelectTrigger = styled.button`
  appearance: none;
  align-items: center;
  background: linear-gradient(180deg, var(--select-paper) 0%, var(--select-paper) 100%);
  border: 0.18rem solid var(--select-navy);
  border-radius: 1.1rem;
  box-shadow: 0 0.3rem 0 var(--select-navy), 0 0.55rem 1rem color-mix(in srgb, var(--select-navy) 14%, var(--select-paper));
  box-sizing: border-box;
  color: var(--select-ink);
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.control};
  font-size: 0.95rem;
  font-weight: 800;
  gap: 0.7rem;
  justify-content: flex-start;
  letter-spacing: 0.01em;
  line-height: 1;
  min-width: 0;
  min-height: 3.125rem;
  outline: none;
  overflow: hidden;
  padding: 0.7rem 0.9rem 0.7rem 1.1rem;
  position: relative;
  text-align: left;
  transition: background-color 180ms ease, border-color 180ms ease,
    box-shadow 180ms ease, transform 180ms ease;
  width: 100%;

  &::before {
    background: linear-gradient(180deg, var(--select-paper), var(--select-paper));
    border-radius: inherit;
    content: '';
    height: 48%;
    inset: 0.15rem 0.35rem auto;
    pointer-events: none;
    position: absolute;
    opacity: 0.12;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &:hover:not(:disabled),
  &[data-state='open'] {
    background: linear-gradient(180deg, var(--select-paper) 0%, color-mix(in srgb, var(--select-accent) 38%, var(--select-paper)) 100%);
    border-color: var(--select-navy);
    transform: translateY(-0.12rem);
  }

  &[data-state='open'] {
    box-shadow: 0 0.16rem 0 var(--select-navy), 0 0.4rem 0.8rem color-mix(in srgb, var(--select-navy) 16%, var(--select-paper));
  }

  &:active:not(:disabled) {
    box-shadow: 0 0.1rem 0 var(--select-navy), 0 0.25rem 0.55rem color-mix(in srgb, var(--select-navy) 12%, var(--select-paper));
    transform: translateY(0.16rem);
  }

  &:focus-visible {
    outline: 0.16rem solid var(--select-navy);
    outline-offset: 0.25rem;
  }

  &[data-focus-visible='true'] {
    outline: 0.16rem solid var(--select-navy);
    outline-offset: 0.25rem;
  }

  &[aria-invalid='true'],
  &[data-invalid='true'] {
    border-color: var(--select-danger);
    box-shadow: 0 0.3rem 0 var(--select-danger-shadow), 0 0.55rem 1rem color-mix(in srgb, var(--select-danger-shadow) 16%, var(--select-paper));
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
    filter: saturate(0.65);
    opacity: 0.62;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledSelectDecorator = styled.span`
  align-items: center;
  color: var(--select-navy);
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;

  & svg {
    height: 1.15rem;
    width: 1.15rem;
  }
`;

export const StyledSelectValue = styled.span`
  min-width: 0;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;

  &[data-placeholder='true'] {
    color: var(--select-placeholder);
    font-weight: 700;
  }
`;

export const StyledSelectIndicator = styled.span`
  border-bottom: 0.16rem solid var(--select-navy);
  border-right: 0.16rem solid var(--select-navy);
  display: block;
  flex: 0 0 auto;
  height: 0.55rem;
  margin-left: auto;
  position: relative;
  transform: rotate(45deg) translateY(-0.15rem);
  transition: transform 180ms ease;
  width: 0.55rem;

  [data-state='open'] & {
    transform: rotate(225deg) translate(-0.1rem, -0.1rem);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledSelectLabel = styled.label`
  color: var(--select-navy);
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  line-height: 1.2;
  padding-inline: 0.25rem;

  &[data-color='danger'] {
    color: var(--select-danger-shadow);
  }
`;

export const StyledSelectHelperText = styled.p`
  color: var(--select-placeholder);
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
  padding-inline: 0.25rem;

  &[data-color='success'] {
    color: var(--select-success);
  }

  &[data-color='warning'] {
    color: var(--select-warning);
  }

  &[data-color='danger'] {
    color: var(--select-danger);
  }
`;

export const StyledSelectPositioner = styled.div`
  --select-navy: ${({ theme }: UiStyledExecutionContext) => theme?.navy ?? theme?.colorPalettes.default.outline.border};
  --select-ink: ${({ theme }: UiStyledExecutionContext) => theme?.ink ?? theme?.colorPalettes.default.ghost.foreground};
  --select-paper: ${({ theme }: UiStyledExecutionContext) => theme?.paper ?? theme?.colorPalettes.default.outline.hoverBackground};
  --select-pink: ${({ theme }: UiStyledExecutionContext) => theme?.pink ?? theme?.colorPalettes.danger.solid.background};
  --select-sky: ${({ theme }: UiStyledExecutionContext) => theme?.sky ?? theme?.colorPalettes.default.solid.background};
  --select-mint: ${({ theme }: UiStyledExecutionContext) => theme?.mint ?? theme?.colorPalettes.success.solid.background};
  --select-yellow: ${({ theme }: UiStyledExecutionContext) => theme?.yellow ?? theme?.colorPalettes.warning.solid.background};
  --select-placeholder: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.default.outline.hoverBorder};
  --select-success: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.success.ghost.foreground};
  --select-warning: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.warning.ghost.foreground};
  --select-danger: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.danger.solid.background};
  --select-danger-shadow: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.danger.outline.hoverBorder};
  --select-checked: ${({ theme }: UiStyledExecutionContext) => theme?.colorPalettes.default.ghost.hoverBackground};
  isolation: isolate;
  min-width: 12rem;
  position: relative;
  width: var(--reference-width, max(100%, 14rem));
  max-width: calc(100vw - 2rem);
  z-index: 1000;
`;

export const StyledSelectContent = styled.div`
  background: var(--select-paper);
  border: 0.16rem solid var(--select-navy);
  border-radius: 1.15rem;
  box-shadow: 0 0.4rem 0 var(--select-navy), 0 0.9rem 1.5rem color-mix(in srgb, var(--select-navy) 20%, var(--select-paper));
  box-sizing: border-box;
  min-width: 100%;
  overflow: visible;
  padding: 0.42rem;
`;

export const StyledSelectList = styled.div`
  display: grid;
  gap: 0.2rem;
  overflow: visible;
`;

export const StyledSelectItem = styled.div`
  align-items: center;
  border-radius: 0.8rem;
  color: var(--select-ink);
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }: UiStyledExecutionContext) =>
    theme?.fontFamilies.body};
  font-size: 0.9rem;
  font-weight: 800;
  gap: 0.65rem;
  justify-content: space-between;
  min-height: 2.65rem;
  padding: 0.55rem 0.7rem 0.55rem 0.85rem;
  transition: background-color 140ms ease, color 140ms ease, transform 140ms ease;

  &[data-highlighted='true'],
  &:hover {
    background: var(--select-sky);
    color: var(--select-navy);
    transform: translateX(0.12rem);
  }

  &[data-state='checked'] {
    background: var(--select-checked);
    color: var(--select-navy);
  }

  &[data-disabled='true'],
  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.46;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledSelectItemText = styled.span`
  min-width: 0;
  overflow-wrap: anywhere;
  white-space: normal;
`;

export const StyledSelectItemIndicator = styled.span`
  align-items: center;
  color: var(--select-navy);
  display: inline-flex;
  flex: 0 0 1.15rem;
  justify-content: center;
  min-height: 1.15rem;

  &[data-state='checked']::after {
    border-bottom: 0.16rem solid currentColor;
    border-right: 0.16rem solid currentColor;
    content: '';
    height: 0.5rem;
    transform: rotate(45deg) translate(-0.08rem, -0.08rem);
    width: 0.28rem;
  }
`;

export const StyledSelectHiddenSelect = styled.select`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
