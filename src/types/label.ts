import type { LabelHTMLAttributes, PropsWithChildren } from 'react';

import type { InputColor, InputSize } from '@/types/input';

/**
 * Props accepted by the shared field label component.
 */
export type LabelProps = PropsWithChildren<
  Omit<LabelHTMLAttributes<HTMLLabelElement>, 'color' | 'htmlFor'> & {
    /**
     * References the id of the related form control.
     */
    htmlFor: string;
  } & Partial<{
      /**
       * Aligns the label spacing and typography with the related field.
       * @default 'md'
       */
      size: InputSize;
      /**
       * Applies the semantic color treatment of the related field.
       * @default 'default'
       */
      color: InputColor;
    }>
>;
