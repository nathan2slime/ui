import styled from 'styled-components';

import type { UiStyledExecutionContext } from '@/types/styled-execution-context';

export const StyledScrollAreaRoot = styled.div`
  --scroll-area-navy: ${({ theme }: UiStyledExecutionContext) => theme?.navy};
  --scroll-area-paper: ${({ theme }: UiStyledExecutionContext) => theme?.paper};
  --scroll-area-accent: ${({ theme }: UiStyledExecutionContext) => theme?.sky};
  --scroll-area-track: color-mix(in srgb, var(--scroll-area-paper) 84%, var(--scroll-area-accent));
  --scroll-area-size: 0.7rem;
  background: var(--scroll-area-paper);
  border: 0.16rem solid var(--scroll-area-navy);
  border-radius: 1.1rem;
  box-shadow: 0 0.32rem 0 var(--scroll-area-navy);
  box-sizing: border-box;
  color: ${({ theme }: UiStyledExecutionContext) => theme?.ink};
  overflow: hidden;
  position: relative;

  &[data-size='sm'] {
    --scroll-area-size: 0.55rem;
  }

  &[data-size='lg'] {
    --scroll-area-size: 0.85rem;
  }
`;

export const StyledScrollAreaViewport = styled.div`
  box-sizing: border-box;
  height: 100%;
  outline: none;
  scrollbar-width: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus-visible {
    outline: 0.16rem solid var(--scroll-area-accent);
    outline-offset: -0.28rem;
  }
`;

export const StyledScrollAreaContent = styled.div`
  box-sizing: border-box;
`;

export const StyledScrollAreaScrollbar = styled.div`
  background: var(--scroll-area-track);
  border-radius: 999px;
  opacity: 0.78;
  padding: 0.12rem;
  transition-duration: 160ms;
  transition-property: opacity;
  transition-timing-function: ease;

  &[data-orientation='vertical'] {
    width: var(--scroll-area-size);
  }

  &[data-orientation='horizontal'] {
    height: var(--scroll-area-size);
  }

  &[data-hover],
  &[data-dragging],
  &[data-scrolling] {
    opacity: 1;
  }

  &[data-orientation='vertical']:not([data-overflow-y]),
  &[data-orientation='horizontal']:not([data-overflow-x]) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const StyledScrollAreaThumb = styled.div`
  background: var(--scroll-area-navy);
  border-radius: 999px;
  min-height: var(--scroll-area-size);
  min-width: var(--scroll-area-size);
  position: relative;

  &[data-orientation='vertical'] {
    width: 100%;
  }

  &[data-orientation='horizontal'] {
    height: 100%;
  }
`;

export const StyledScrollAreaCorner = styled.div`
  background: var(--scroll-area-track);

  &[data-state='hidden'] {
    display: none;
  }
`;
