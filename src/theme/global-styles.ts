import { createGlobalStyle } from 'styled-components';

/**
 * Provides the global animation used by loading indicators.
 *
 * The stylesheet intentionally contains no reset or theme rules. Consumers
 * remain responsible for those styles in the environment where the library
 * is rendered.
 */
export const GlobalStyles = createGlobalStyle`
  @layer base {
    @keyframes ui-spinner-rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
