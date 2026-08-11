import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import type { PropTypes as ZagPropTypes } from '@zag-js/react';
import { normalizeProps, useMachine } from '@zag-js/react';
import { connect, machine } from '@zag-js/toast';

import {
  StyledToastActionButton,
  StyledToastActions,
  StyledToastCloseButton,
  StyledToastContent,
  StyledToastDescription,
  StyledToastGhost,
  StyledToastRoot,
  StyledToastTitle,
} from '@/components/toast/toast.styles';
import type { ToastContent, ToastProps } from '@/types/toast';

/**
 * Renders one toast item from a Zag toast group.
 *
 * @param props Toast data, parent group service, and index supplied by `Toaster`.
 * @returns The accessible toast item.
 */
export const Toast = ({ index, parent, toast }: ToastProps) => {
  const service = useMachine(machine, {
    ...toast,
    index,
    parent,
  });
  const api = connect<ZagPropTypes, ToastContent>(service, normalizeProps);

  return (
    <StyledToastRoot {...api.getRootProps()} data-part="root">
      <StyledToastGhost {...api.getGhostBeforeProps()} />
      <StyledToastContent data-part="content">
        {api.title ? (
          <StyledToastTitle {...api.getTitleProps()} data-part="title">
            {api.title}
          </StyledToastTitle>
        ) : null}
        {api.description ? (
          <StyledToastDescription
            {...api.getDescriptionProps()}
            data-part="description"
          >
            {api.description}
          </StyledToastDescription>
        ) : null}
      </StyledToastContent>
      {api.closable ? (
        <StyledToastCloseButton
          {...api.getCloseTriggerProps()}
          data-part="close-trigger"
        >
          <HugeiconsIcon aria-hidden="true" icon={Cancel01Icon} size={16} />
        </StyledToastCloseButton>
      ) : null}
      {toast.action ? (
        <StyledToastActions data-part="actions">
          <StyledToastActionButton
            {...api.getActionTriggerProps()}
            data-part="action-trigger"
          >
            {toast.action.label}
          </StyledToastActionButton>
        </StyledToastActions>
      ) : null}
      <StyledToastGhost {...api.getGhostAfterProps()} />
    </StyledToastRoot>
  );
};
