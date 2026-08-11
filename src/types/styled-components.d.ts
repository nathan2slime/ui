import type { UiTheme } from '@/types/theme';

declare module 'styled-components' {
  /** Supplies the library theme shape to styled-components consumers. */
  export interface DefaultTheme extends UiTheme {}
}
