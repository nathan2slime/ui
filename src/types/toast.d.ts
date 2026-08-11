import type {
  ActionOptions as ZagToastActionOptions,
  GroupService as ZagToastGroupService,
  Options as ZagToastOptions,
  Placement as ZagToastPlacement,
  Props as ZagToastProps,
  Status as ZagToastStatus,
  StatusChangeDetails as ZagToastStatusChangeDetails,
  Store as ZagToastStore,
  StoreProps as ZagToastStoreProps,
  Type as ZagToastType,
} from '@zag-js/toast';
import type { ReactNode } from 'react';

/** Content accepted by toast title and description fields. */
export type ToastContent = ReactNode;

/** Semantic toast type forwarded to Zag's toast machine. */
export type ToastType = ZagToastType;

/** Screen placement supported by Zag's toast store. */
export type ToastPlacement = ZagToastPlacement;

/** Visibility state emitted by Zag when a toast changes status. */
export type ToastStatus = ZagToastStatus;

/** Details emitted by Zag when a toast changes status. */
export type ToastStatusChangeDetails = ZagToastStatusChangeDetails;

/** Action button configuration rendered inside a toast. */
export type ToastActionOptions = ZagToastActionOptions;

/** Options accepted by `toaster.create`, `toaster.success`, and related helpers. */
export type ToastOptions = ZagToastOptions<ToastContent>;

/** Configuration accepted when creating a toast store. */
export type ToastStoreProps = ZagToastStoreProps;

/** Store used by `Toaster` to publish, update, and dismiss toasts. */
export type ToastStore = ZagToastStore<ToastContent>;

/** Toast data supplied by Zag's group API to each toast item. */
export type ToastData = Omit<ZagToastProps<ToastContent>, 'index' | 'parent'>;

/** Props used to render one toast item inside a `Toaster`. */
export type ToastProps = {
  /** Toast payload provided by Zag's group API. */
  toast: ToastData;
  /** Parent group service that coordinates layout and dismissal. */
  parent: ZagToastGroupService;
  /** Position of this toast in the rendered group. */
  index: number;
};

/** Props accepted by the toast region component. */
export type ToasterProps = Partial<{
  /** Toast store to render. Defaults to the exported singleton `toaster`. */
  store: ToastStore;
  /** Accessible label for the toast region. @defaultValue 'Notifications' */
  label: string;
  /** Class name applied to the toast group element. */
  className: string;
}>;
