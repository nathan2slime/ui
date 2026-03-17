import type { CSSProperties, PropsWithChildren } from 'react';

const alignmentMap = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
} as const;

const justifyMap = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
} as const;

const surfaceMap = {
  contrast: '#111827',
  muted: '#f8fafc',
  plain: 'transparent',
  soft: '#dbeafe',
  subtle: '#e2e8f0',
} as const;

/**
 * Shared wrapper used by MDX preview snippets to avoid repeated inline layout markup.
 */
export type ExampleFrameProps = PropsWithChildren<
  {} & Partial<{
    align: keyof typeof alignmentMap;
    center: boolean;
    direction: 'column' | 'row';
    gap: string;
    justify: keyof typeof justifyMap;
    maxWidth: string;
    minHeight: string;
    padding: string;
    vars: CSSProperties;
    width: string;
    wrap: boolean;
  }>
>;

/**
 * Shared surface block used by MDX preview snippets for nested demo areas.
 */
export type ExampleSurfaceProps = PropsWithChildren<
  {} & Partial<{
    minHeight: string;
    minWidth: string;
    padding: string;
    radius: string;
    surface: keyof typeof surfaceMap;
  }>
>;

/**
 * Provides consistent spacing and optional centering for component previews in docs.
 */
export const ExampleFrame = ({
  align = 'start',
  center = false,
  children,
  direction = 'column',
  gap = '0',
  justify = 'start',
  maxWidth,
  padding = '20px',
  vars,
  width,
  wrap = false,
  minHeight = '100%',
}: ExampleFrameProps) => {
  const style: CSSProperties = {
    alignItems: center ? 'center' : alignmentMap[align],
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    gap,
    minHeight,
    justifyContent: justifyMap[justify],
    padding,
  };

  if (width) {
    style.width = width;
  }

  if (maxWidth) {
    style.maxWidth = maxWidth;
  }

  return <div style={{ ...style, ...vars }}>{children}</div>;
};

/**
 * Renders a lightweight surface for demo-only placeholders and contrast backdrops.
 */
export const ExampleSurface = ({
  children,
  minHeight,
  minWidth,
  padding = '0',
  radius = '12px',
  surface = 'plain',
}: ExampleSurfaceProps) => {
  const style: CSSProperties = {
    background: surfaceMap[surface],
    borderRadius: radius,
    padding,
  };

  if (minHeight) {
    style.minHeight = minHeight;
  }

  if (minWidth) {
    style.minWidth = minWidth;
  }

  return <div style={style}>{children}</div>;
};
