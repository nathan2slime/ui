import { afterEach, describe, expect, rs, test } from '@rstest/core';
import type { ComponentType, ReactElement, ReactNode } from 'react';

type MotionControlProps = {
  animate?: unknown;
  initial?: unknown;
  onAnimationComplete?: unknown;
  onAnimationStartCapture?: unknown;
  onDragCapture?: unknown;
  onDragEndCapture?: unknown;
  onDragStartCapture?: unknown;
  transition?: unknown;
  variants?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
};

type MotionConfigProps = {
  children?: ReactNode;
  reducedMotion?: unknown;
};

const originalMatchMedia = Object.getOwnPropertyDescriptor(
  window,
  'matchMedia',
);

const matchMediaStub = (query: string): MediaQueryList => ({
  matches: true,
  media: query,
  onchange: null,
  addEventListener: () => undefined,
  removeEventListener: () => undefined,
  addListener: () => undefined,
  removeListener: () => undefined,
  dispatchEvent: () => true,
});

Object.defineProperty(window, 'matchMedia', {
  configurable: true,
  value: matchMediaStub,
  writable: true,
});

const capturedRequestedTransitions = new Map<string, unknown>();
const capturedEffectiveTransitions = new Map<string, unknown>();

const getMotionPart = (props: object): string => {
  const part = Reflect.get(props, 'data-part');

  return typeof part === 'string' ? part : 'unknown';
};

const restoreMatchMedia = () => {
  if (originalMatchMedia) {
    Object.defineProperty(window, 'matchMedia', originalMatchMedia);
  } else {
    Reflect.deleteProperty(window, 'matchMedia');
  }
};

// The component graph is imported only after the matchMedia stub is installed.
const loadComponentGraph = async () => {
  const reactModule = await import('react');
  const { createElement } = reactModule;
  const MotionConfig = (props: MotionConfigProps) => props.children;
  const motion = {
    create: <Props extends object>(Component: ComponentType<Props>) => {
      const MotionComponent = (props: Props & MotionControlProps) => {
        const motionPart = getMotionPart(props);
        const effectiveTransition = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches
          ? { duration: 0 }
          : props.transition;

        capturedRequestedTransitions.set(motionPart, props.transition);
        capturedEffectiveTransitions.set(motionPart, effectiveTransition);

        const {
          animate: _animate,
          initial: _initial,
          onAnimationComplete: _onAnimationComplete,
          onAnimationStartCapture: _onAnimationStartCapture,
          onDragCapture: _onDragCapture,
          onDragEndCapture: _onDragEndCapture,
          onDragStartCapture: _onDragStartCapture,
          transition: _transition,
          variants: _variants,
          whileHover: _whileHover,
          whileTap: _whileTap,
          ...componentProps
        } = props;

        return createElement(
          Component as unknown as ComponentType<Record<string, unknown>>,
          componentProps as unknown as Record<string, unknown>,
        );
      };

      return MotionComponent;
    },
  };

  rs.doMock(
    import('motion/react'),
    () =>
      ({ MotionConfig, motion }) as unknown as Partial<
        typeof import('motion/react')
      >,
  );

  const [testingLibrary, tabsModule, themeModule] = await Promise.all([
    import('@testing-library/react'),
    import('@/components/tabs'),
    import('@/theme'),
  ]);

  return [reactModule, testingLibrary, tabsModule, themeModule] as const;
};

let componentGraphPromise: ReturnType<typeof loadComponentGraph> | undefined;

afterEach(async () => {
  if (componentGraphPromise) {
    const [, { cleanup }] = await componentGraphPromise;
    cleanup();
  }
  capturedRequestedTransitions.clear();
  capturedEffectiveTransitions.clear();
  restoreMatchMedia();
});

describe('Tabs reduced motion isolation', () => {
  test('snaps indicator motion to zero duration when the preference is reduced', async () => {
    componentGraphPromise = loadComponentGraph();
    const [
      { createElement },
      { fireEvent, render, screen, waitFor },
      { Tabs },
      { ThemeProvider, theme },
    ] = await componentGraphPromise;
    const componentElement = createElement as unknown as ElementFactory;
    const tabs = componentElement(
      ThemeProvider as unknown as ComponentType<Record<string, unknown>>,
      { theme },
      componentElement(
        Tabs as unknown as ComponentType<Record<string, unknown>>,
        { defaultValue: 'account' },
        componentElement(
          Tabs.List as unknown as ComponentType<Record<string, unknown>>,
          {},
          componentElement(
            Tabs.Trigger as unknown as ComponentType<Record<string, unknown>>,
            { value: 'account' },
            'Account',
          ),
          componentElement(
            Tabs.Trigger as unknown as ComponentType<Record<string, unknown>>,
            { value: 'password' },
            'Password',
          ),
          componentElement(
            Tabs.Indicator as unknown as ComponentType<Record<string, unknown>>,
            { 'data-testid': 'indicator' },
          ),
        ),
        componentElement(
          Tabs.Content as unknown as ComponentType<Record<string, unknown>>,
          { value: 'account' },
          'Account content',
        ),
        componentElement(
          Tabs.Content as unknown as ComponentType<Record<string, unknown>>,
          { value: 'password' },
          'Password content',
        ),
      ),
    );

    render(tabs);

    expect(screen.getByTestId('indicator')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
    expect(capturedRequestedTransitions.get('indicator')).toEqual({
      duration: 0,
    });
    expect(capturedEffectiveTransitions.get('indicator')).toEqual({
      duration: 0,
    });
    expect(capturedEffectiveTransitions.get('content')).toEqual({
      duration: 0,
    });

    fireEvent.click(screen.getByRole('tab', { name: 'Password' }));

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: 'Password' })).toHaveAttribute(
        'aria-selected',
        'true',
      );
    });
    expect(capturedRequestedTransitions.get('indicator')).toEqual({
      duration: 0.18,
    });
    expect(capturedEffectiveTransitions.get('indicator')).toEqual({
      duration: 0,
    });
  });
});

type ElementFactory = (
  component: ComponentType<Record<string, unknown>>,
  props: Record<string, unknown>,
  ...children: ReactNode[]
) => ReactElement;
