# Type Alias: PopoverProps

> **PopoverProps** = `PropsWithChildren`\<`Omit`\<`ZagPopoverProps`, `"id"`\> & `object` & `Partial`\<\{ `arrowClassName`: `string`; `arrowTipClassName`: `string`; `bodyClassName`: `string`; `className`: `string`; `closeLabel`: `ReactNode`; `closeTriggerClassName`: `string`; `color`: [`PopoverColor`](components_popover.PopoverColor.md); `contentClassName`: `string`; `description`: `ReactNode`; `descriptionClassName`: `string`; `footer`: `ReactNode`; `footerClassName`: `string`; `id`: `string`; `positionerClassName`: `string`; `showArrow`: `boolean`; `size`: [`PopoverSize`](components_popover.PopoverSize.md); `style`: `CSSProperties`; `title`: `ReactNode`; `titleClassName`: `string`; `triggerClassName`: `string`; \}\>\>

Props accepted by the Zag-backed popover component.

## Example

```tsx
<Popover trigger="Click me" title="Presenters" description="Description">
  <button type="button">Action Button</button>
</Popover>
```
