import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { normalizeProps, useMachine } from '@zag-js/react';
import { group } from '@zag-js/toast';

import { Toast } from '@/components/toast/toast';
import { StyledToastGroup } from '@/components/toast/toast.styles';
import { toaster as defaultToaster } from '@/components/toast/toast-store';
import type { ToastContent, ToasterProps } from '@/types/toast';

/**
 * Renders the live toast region for a Zag toast store.
 *
 * @example
 * ```tsx
 * <Toaster />
 * toaster.create({ title: 'Hello' })
 * ```
 */
export const Toaster = ({
  className,
  label = 'Notifications',
  store = defaultToaster,
}: ToasterProps) => {
  const service = useMachine(group.machine, {
    store,
  });
  const api = group.connect<ZagPropTypes, ToastContent>(
    service,
    normalizeProps,
  );

  return (
    <StyledToastGroup
      {...api.getGroupProps({ label })}
      className={className}
      data-part="group"
    >
      {api.getToasts().map((toast, index) => (
        <Toast
          index={index}
          key={toast.id ?? index}
          parent={service}
          toast={toast}
        />
      ))}
    </StyledToastGroup>
  );
};
