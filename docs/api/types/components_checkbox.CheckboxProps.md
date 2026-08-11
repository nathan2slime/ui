# Type Alias: CheckboxProps

> **CheckboxProps** = `PropsWithChildren`\<`Omit`\<`ZagCheckboxProps`, `"id"` \| `"label"`\> & `Partial`\<\{ `checkedLabel`: `ReactNode`; `className`: `string`; `color`: [`CheckboxColor`](components_checkbox.CheckboxColor.md); `id`: `string`; `indeterminateLabel`: `ReactNode`; `label`: `ReactNode`; `labelPlacement`: [`CheckboxLabelPlacement`](components_checkbox.CheckboxLabelPlacement.md); `size`: [`CheckboxSize`](components_checkbox.CheckboxSize.md); `uncheckedLabel`: `ReactNode`; \}\>\>

Props accepted by the Zag-backed checkbox component.

## Example

```tsx
<Checkbox label="Accept terms" defaultChecked />
```
