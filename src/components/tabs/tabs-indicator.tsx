import { mergeProps } from '@zag-js/react';
import { MotionConfig, motion } from 'motion/react';
import type { CSSProperties } from 'react';
import { useCallback, useMemo, useRef } from 'react';

import { StyledTabsIndicator } from '@/components/tabs/tabs.styles';
import { useTabsContext } from '@/components/tabs/tabs-context';
import type { TabsIndicatorProps } from '@/types/tabs';

type IndicatorGeometry = Partial<
  Pick<CSSProperties, 'height' | 'left' | 'top' | 'width'>
>;

type InlineStyleRecord = CSSProperties & Record<string, unknown>;
type IndicatorOrientation = 'horizontal' | 'vertical';

const motionLifecycleStyleProperties = new Set([
  'transitionDuration',
  'transitionProperty',
  'transitionTimingFunction',
  'willChange',
]);

const getStyleValue = (
  style: CSSProperties | undefined,
  property: string,
): string | number | undefined => {
  const value = (style as InlineStyleRecord | undefined)?.[property];

  return typeof value === 'string' || typeof value === 'number'
    ? value
    : undefined;
};

const getIndicatorGeometry = (
  style: CSSProperties | undefined,
  orientation: IndicatorOrientation,
): IndicatorGeometry => ({
  ...(orientation === 'horizontal'
    ? {
        left: getStyleValue(style, '--left'),
        width: getStyleValue(style, '--width'),
      }
    : {
        height: getStyleValue(style, '--height'),
        top: getStyleValue(style, '--top'),
      }),
});

const getStaticIndicatorStyle = (
  style: CSSProperties | undefined,
  orientation: IndicatorOrientation,
): CSSProperties => {
  if (!style) return {};

  const styleRecord = style as InlineStyleRecord;
  const motionGeometryProperties =
    orientation === 'horizontal'
      ? new Set(['--left', '--width', 'left', 'width'])
      : new Set(['--height', '--top', 'height', 'top']);
  const staticEntries = Object.entries(styleRecord).filter(
    ([property]) =>
      !motionLifecycleStyleProperties.has(property) &&
      !motionGeometryProperties.has(property),
  );

  return Object.fromEntries(staticEntries) as CSSProperties;
};

const useIndicatorMotion = (
  style: CSSProperties | undefined,
  orientation: IndicatorOrientation,
) => {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const geometry = useMemo(
    () => getIndicatorGeometry(style, orientation),
    [orientation, style],
  );
  const staticStyle = useMemo(
    () => getStaticIndicatorStyle(style, orientation),
    [orientation, style],
  );
  const shouldAnimate = getStyleValue(style, 'transitionDuration') !== '0ms';
  const notifyZagOfCompletion = useCallback(() => {
    if (!shouldAnimate) return;

    indicatorRef.current?.dispatchEvent(
      new Event('transitionend', { bubbles: true }),
    );
  }, [shouldAnimate]);

  return {
    geometry,
    indicatorRef,
    notifyZagOfCompletion,
    staticStyle,
    transition: { duration: shouldAnimate ? 0.18 : 0 },
  };
};

const MotionTabsIndicator = motion.create(StyledTabsIndicator);

/** Renders Zag's measured active-tab indicator. */
export const TabsIndicator = (props: TabsIndicatorProps) => {
  const { api, orientation } = useTabsContext();
  const indicatorProps = api.getIndicatorProps();
  const mergedProps = mergeProps(props, indicatorProps);
  const {
    onAnimationStart,
    onDrag,
    onDragEnd,
    onDragStart,
    style,
    ...motionProps
  } = mergedProps;
  const {
    geometry,
    indicatorRef,
    notifyZagOfCompletion,
    staticStyle,
    transition,
  } = useIndicatorMotion(style, orientation);

  return (
    <MotionConfig reducedMotion="user">
      <MotionTabsIndicator
        {...motionProps}
        key={orientation}
        ref={indicatorRef}
        animate={geometry}
        aria-hidden="true"
        data-part="indicator"
        initial={false}
        onAnimationStartCapture={onAnimationStart}
        onAnimationComplete={notifyZagOfCompletion}
        onDragCapture={onDrag}
        onDragEndCapture={onDragEnd}
        onDragStartCapture={onDragStart}
        style={staticStyle}
        transition={transition}
      />
    </MotionConfig>
  );
};
