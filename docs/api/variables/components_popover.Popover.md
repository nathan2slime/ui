# Variable: Popover

> `const` **Popover**: `ForwardRefExoticComponent`\<`Omit`\<`PopoverProps`, `"id"`\> & `object` & `Partial`\<\{ `arrowClassName`: `string`; `arrowTipClassName`: `string`; `bodyClassName`: `string`; `className`: `string`; `closeLabel`: `ReactNode`; `closeTriggerClassName`: `string`; `color`: [`PopoverColor`](../types/components_popover.PopoverColor.md); `contentClassName`: `string`; `description`: `ReactNode`; `descriptionClassName`: `string`; `footer`: `ReactNode`; `footerClassName`: `string`; `id`: `string`; `positionerClassName`: `string`; `showArrow`: `boolean`; `size`: [`PopoverSize`](../types/components_popover.PopoverSize.md); `style`: `CSSProperties`; `title`: `ReactNode`; `titleClassName`: `string`; `triggerClassName`: `string`; \}\> & `object` & `RefAttributes`\<`HTMLDivElement`\>\>

Renders a Zag-backed popover with a trigger, dialog content, and close trigger.

## Example

```tsx
<Popover trigger="Click me" title="Presenters" description="Description">
  <button type="button">Action Button</button>
</Popover>
```
