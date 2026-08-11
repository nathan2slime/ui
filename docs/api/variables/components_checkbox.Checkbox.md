# Variable: Checkbox

> `const` **Checkbox**: `ForwardRefExoticComponent`\<`Omit`\<`CheckboxProps`, `"label"` \| `"id"`\> & `Partial`\<\{ `checkedLabel`: `ReactNode`; `className`: `string`; `color`: [`CheckboxColor`](../types/components_checkbox.CheckboxColor.md); `id`: `string`; `indeterminateLabel`: `ReactNode`; `label`: `ReactNode`; `labelPlacement`: [`CheckboxLabelPlacement`](../types/components_checkbox.CheckboxLabelPlacement.md); `size`: [`CheckboxSize`](../types/components_checkbox.CheckboxSize.md); `uncheckedLabel`: `ReactNode`; \}\> & `object` & `RefAttributes`\<`HTMLInputElement`\>\>

Renders an accessible Zag-backed checkbox with a hidden checkbox input.

## Example

```tsx
<Checkbox label="Accept terms" defaultChecked />
```
