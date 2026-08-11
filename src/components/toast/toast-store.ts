import { createStore } from '@zag-js/toast';

import type { ToastStore, ToastStoreProps } from '@/types/toast';

/**
 * Creates an isolated toast store for rendering with `Toaster`.
 *
 * @param props Store placement, overlap, duration, and queue options.
 * @returns A Zag toast store that can create, update, and dismiss toasts.
 */
export const createToaster = (props?: ToastStoreProps): ToastStore =>
  createStore(props);

/** Default singleton toast store for app-level notifications. */
export const toaster = createToaster({
  overlap: true,
  placement: 'top-end',
});
