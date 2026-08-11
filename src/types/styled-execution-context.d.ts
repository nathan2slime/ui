import type { ExecutionContext } from 'styled-components';

import type { UiTheme } from '@/types/theme';

/**
 * Styled-components interpolation context with the library theme shape.
 */
export type UiStyledExecutionContext = ExecutionContext & {
  readonly theme?: UiTheme;
};
